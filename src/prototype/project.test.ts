import {describe,it,expect} from 'vitest';
import {parseProject,serializeProject} from './project';
import type {Project} from './model';
const p=():Project=>({version:1,mode:'galaxy',budget:12000,depth:.8,reveal:.7,threshold:.65,contrast:'ink',background:'light',sampling:'sdf',emphasis:'field',viewing:'horizontal',masks:Array.from({length:5},(_,i)=>({size:256,label:String(i),pixels:new Uint8Array(65536).fill(255)}))});
describe('Project contract',()=>{
 it('round-trips color, background, thresholds, geometry and exact masks',()=>{const sourceProject=p();const copy=parseProject(serializeProject(sourceProject));expect(copy).toEqual(sourceProject);});
 it('supports the earlier format without color settings',()=>{const sourceProject=p();delete sourceProject.contrast;delete sourceProject.background;const copy=parseProject(serializeProject(sourceProject));expect(copy.contrast).toBe('current');expect(copy.background).toBe('dark');});
 it.each(['budget','depth','threshold','reveal'])('rejects unsafe %s',key=>{const data=JSON.parse(serializeProject(p()));data[key]=1e9;expect(()=>parseProject(JSON.stringify(data))).toThrow();});
 it('rejects fractional samples, wrong mask sizes and unexpected color modes',()=>{for(const change of [(x:any)=>x.masks[0].pixels[0]=.5,(x:any)=>x.masks[0].size=255,(x:any)=>x.contrast='auto-adopt',(x:any)=>x.masks[0].pixels.pop()]){const data=JSON.parse(serializeProject(p()));change(data);expect(()=>parseProject(JSON.stringify(data))).toThrow();}});
 it('rejects empty masks without mutating existing masks',()=>{const sourceProject=p(),data=JSON.parse(serializeProject(sourceProject));data.masks[0].pixels.fill(0);expect(()=>parseProject(JSON.stringify(data))).toThrow();expect(sourceProject.masks[0]!.pixels[0]).toBe(255);});
 it('preserves selected candidate settings and keeps old files on the baseline',()=>{const candidate={...p(),sampling:'raster',emphasis:'figure',viewing:'raised'} as Project;expect(parseProject(serializeProject(candidate))).toEqual(candidate);const old=p();delete old.sampling;delete old.emphasis;delete old.viewing;const restored=parseProject(serializeProject(old));expect([restored.sampling,restored.emphasis,restored.viewing]).toEqual(['sdf','field','horizontal']);});
 it.each(['sampling','emphasis','viewing'])('rejects unknown %s options instead of silently adopting them',key=>{const data=JSON.parse(serializeProject(p()));data[key]='unknown';expect(()=>parseProject(JSON.stringify(data))).toThrow();});
});
