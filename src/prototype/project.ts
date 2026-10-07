import type { Mask, Project } from './model';
import { validateMasks } from './masks';
const modes=['galaxy','morph','shell','hull'];
const contrasts=['current','ink','chalk','duotone'];
const backgrounds=['dark','mid','light'];
export function parseProject(text:string):Project {
  if(text.length>3_000_000)throw Error('プロジェクトが大きすぎます。');
  let p;try{p=JSON.parse(text);}catch{throw Error("プロジェクトJSONとして読めませんでした。保存したファイルを選んでください。");}
  if(!p || typeof p!=='object' || p.version!==1 || !modes.includes(p.mode) || ![4096,12000,28672].includes(p.budget)
    || !Number.isFinite(p.depth)||p.depth<.6||p.depth>1.2 || ![.25,.5,.7].includes(p.reveal)
    || !Number.isFinite(p.threshold)||p.threshold<.1||p.threshold>.9
    || (p.contrast!==undefined&&!contrasts.includes(p.contrast)) || (p.background!==undefined&&!backgrounds.includes(p.background))
    || (p.sampling!==undefined&&!['sdf','raster'].includes(p.sampling))
    || (p.emphasis!==undefined&&!['field','figure'].includes(p.emphasis))
    || (p.viewing!==undefined&&!['horizontal','raised'].includes(p.viewing))
    || !Array.isArray(p.masks)||p.masks.length!==5)throw Error('プロジェクトの形式を確認してください。');
  const masks:Mask[]=p.masks.map((m:Mask)=>{
    if(!m||m.size!==256 || typeof m.label!=='string'||m.label.length>256 || !Array.isArray(m.pixels)||m.pixels.length!==65536
      || !m.pixels.every(x=>Number.isInteger(x)&&x>=0&&x<=255))throw Error('画像データの形式が違います。');
    return {size:256,label:m.label,pixels:new Uint8Array(m.pixels)};
  });
  validateMasks(masks);
  return {version:1,mode:p.mode,budget:p.budget,depth:p.depth,reveal:p.reveal,threshold:p.threshold,contrast:p.contrast??'current',background:p.background??'dark',sampling:p.sampling??'sdf',emphasis:p.emphasis??'field',viewing:p.viewing??'horizontal',masks};
}
export function serializeProject(p:Project){return JSON.stringify({...p,masks:p.masks.map(m=>({...m,pixels:Array.from(m.pixels)}))});}
