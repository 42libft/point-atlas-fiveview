import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GalaxyBody } from "./galaxy";
import { AtlasBody, CENTER, type Mask, type Mode, type Project } from "./model";
import { FACE_IDS, type FaceId } from "../typography/view-blend";
import { fontReady, imageMask, previewMask, shapeMask, textMask, validateMasks } from "./masks";
import { parseProject, serializeProject } from "./project";
import "./style.css";
import { readingDirection, RAISED_ELEVATION_DEG } from "./reading-directions";
import { targetProjectionGeometry } from "./tracking-geometry";

const names = ["上","手前","右","奥","左"];
const descriptions: Record<string,string> = {
  galaxy: "5つの入力から一つの点群を作り、見る方向に応じて文字・ロゴの輪郭を表示します。",
  morph: "同じ点が視点に応じて次の形へ移り、境界では形が連続して変わります。",
  shell: "固定した点群の器に5つの情報を置く。回り込むと面が入れ替わり、中間では隣り合う情報が同時に見える。情報の明るさだけを面の向きで変える。",
  hull: "5画像から見て共通する場所だけを残す。形そのものが入力の交差になる。正反対の独立した画像は両立せず、欠けや消失が起きる。",
};
document.querySelector("#app")!.innerHTML = `<header><h1>Point Atlas Fiveview <span class="sub">/ 五方向の点群</span></h1><p>文字・ロゴ・図形を、見る方向へ割り当てる。 <a href="./index.html">使い方</a></p></header>
<main class="workspace"><aside><p class="step">01 / 入力</p><h2>方向ごとの情報</h2><p class="sub">短い文字、または画像の輪郭を使います。画像はこの端末で処理します。</p>
${FACE_IDS.map((face,i)=>`<div class="face-editor"><div class="name">${names[i]} / ${face}</div><img id="mask-${face}" alt="${names[i]}の入力マスク"><input type="text" id="text-${face}" aria-label="${names[i]}の文字" maxlength="40" value="${['○','A','B','C','◇'][i]}"><button data-upload="${face}" aria-label="${names[i]}の画像を選ぶ">画像</button><input class="hidden" type="file" id="file-${face}" accept="image/png,image/jpeg,image/webp"></div>`).join("")}
<button id="apply">入力を反映</button> <button id="reset">自作サンプル</button>
<div class="settings"><p class="step">02 / 調整</p><label>画像の形 <select id="polarity"><option value="dark">暗い部分</option><option value="light">明るい部分</option><option value="alpha">透明以外</option></select></label><label>しきい値 <input id="threshold" type="range" min="0.1" max="0.9" step="0.05" value="0.5"></label><label>点の上限 <select id="budget"><option>4096</option><option>12000</option><option selected>28672</option></select></label><label>器の奥行き <input id="depth" type="range" min="0.6" max="1.2" step="0.05" value="1"></label><label>読み始める角度 <select id="reveal"><option value="0.25">広い / 約75°</option><option value="0.5" selected>標準 / 約60°</option><option value="0.7">狭い / 約45°</option></select></label><label>背景の確認 <select id="background"><option value="dark">暗い背景</option><option value="mid">中間の背景</option><option value="light">明るい背景</option></select></label><label>点群の色 <select id="contrast"><option value="current">標準の色</option><option value="ink">黒 / 明背景向け</option><option value="chalk">白 / 暗背景向け</option><option value="duotone">紺と金</option></select></label><label>輪郭の読取 <select id="sampling"><option value="sdf">標準 / 少し太る</option><option value="raster">画像の輪郭を直接読む</option></select></label><label>点群の見せ方 <select id="emphasis"><option value="field">標準 / 全体を残す</option><option value="figure">図形を優先</option></select></label><label>横4方向の高さ <select id="viewing"><option value="horizontal">標準 / 水平方向</option><option value="raised">上方35°から読む</option></select></label><p class="sub">輪郭・点群・高さの3設定は「銀河」だけに適用。直接読取では細線を支える点が減り、欠けることがあります。図形を優先すると背景点を減らします。上方35°は四つの読取面を上へ向けます。実機追跡は未検証。</p><p class="sub">背景に合わせて点群の色を選べます。背景はプレビューだけを変え、ARの実背景には重ねません。</p><p class="sub">奥行きと読める角度は「固定した器」に適用。画像の調整後は入力を反映します。</p></div>
<div class="footer"><p class="step">04 / 保存とAR</p><div class="exports"><button id="save">プロジェクト保存</button><button id="load">開く</button><button id="ar">AR出力</button><button id="ply">点群保存</button></div><input id="project-file" class="hidden" type="file" accept="application/json,.json"><p class="notice">ARはプロジェクトと画像ターゲットを読み込むローカル実行ページへ出力します。</p><p class="sub">実験的な制作ツールです。カメラの実機検証はまだ行っていません。</p></div></aside>
<section class="stage"><p class="step">03 / プレビュー</p><div class="modes"><button class="active" data-mode="galaxy">銀河 / 点群の色</button><button data-mode="morph">形を変える</button><button data-mode="shell">固定した器</button><button data-mode="hull">投影の交差</button></div><p id="description" class="explanation"></p><div class="viewport" id="viewport"><div class="viewnote">ドラッグで回り込む · ホイールで距離を変える</div></div><div class="angles">${FACE_IDS.map((f,i)=>`<button data-view="${f}">${names[i]}</button>`).join("")}<button data-view="oblique">中間</button><button id="rotate">一周する</button><button id="frame">全体に合わせる</button></div><div id="warning" role="status"></div><div id="stats"></div><div id="projection-note" class="sub"></div><div id="blend-note" class="sub"></div><details><summary>方式の違いと制約</summary><p class="sub">固定した等方性の点群は、正面と背面で鏡像の投影になります。任意の独立した5画像には、形の変容か、面の向きによる表示が必要です。この試作の固定した器は後者を使います。色は補助表現で、各方向の入力は形状と面の向きで表示します。</p></details></section></main>`;
const el = <T extends HTMLElement>(id:string) => document.getElementById(id) as T;
const num = (id:string)=>Number((el(id) as HTMLInputElement).value);
const renderer = new THREE.WebGLRenderer({ antialias:true, preserveDrawingBuffer:true }); renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x101617);el("viewport").appendChild(renderer.domElement);
const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(38,1,.01,100); const controls = new OrbitControls(camera,renderer.domElement); controls.target.copy(CENTER);controls.enableDamping=false;controls.minDistance=2.3;controls.maxDistance=10;controls.maxPolarAngle=Math.PI*.75;
let mode: Mode = "galaxy", masks:Mask[] = [], body:AtlasBody|GalaxyBody|null=null, rotating=false, angle=0, lastTime=0, busy=false;
const uploaded: (File|null)[] = Array(5).fill(null);const stored:(Mask|null)[]=Array(5).fill(null); let lastWarnings:string[]=[]; const times:number[]=[];
const options = ():Project=>({version:1,mode,budget:num('budget'),depth:num('depth'),reveal:num('reveal'),threshold:num('threshold'),contrast:el<HTMLSelectElement>('contrast').value as Project['contrast'],background:el<HTMLSelectElement>('background').value as Project['background'],sampling:el<HTMLSelectElement>('sampling').value as Project['sampling'],emphasis:el<HTMLSelectElement>('emphasis').value as Project['emphasis'],viewing:el<HTMLSelectElement>('viewing').value as Project['viewing'],masks});
function showMasks(){ masks.forEach((m,i)=>{el<HTMLImageElement>(`mask-${FACE_IDS[i]}`).src=previewMask(m);}); }
function status(){
  const snap = body?.snapshot();
  const projection=targetProjectionGeometry(camera.position);
  el("projection-note").textContent=projection?`ARで平面に置く場合の幾何: ターゲット正面から ${projection.angleDeg.toFixed(1)}° / 短縮比 ${(projection.faceOnRatio*100).toFixed(0)}%（追跡成功率ではありません）`:"";
  const effective=(mode==='galaxy'||mode==='morph')?snap?.weights.map(w=>Math.pow(w,2.15)):undefined;const total=effective?.reduce((a,b)=>a+b,0)??1;
  el("blend-note").textContent=effective?"現在の合成: "+effective.map((w,i)=>`${names[i]} ${(w/total*100).toFixed(0)}%`).filter((_,i)=>effective[i]!/total>.01).join(" / ")+"。中間では複数の情報が混ざります。":"";
  el("warning").textContent=lastWarnings.join(" · ") || (mode==='hull'&&body?.pointCount===0?'5つの入力に共通する形がありません。':'');
  const values=times.slice().sort((a,b)=>a-b); const med=values[Math.floor(values.length*.5)]||0;
  el("stats").textContent=snap?`${snap.pointCount.toLocaleString()} 点 / 1 point draw call / 生成 ${snap.generatedMs.toFixed(1)} ms / 描画CPU中央値 ${med.toFixed(2)} ms\n${snap.fixedGeometry?'位置は視点によらず固定':'位置は視点で補間'} / 正反対画像の一致率 ${(snap.oppositeAgreement[0]!*100).toFixed(0)}%, ${(snap.oppositeAgreement[1]!*100).toFixed(0)}%（交差方式の制約）`:'';
}
async function rebuild(){
  if(busy)return;busy=true;el<HTMLButtonElement>('apply').disabled=true;
  try{
    validateMasks(masks);lastWarnings=validateMasks(masks);
    const next=mode==='galaxy'?new GalaxyBody(renderer,options()):new AtlasBody(options());if(body){scene.remove(body.root);body.dispose();}body=next;scene.add(body.root);
    el('description').textContent=descriptions[mode]!;document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));render();status();
  }catch(e){el('warning').textContent=String(e);}finally{busy=false;el<HTMLButtonElement>('apply').disabled=false;}
}
let contextLost=false;
renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();contextLost=true;rotating=false;el('rotate').textContent='一周する';el('warning').textContent='描画が中断されました。入力は保持しています。復旧を待ってください。';});
renderer.domElement.addEventListener('webglcontextrestored',()=>{contextLost=false;render();status();});
function render(){
  if(contextLost)return;
  const t=performance.now(), direction=camera.position.clone().sub(CENTER).normalize();
  body?.setView(direction,renderer.domElement.height);
  renderer.setRenderTarget(null);renderer.render(scene,camera);times.push(performance.now()-t);if(times.length>300)times.shift();
}
function resize(){const box=el('viewport').getBoundingClientRect();renderer.setSize(box.width,box.height);camera.aspect=box.width/box.height;camera.updateProjectionMatrix();render();}
new ResizeObserver(resize).observe(el('viewport'));controls.addEventListener('change',()=>{render();status();});
function setDirection(direction:readonly number[]){rotating=false;el('rotate').textContent='一周する';camera.position.copy(CENTER).add(new THREE.Vector3(...direction as [number,number,number]).normalize().multiplyScalar(4.7));camera.up.set(0,1,0);if(direction[1]===1)camera.up.set(0,0,-1);controls.update();render();status();}
function chooseView(view:string){const raised=mode==='galaxy'&&el<HTMLSelectElement>('viewing').value==='raised';const d=view==='oblique'?(raised?[1,Math.SQRT2*Math.tan(RAISED_ELEVATION_DEG*Math.PI/180),1]:[1,.65,1]):readingDirection(view as FaceId,raised).toArray();setDirection(d);}
document.querySelectorAll<HTMLButtonElement>('[data-view]').forEach(b=>b.onclick=()=>chooseView(b.dataset.view!));
document.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(b=>b.onclick=async()=>{mode=b.dataset.mode as Mode;await rebuild();});
async function applyInputs(){try{const next:Mask[]=[];for(let i=0;i<5;i++){next.push(uploaded[i]?await imageMask(uploaded[i]!,num('threshold'),el<HTMLSelectElement>('polarity').value):stored[i]??textMask(el<HTMLInputElement>(`text-${FACE_IDS[i]}`).value));}validateMasks(next);masks=next;showMasks();await rebuild();}catch(e){el('warning').textContent=String(e);}}
el('apply').onclick=applyInputs;
document.querySelectorAll<HTMLButtonElement>('[data-upload]').forEach(b=>b.onclick=()=>el<HTMLInputElement>(`file-${b.dataset.upload}`).click());
FACE_IDS.forEach((face,i)=>{el<HTMLInputElement>(`text-${face}`).oninput=()=>{uploaded[i]=null;stored[i]=null;};el<HTMLInputElement>(`file-${face}`).onchange=async()=>{const f=el<HTMLInputElement>(`file-${face}`).files?.[0];if(!f)return;try{const mask=await imageMask(f,num('threshold'),el<HTMLSelectElement>('polarity').value);validateMasks([mask]);uploaded[i]=f;stored[i]=null;masks[i]=mask;showMasks();await rebuild();}catch(e){el('warning').textContent=String(e);}};});
el('reset').onclick=async()=>{uploaded.fill(null);stored.fill(null);['○','A','B','C','◇'].forEach((v,i)=>el<HTMLInputElement>(`text-${FACE_IDS[i]}`).value=v);masks=[shapeMask('ring'),textMask('A'),textMask('B'),textMask('C'),shapeMask('diamond')];showMasks();await rebuild();};
['budget','depth','reveal','contrast','sampling','emphasis','viewing'].forEach(id=>el(id).onchange=rebuild);
el('background').onchange=()=>{renderer.setClearColor({dark:0x101617,mid:0x777777,light:0xf4f4ef}[el<HTMLSelectElement>('background').value as 'dark'|'mid'|'light']);render();};
el('rotate').onclick=()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches&&!rotating){el('warning').textContent='自動回転を開始します。もう一度押すと停止できます。';}rotating=!rotating;el('rotate').textContent=rotating?'回転を止める':'一周する';camera.up.set(0,1,0);angle=Math.atan2(camera.position.x-CENTER.x,camera.position.z-CENTER.z);};
el('frame').onclick=()=>chooseView('oblique');
function animate(t:number){if(rotating&&!document.hidden){const dt=Math.min(.04,(t-lastTime)/1000);angle+=dt*.32;camera.position.copy(CENTER).add(new THREE.Vector3(Math.sin(angle)*4.5,mode==='galaxy'&&el<HTMLSelectElement>('viewing').value==='raised'?4.5*Math.tan(RAISED_ELEVATION_DEG*Math.PI/180):1.45,Math.cos(angle)*4.5));controls.update();render();}lastTime=t;requestAnimationFrame(animate);}requestAnimationFrame(animate);
function download(text:string,name:string,type='application/json'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function serialize(){return serializeProject(options());}
el('save').onclick=()=>download(serialize(),'point-atlas-project.json');
el('load').onclick=()=>el<HTMLInputElement>('project-file').click();
el<HTMLInputElement>('project-file').onchange=async()=>{try{const f=el<HTMLInputElement>('project-file').files?.[0];if(!f)return;if(f.size>3_000_000)throw Error('プロジェクトが大きすぎます。');const p=parseProject(await f.text());masks=p.masks;uploaded.fill(null);masks.forEach((m,i)=>stored[i]=m);mode=p.mode;el<HTMLSelectElement>('budget').value=String(p.budget);el<HTMLInputElement>('depth').value=String(p.depth);el<HTMLSelectElement>('reveal').value=String(p.reveal);el<HTMLInputElement>('threshold').value=String(p.threshold);el<HTMLSelectElement>('contrast').value=p.contrast!;el<HTMLSelectElement>('background').value=p.background!;el<HTMLSelectElement>('sampling').value=p.sampling??'sdf';el<HTMLSelectElement>('emphasis').value=p.emphasis??'field';el<HTMLSelectElement>('viewing').value=p.viewing??'horizontal';renderer.setClearColor({dark:0x101617,mid:0x777777,light:0xf4f4ef}[p.background!]);masks.forEach((m,i)=>el<HTMLInputElement>(`text-${FACE_IDS[i]}`).value=m.label);showMasks();await rebuild();}catch(e){el('warning').textContent=String(e);}};
el('ar').onclick=()=>{try{localStorage.setItem('point-atlas-project',serialize());window.open(new URL('atlas-ar.html',location.href).href,'_blank');}catch(e){el('warning').textContent=`AR出力に失敗しました: ${e}`;}};
el('ply').onclick=()=>{if(!body||mode==='morph'||mode==='galaxy'){el('warning').textContent='固定した器または投影の交差で点群保存できます。方向による情報はプロジェクト保存を使ってください。';return;}const a=body.geometry.getAttribute('position');let s=`ply\nformat ascii 1.0\ncomment Geometry only; directional information remains in project JSON\nelement vertex ${a.count}\nproperty float x\nproperty float y\nproperty float z\nend_header\n`;for(let i=0;i<a.count;i++)s+=`${a.getX(i)} ${a.getY(i)} ${a.getZ(i)}\n`;download(s,'point-atlas-geometry.ply','text/plain');};
async function initialize(){await fontReady();masks=[shapeMask('ring'),textMask('A'),textMask('B'),textMask('C'),shapeMask('diamond')];
const demo=new URLSearchParams(location.search).get('demo')==='1';
if(demo){el<HTMLSelectElement>('contrast').value='ink';el<HTMLSelectElement>('background').value='light';el<HTMLSelectElement>('emphasis').value='figure';el<HTMLSelectElement>('sampling').value='raster';renderer.setClearColor(0xf4f4ef);}
showMasks();chooseView(demo?'front':'oblique');await rebuild();resize();
Object.assign(window,{__ATLAS__:{ready:true,mode:async(m:Mode)=>{mode=m;await rebuild();},view:chooseView,direction:setDirection,snapshot:()=>({...body?.snapshot(),contextLost,rendererMemory:{...renderer.info.memory},mode,renderCalls:renderer.info.render.calls,frameCpuMs:times.slice(),camera:camera.position.toArray(),cameraUp:camera.up.toArray(),projection:targetProjectionGeometry(camera.position),resolution:[renderer.domElement.width,renderer.domElement.height]}),project:serialize,projectObject:()=>options(),setMasks:async(next:Mask[])=>{masks=next;showMasks();await rebuild();},capture:()=>renderer.domElement.toDataURL('image/png')}});

}
initialize().catch(e=>el("warning").textContent=String(e));
