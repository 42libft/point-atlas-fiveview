import * as THREE from 'three';
import { GalaxyBody } from './galaxy';
import { AtlasBody, CENTER, type Project } from './model';
import { TrackedPoseSmoother } from '../tracking/pose-smoother';
import { IMAGE_TRACKING_OPTIONS } from '../tracking/image-tracking';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { parseProject } from './project';
import { arParticleScale } from './ar-space';
import './style.css';
import { validateMindTarget, MAX_MIND_BYTES } from './mind-target';
import { ownResizeListener, ownController, type OwnedController } from './mindar-lifecycle';
import { targetProjectionGeometry, type TargetProjectionGeometry } from './tracking-geometry';
const targetAngle=document.createElement('div');targetAngle.className='sub';document.querySelector('#overlay')!.appendChild(targetAngle);
let projection:TargetProjectionGeometry|null=null;
function showProjection(p:TargetProjectionGeometry|null){projection=p;targetAngle.textContent=p?`画像の正面から ${p.angleDeg.toFixed(0)}°（追跡の確率ではありません）`:'';}

const el=<T extends HTMLElement>(id:string)=>document.getElementById(id) as T;
let project:Project|null=null, targetBytes:Uint8Array|null=null, imageUrl:string|null=null, currentBody:AtlasBody|GalaxyBody|null=null;
let arBusy=false;
let activeStop:(()=>void)|undefined;
window.addEventListener('pagehide',()=>activeStop?.());
function loadProject(s:string){project=parseProject(s);el('project-status').textContent=`${project.mode} / ${project.budget}点まで / 5方向 / 色: ${project.contrast} / 読取: ${project.mode==='galaxy'&&project.viewing==='raised'?'上方35°':'水平'}`;el<HTMLButtonElement>('pose').disabled=false;if(targetBytes)el<HTMLButtonElement>('start').disabled=false;}

