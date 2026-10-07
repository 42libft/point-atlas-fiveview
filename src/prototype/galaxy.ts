import * as THREE from 'three';
import { AmbientParticleField } from '../typography-ambient/ambient-particle-field';
import { DEFAULT_AMBIENT_PARAMETERS } from '../typography-ambient/ambient-parameters';
import type { GlyphTargetInput } from '../typography/target-input';
import { FACE_IDS } from '../typography/view-blend';
import { maskPoints, oppositeAgreement, type Project } from './model';
import { createRasterMembershipSampler } from './input-sampling';
import { readingBlendDirection, RAISED_ELEVATION_DEG } from './reading-directions';
// Convert the five user masks to the positions consumed by the point field.
export class GalaxyBody {
  root:THREE.Group;
  geometry=new THREE.BufferGeometry();
  pointCount:number;
  generatedMs:number;
  field:AmbientParticleField;
  constructor(renderer:THREE.WebGLRenderer, public project:Project){
    const t=performance.now();
    const scales:number[]=[];
    const states=FACE_IDS.map((face,i)=>{
      const pts=maskPoints(project.masks[i]!,16384);let maxX=.01,maxY=.01;
      pts.forEach(([x,y])=>{maxX=Math.max(maxX,Math.abs(x));maxY=Math.max(maxY,Math.abs(y));});
      const scale=Math.min(1.10/maxX,.51/maxY);const positions=new Float32Array(pts.length*2);
      scales.push(scale);
      pts.forEach(([x,y],j)=>positions.set([x*scale,y*scale],j*2));
      return {face,text:project.masks[i]!.label,codepoints:[],advanceWidthEm:maxX*scale*2,widthEm:maxX*scale*2,heightEm:maxY*scale*2,positions};
    });
    const byFace={} as Record<typeof FACE_IDS[number], {positions:Float32Array}>;for(const state of states)byFace[state.face]={positions:state.positions};
    const targets:GlyphTargetInput={byFace};
    this.field=new AmbientParticleField(renderer,targets,42,DEFAULT_AMBIENT_PARAMETERS,project.budget,project.sampling==='raster'?createRasterMembershipSampler(project.masks,scales):undefined);
    this.field.setReadability(project.contrast??'current');
    this.field.setFigureEmphasis(project.emphasis==='figure');
    this.field.setReadingElevation(project.viewing==='raised'?RAISED_ELEVATION_DEG:0);
    this.root=new THREE.Group();this.field.root.position.y=.56;this.root.add(this.field.root);this.pointCount=project.budget;this.generatedMs=performance.now()-t;
  }
  setView(direction:THREE.Vector3,pixels:number){this.field.setViewDirection(readingBlendDirection(direction,this.project.viewing==='raised'));this.field.setPointScale(pixels);}
  snapshot(){const s=this.field.getDebugSnapshot();return {mode:'galaxy',pointCount:s.pointCount,weights:s.weights,generatedMs:this.generatedMs,positionUpdates:0,fixedGeometry:false,bounds:[],attributeBytes:s.pointCount*116,hullCandidates:0,oppositeAgreement:oppositeAgreement(this.project.masks),sourceGenerator:'AmbientParticleField/createAmbientTargetData',layoutHash:s.layoutHash,sampling:this.project.sampling??'sdf',emphasis:this.project.emphasis??'field',viewing:this.project.viewing??'horizontal',readingElevationDeg:this.project.viewing==='raised'?RAISED_ELEVATION_DEG:0};}
  dispose(){this.geometry.dispose();this.field.dispose();}
}
