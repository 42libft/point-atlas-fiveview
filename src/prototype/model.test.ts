import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { AtlasBody, hullPoints, oppositeAgreement, projectToFace, shellPoint, type Mask, type Project } from './model';
import { FACE_IDS } from '../typography/view-blend';
const filled=():Mask=>({size:16,pixels:new Uint8Array(256).fill(255),label:'square'});
const project=(mode:Project['mode']):Project=>({version:1,mode,budget:4096,depth:1,reveal:.5,threshold:.5,masks:Array.from({length:5},filled)});
describe('Generic five-view constraints',()=>{
 it('keeps shell positions byte-identical through a full camera orbit',()=>{const b=new AtlasBody(project('shell'));const before=new Float32Array(b.geometry.getAttribute('position').array);for(let i=0;i<72;i++)b.setView(new THREE.Vector3(Math.sin(i*Math.PI/36),.25,Math.cos(i*Math.PI/36)),800);expect(b.geometry.getAttribute('position').array).toEqual(before);expect(b.snapshot().positionUpdates).toBe(0);b.dispose();});
 it('respects the total point budget across five fixed faces',()=>{const b=new AtlasBody(project('shell'));expect(b.pointCount).toBeLessThanOrEqual(4096);expect(b.pointCount%5).toBe(0);b.dispose();});
 it('preserves all five orientation mappings',()=>{for(const face of FACE_IDS){const p=shellPoint(face,.4,-.2,1);const uv=projectToFace(face,p);expect(uv[0]).toBeCloseTo(.4*.88);expect(uv[1]).toBeCloseTo(-.2*.88);} });
 it('finds every voxel for a fully compatible input',()=>{expect(hullPoints(Array.from({length:5},filled),8).positions.length/3).toBe(512);});
 it('shows the front/back inverse-projection impossibility with disjoint masks',()=>{const masks=Array.from({length:5},filled);for(let y=0;y<16;y++)for(let x=0;x<16;x++){masks[1]!.pixels[y*16+x]=x<8?255:0;masks[3]!.pixels[y*16+x]=x<8?255:0;}expect(oppositeAgreement(masks)[0]).toBe(0);expect(hullPoints(masks,8).positions.length).toBe(0);});
 it('recovers each exact target at a one-hot direction in morph mode',()=>{const b=new AtlasBody(project('morph'));const directions=[[0,1,0],[0,0,1],[1,0,0],[0,0,-1],[-1,0,0]];directions.forEach((d,i)=>{b.setView(new THREE.Vector3(...d as [number,number,number]),800);expect(b.weights[i]).toBe(1);});b.dispose();});
});