try{const s=localStorage.getItem('point-atlas-project');if(s)loadProject(s);else el('project-status').textContent='制作画面からAR出力するか、プロジェクトを選んでください。';}catch(e){el('status').textContent=String(e);}
el<HTMLInputElement>('project').onchange=async()=>{try{const f=el<HTMLInputElement>('project').files?.[0];if(f&&f.size<3_000_000)loadProject(await f.text());}catch(e){el('status').textContent=String(e);}};
async function setTarget(url:string){if(imageUrl)URL.revokeObjectURL(imageUrl);imageUrl=url;el<HTMLImageElement>('target-preview').src=url;await el<HTMLImageElement>('target-preview').decode();targetBytes=null;el<HTMLButtonElement>('start').disabled=true;el<HTMLButtonElement>('save-target').disabled=true;}
el<HTMLInputElement>('target').onchange=async()=>{try{const f=el<HTMLInputElement>('target').files?.[0];if(!f)return;if(!['image/png','image/jpeg','image/webp'].includes(f.type)||f.size>8_000_000)throw Error('8MB以内の画像を選んでください。');await setTarget(URL.createObjectURL(f));}catch(e){el('status').textContent=String(e);}};
el('sample').onclick=async()=>{const c=document.createElement('canvas');c.width=c.height=720;const x=c.getContext('2d')!;x.fillStyle='#f2eedf';x.fillRect(0,0,720,720);x.fillStyle='#152326';x.font='bold 60px sans-serif';x.fillText('POINT ATLAS',62,99);x.lineWidth=8;x.strokeStyle='#152326';x.strokeRect(24,24,672,672);for(let i=0;i<130;i++){const px=50+((i*73+23)%617),py=140+((i*i*29+11)%510);x.fillStyle=i%3?'#152326':'#ab6939';if(i%2)x.fillRect(px,py,10+i%27,9+i%23);else{x.beginPath();x.arc(px,py,7+i%19,0,Math.PI*2);x.fill();}}await setTarget(c.toDataURL());el('status').textContent='自作ターゲット。右クリックで画像を保存できます。';};
el('compile').onclick=async()=>{const b=el<HTMLButtonElement>('compile');b.disabled=true;try{const image=el<HTMLImageElement>('target-preview');if(!image.naturalWidth)throw Error('画像を選んでください。');el('status').textContent='画像を解析中…';const {Compiler}=await import('mind-ar/dist/mindar-image.prod.js');const compiler=new Compiler();const c=document.createElement('canvas');const scale=Math.min(1,720/Math.max(image.naturalWidth,image.naturalHeight));c.width=Math.round(image.naturalWidth*scale);c.height=Math.round(image.naturalHeight*scale);c.getContext('2d')!.drawImage(image,0,0,c.width,c.height);const normalized=new Image();normalized.src=c.toDataURL();await normalized.decode();await compiler.compileImageTargets([normalized],(value:number)=>el('status').textContent=`画像を解析中… ${Math.round(value)}%`);const next=new Uint8Array(compiler.exportData());validateMindTarget(next);targetBytes=next;el('status').textContent=`生成しました / ${(targetBytes.byteLength/1024).toFixed(0)} KB`;el<HTMLButtonElement>('save-target').disabled=false;el<HTMLButtonElement>('start').disabled=!project;}catch(e){el('status').textContent=`生成に失敗しました: ${e}`;}finally{b.disabled=false;}};
el('save-target').onclick=()=>{if(!targetBytes)return;const a=document.createElement('a');const copy=new Uint8Array(targetBytes);a.href=URL.createObjectURL(new Blob([copy]));a.download='point-atlas-target.mind';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
function configure(body:AtlasBody|GalaxyBody){body.root.rotation.x=Math.PI/2;body.root.scale.setScalar(.4);body.root.updateMatrixWorld(true);}
function direction(body:AtlasBody|GalaxyBody,camera:THREE.Camera){body.root.updateWorldMatrix(true,false);const local=body.root.worldToLocal(camera.getWorldPosition(new THREE.Vector3())).sub(CENTER).normalize();return local;}
el('pose').onclick=()=>{if(arBusy||!project)return;showProjection(null);const renderer=new THREE.WebGLRenderer({alpha:false,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0x101617);el('ar-stage').appendChild(renderer.domElement);const scene=new THREE.Scene(), camera=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,.01,100);camera.position.set(.8,-1.8,1.4);const body=project.mode==='galaxy'?new GalaxyBody(renderer,project):new AtlasBody(project);currentBody=body;configure(body);scene.add(body.root);const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,0,.38);controls.update();const draw=()=>{body.setView(direction(body,camera),arParticleScale(body.root,camera,renderer.domElement.height));renderer.render(scene,camera);showProjection(targetProjectionGeometry(camera.position,[0,0,1]));};controls.addEventListener('change',draw);draw();el('gate').hidden=true;el('overlay').classList.remove('hidden');el('tracking').textContent='カメラなし / AR座標への変換を確認';let stopped=false;const stop=()=>{if(stopped)return;stopped=true;activeStop=undefined;renderer.domElement.removeEventListener('webglcontextlost',lost);window.removeEventListener('resize',resize);showProjection(null);renderer.dispose();renderer.forceContextLoss();body.dispose();currentBody=null;controls.dispose();renderer.domElement.remove();el('gate').hidden=false;el('overlay').classList.add('hidden');};const lost=(event:Event)=>{event.preventDefault();stop();el('status').textContent='描画が中断されました。もう一度、姿勢確認またはARを始めてください。';};const resize=()=>{renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();draw();};renderer.domElement.addEventListener('webglcontextlost',lost);window.addEventListener('resize',resize);activeStop=stop;el('stop').onclick=stop;Object.assign(window,{__ATLAS_POSE__:{snapshot:()=>({direction:direction(body,camera).toArray(),body:body.snapshot(),targetProjection:projection}),view:(d:readonly number[])=>{const local=CENTER.clone().add(new THREE.Vector3(...d as [number,number,number]).multiplyScalar(4));camera.position.copy(body.root.localToWorld(local));camera.up.set(0,0,1);camera.lookAt(0,0,.38);draw();}}});};
el('start').onclick=async()=>{
  if(arBusy||!project||!targetBytes)return;
  arBusy=true;
  const controls=[...el('gate').querySelectorAll<HTMLInputElement|HTMLButtonElement>('input,button')].map(control=>({control,disabled:control.disabled}));
  controls.forEach(({control})=>control.disabled=true);
  const unlock=()=>{arBusy=false;controls.forEach(({control,disabled})=>control.disabled=disabled);};
  showProjection(null);
  el('status').textContent='カメラと画像認識を準備しています…';
  let cleanup:(()=>void)|undefined;
  let timer:ReturnType<typeof setTimeout>|undefined;
  try{
    if(!window.isSecureContext)throw Error('カメラにはHTTPSまたはlocalhostが必要です。');
    const {MindARThree}=await import('mind-ar/dist/mindar-image-three.prod.js');
    const copy=new Uint8Array(targetBytes),url=URL.createObjectURL(new Blob([copy]));
    cleanup=()=>URL.revokeObjectURL(url);
    const owned=ownResizeListener(()=>new MindARThree({container:el('ar-stage'),imageTargetSrc:url,maxTrack:1,uiLoading:'no',uiScanning:'no',uiError:'no',...IMAGE_TRACKING_OPTIONS}));
    const mindar=owned.value;
    const {renderer,scene,camera}=mindar;
    cleanup=()=>{owned.release();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();mindar.cssRenderer?.domElement.remove();URL.revokeObjectURL(url);};
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setClearColor(0,0);
    const body=project.mode==='galaxy'?new GalaxyBody(renderer,project):new AtlasBody(project);
    currentBody=body;configure(body);
    const anchor=mindar.addAnchor(0),smoother=new TrackedPoseSmoother();anchor.group.add(body.root);
    let visible=false,stopped=false,started=false,lastAngleUpdate=0;
    let cancelVideoReady:(()=>void)|undefined;
    let controllerOwner:ReturnType<typeof ownController>|undefined;
    const startAR=mindar._startAR.bind(mindar);
    mindar._startAR=()=>{
      const pending=startAR();
      if(mindar.controller)controllerOwner=ownController(mindar.controller as OwnedController,(window as unknown as {MINDAR:{IMAGE:{tf:Parameters<typeof ownController>[1]}}}).MINDAR.IMAGE.tf);
      if(stopped)controllerOwner?.stop();
      return pending.finally(()=>controllerOwner?.ready());
    };
    // Own acquisition so a permission response arriving after stop cannot
    // reopen a camera or advance to MindAR's non-cancellable startup.
    mindar._startVideo=async()=>{
      const video=document.createElement('video');mindar.video=video;
      for(const key of ['autoplay','muted','playsinline'])video.setAttribute(key,'');
      Object.assign(video.style,{position:'absolute',top:'0px',left:'0px',zIndex:'-2'});
      el('ar-stage').appendChild(video);
      const stream=await navigator.mediaDevices.getUserMedia({audio:false,video:{facingMode:'environment'}});
      if(stopped){stream.getTracks().forEach(track=>track.stop());throw Error('起動を終了しました。');}
      await new Promise<void>((resolve,reject)=>{
        const clear=()=>{video.removeEventListener('loadedmetadata',ready);video.removeEventListener('error',failed);cancelVideoReady=undefined;};
        const ready=()=>{clear();video.width=video.videoWidth;video.height=video.videoHeight;resolve();};
        const failed=()=>{clear();reject(Error('カメラ映像を読み込めませんでした。'));};
        cancelVideoReady=()=>{clear();reject(Error('起動を終了しました。'));};
        video.addEventListener('loadedmetadata',ready);video.addEventListener('error',failed);video.srcObject=stream;
      });
      if(stopped)throw Error('起動を終了しました。');
    };
    const stopOwnedPipeline=()=>{
      cancelVideoReady?.();
      mindar.controller?.stopProcessVideo();
      const video=mindar.video as HTMLVideoElement|undefined;
      (video?.srcObject as MediaStream|null)?.getTracks().forEach(track=>track.stop());
      if(video){video.pause();video.srcObject=null;video.remove();}
      controllerOwner?.stop();
    };
    const onVisibility=()=>{if(document.hidden)stop();};
    const onContextLost=(event:Event)=>{event.preventDefault();stop();el('status').textContent='描画が中断されました。ARを再開してください。';};
    const stop=()=>{
      if(stopped)return;stopped=true;visible=false;activeStop=undefined;
      if(timer)clearTimeout(timer);
      document.removeEventListener('visibilitychange',onVisibility);
      renderer.domElement.removeEventListener('webglcontextlost',onContextLost);owned.release();
      anchor.onTargetFound=null;anchor.onTargetLost=null;anchor.onTargetUpdate=null;
      renderer.setAnimationLoop(null);stopOwnedPipeline();
      showProjection(null);body.dispose();currentBody=null;
      renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
      mindar.cssRenderer?.domElement.remove();URL.revokeObjectURL(url);
      el('gate').hidden=false;el('overlay').classList.add('hidden');unlock();
    };
    cleanup=stop;activeStop=stop;
    renderer.domElement.addEventListener('webglcontextlost',onContextLost);
    document.addEventListener('visibilitychange',onVisibility);
    anchor.onTargetFound=()=>{if(stopped)return;visible=true;smoother.reset();el('tracking').textContent='認識中';};
    anchor.onTargetLost=()=>{if(stopped)return;visible=false;smoother.reset();el('tracking').textContent='画像を探しています';showProjection(null);};
    anchor.onTargetUpdate=()=>{if(!stopped&&anchor.group.visible)smoother.update(anchor.group,performance.now());};
    // MindAR's async Promise executor can leave start() pending after an
    // internal failure. Bound the wait so this page can recover and retry.
    const pending=mindar.start().then(()=>{started=true;if(stopped)stopOwnedPipeline();});
    Object.assign(window,{__ATLAS_AR__:{snapshot:()=>({visible,started,stopped,body:body.snapshot(),targetProjection:projection,pointScale:arParticleScale(body.root,camera,renderer.domElement.height),rendererSize:[renderer.domElement.width,renderer.domElement.height],worldScale:body.root.getWorldScale(new THREE.Vector3()).toArray(),videoReadyState:mindar.video?.readyState??0,contextLost:renderer.getContext().isContextLost(),resources:controllerOwner?.snapshot()??null})}});
    await Promise.race([pending,new Promise<never>((_,reject)=>{timer=setTimeout(()=>reject(Error('準備が60秒以内に完了しませんでした。画像を確認して再開してください。')),60_000);})]);
    if(timer)clearTimeout(timer);if(stopped)return;
    el('gate').hidden=true;el('overlay').classList.remove('hidden');
    renderer.setAnimationLoop(()=>{
      if(visible){
        body.setView(direction(body,camera),arParticleScale(body.root,camera,renderer.domElement.height));
        if(performance.now()-lastAngleUpdate>500){anchor.group.updateWorldMatrix(true,false);showProjection(targetProjectionGeometry(anchor.group.worldToLocal(camera.getWorldPosition(new THREE.Vector3())),[0,0,1]));lastAngleUpdate=performance.now();}
      }
      renderer.render(scene,camera);
    });
    el('stop').onclick=stop;
  }catch(e){cleanup?.();unlock();el('status').textContent=`ARを開始できません: ${e}`;}
  finally{if(timer)clearTimeout(timer);}
};

Object.assign(window,{__ATLAS_EXPORT__:{snapshot:()=>({project:project?.mode,targetBytes:targetBytes?.byteLength??0,body:currentBody?.snapshot()})}});

el<HTMLInputElement>('mind-file').onchange=async()=>{try{const f=el<HTMLInputElement>('mind-file').files?.[0];if(!f)return;if(f.size>MAX_MIND_BYTES)throw Error('ターゲットが大きすぎます。');const next=new Uint8Array(await f.arrayBuffer());validateMindTarget(next);targetBytes=next;el<HTMLButtonElement>('start').disabled=!project;el<HTMLButtonElement>('save-target').disabled=false;el('status').textContent='保存したターゲットを読み込みました。同じ画像へカメラを向けてください。';}catch(e){el('status').textContent=String(e);}};
