import * as THREE from "three";
import { FACE_IDS, FACE_NORMALS, computeViewBlend, type FaceId, type FaceWeights } from "../typography/view-blend";
import { mapGlyphPointToFace } from "../typography/face-space";

export type Mode = "morph" | "shell" | "hull" | "galaxy";
export type Mask = { size: number; pixels: Uint8Array; label: string };
export type Project = { version: 1; mode: Mode; budget: number; depth: number; reveal: number; threshold: number; contrast?: "current" | "ink" | "chalk" | "duotone"; background?: "dark" | "mid" | "light"; sampling?: "sdf" | "raster"; emphasis?: "field" | "figure"; viewing?: "horizontal" | "raised"; masks: Mask[] };
export const CENTER = new THREE.Vector3(0, 0.95, 0);
export function sample(mask: Mask, u: number, v: number): number {
  if (Math.abs(u) > 1 || Math.abs(v) > 1) return 0;
  const x = Math.min(mask.size - 1, Math.max(0, Math.round((u + 1) * .5 * (mask.size - 1))));
  const y = Math.min(mask.size - 1, Math.max(0, Math.round((1 - v) * .5 * (mask.size - 1))));
  return mask.pixels[y * mask.size + x]! / 255;
}
export function projectToFace(face: FaceId, p: readonly number[]): [number, number] {
  const [x, y, z] = p as [number, number, number];
  if (face === "top") return [x / .9, -z / .9];
  if (face === "front") return [x / .9, (y - .95) / .9];
  if (face === "right") return [-z / .9, (y - .95) / .9];
  if (face === "back") return [-x / .9, (y - .95) / .9];
  return [z / .9, (y - .95) / .9];
}
// Keep the same five-face orientation for every geometry mode.
function facePoint(face: FaceId, u: number, v: number, normal: number): [number, number, number] {
  const p = mapGlyphPointToFace(face, u * .9 / .56, v * .9 / .56, 0);
  if (face === "top") return [p[0], .95 + normal, p[2]];
  if (face === "front") return [p[0], p[1] - .39 + .95, normal];
  if (face === "right") return [normal, p[1] - .39 + .95, p[2]];
  if (face === "back") return [p[0], p[1] - .39 + .95, -normal];
  return [-normal, p[1] - .39 + .95, p[2]];
}
export function shellPoint(face: FaceId, u: number, v: number, depth: number): [number, number, number] {
  // The inverse superellipsoid equation fixes tangential projection coordinates.
  // Thus masks retain their aspect ratio. Shared edges meet at the same radius.
  const power = 8;
  const a = u * .88, b = v * .88;
  const n = Math.pow(Math.max(.001, 1 - Math.pow(Math.abs(a), power) - Math.pow(Math.abs(b), power)), 1 / power);
  const base = facePoint(face, a, b, n * .9);
  // Depth is a uniform XZ proportion adjustment. Surface geometry stays view independent.
  return [base[0] * depth, base[1], base[2] * depth];
}
function spreadBits(n: number): number { n = (n | n << 8) & 0x00ff00ff; n = (n | n << 4) & 0x0f0f0f0f; n = (n | n << 2) & 0x33333333; return (n | n << 1) & 0x55555555; }
export function maskPoints(mask: Mask, count: number): [number, number][] {
  const ink: { u: number; v: number; key: number }[] = [];
  for (let y = 0; y < mask.size; y++) for (let x = 0; x < mask.size; x++) {
    if (mask.pixels[y * mask.size + x]! > 127) ink.push({ u: x / (mask.size - 1) * 2 - 1, v: 1 - y / (mask.size - 1) * 2, key: spreadBits(x) | spreadBits(y) << 1 });
  }
  ink.sort((a, b) => a.key - b.key);
  if (!ink.length) throw new Error(`${mask.label}: 形が空です。入力かしきい値を調整してください。`);
  return Array.from({ length: count }, (_, i) => { const p = ink[Math.min(ink.length - 1, Math.floor((i + .5) / count * ink.length))]!; return [p.u, p.v]; });
}
export function hullPoints(masks: Mask[], resolution: number): { positions: Float32Array; candidates: number } {
  const out: number[] = [];
  for (let iy = 0; iy < resolution; iy++) for (let iz = 0; iz < resolution; iz++) for (let ix = 0; ix < resolution; ix++) {
    const p = [(ix + .5) / resolution * 1.8 - .9, (iy + .5) / resolution * 1.8 + .05, (iz + .5) / resolution * 1.8 - .9];
    if (FACE_IDS.every((face, i) => sample(masks[i]!, ...projectToFace(face, p)) > .5)) out.push(...p);
  }
  return { positions: new Float32Array(out), candidates: resolution ** 3 };
}
export function oppositeAgreement(masks: Mask[]): number[] {
  return [[1, 3], [2, 4]].map(([a, b]) => {
    let union = 0, overlap = 0;
    for (let y = 0; y < masks[a!]!.size; y++) for (let x = 0; x < masks[a!]!.size; x++) {
      const s = masks[a!]!.size, pa = masks[a!]!.pixels[y * s + x]! > 127, pb = masks[b!]!.pixels[y * s + (s - 1 - x)]! > 127;
      if (pa || pb) union++; if (pa && pb) overlap++;
    }
    return union ? overlap / union : 1;
  });
}

const vertexShader = `
uniform vec3 uDirection; uniform float uContrast; uniform float uMode; uniform float uReveal; uniform float uSize;
uniform vec4 uWeights; uniform float uLeft;
attribute vec3 a0; attribute vec3 a1; attribute vec3 a2; attribute vec3 a3; attribute vec3 a4;
attribute vec3 aNormal; attribute float aInk; attribute vec3 aTint;
varying vec3 vColor; varying float vAlpha;
void main(){
 vec3 p=position;
 if(uMode<.5){ vec4 w=pow(uWeights,vec4(2.15)); float l=pow(uLeft,2.15); float total=dot(w,vec4(1.))+l; w/=total; l/=total; p=a0*w.x+a1*w.y+a2*w.z+a3*w.w+a4*l; }
 float d=dot(aNormal,uDirection);
 float signal=smoothstep(uReveal,uReveal+.22,d);
 vColor=uMode<.5?vec3(.88,.85,.77):uMode>1.5?vec3(.68,.80,.78):mix(vec3(.23,.30,.32),aTint,aInk*signal);
 if(uContrast>.5){vec3 bg=uContrast<1.5?vec3(.52,.59,.63):uContrast<2.5?vec3(.10,.16,.20):vec3(.10,.25,.38); vec3 fg=uContrast<1.5?vec3(.04,.065,.08):uContrast<2.5?vec3(.97,.95,.82):vec3(.95,.63,.17); vColor=mix(bg,fg,uMode<.5||uMode>1.5?1.:aInk*signal);}
 vAlpha=uMode>.5&&uMode<1.5?mix(.33,1.,aInk*signal):1.;
 vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;
 gl_PointSize=clamp(uSize/max(-mv.z,.2),1.,8.);
}`;
const fragmentShader = `varying vec3 vColor; varying float vAlpha; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard; gl_FragColor=vec4(vColor,vAlpha*(1.-smoothstep(.32,.5,r)));}`;

export class AtlasBody {
  root = new THREE.Group();
  geometry = new THREE.BufferGeometry();
  material: THREE.ShaderMaterial;
  pointCount = 0;
  generatedMs = 0;
  hullCandidates = 0;
  positionUpdates = 0;
  bounds: number[] = [];
  weights: FaceWeights = [0, 1, 0, 0, 0];
  direction = new THREE.Vector3(0, 0, 1);
  constructor(public project: Project) {
    const t = performance.now(), { mode, budget, masks, depth } = project;
    let positions: Float32Array;
    const normals: number[] = [], ink: number[] = [], colors: number[] = [];
    if (mode === "morph") {
      this.pointCount = budget; positions = new Float32Array(budget * 3);
      FACE_IDS.forEach((face, i) => { const pts = maskPoints(masks[i]!, budget); const arr = new Float32Array(budget * 3); pts.forEach(([u, v], j) => arr.set(facePoint(face, u, v, .9), j * 3)); this.geometry.setAttribute(`a${i}`, new THREE.BufferAttribute(arr, 3)); });
    } else if (mode === "shell") {
      const side = Math.floor(Math.sqrt(budget / 5)), out: number[] = [];
      FACE_IDS.forEach((face, i) => { for (let y = 0; y < side; y++) for (let x = 0; x < side; x++) {
        const u = (x + .5) / side * 2 - 1, v = 1 - (y + .5) / side * 2;
        out.push(...shellPoint(face, u, v, depth)); normals.push(...FACE_NORMALS[face]);
        ink.push(sample(masks[i]!, u, v)); colors.push(.92,.78,.51);
      }});
      positions = new Float32Array(out); this.pointCount = out.length / 3;
    } else {
      const hull = hullPoints(masks, 48); this.hullCandidates = hull.candidates;
      const raw = hull.positions; this.pointCount = Math.min(budget, raw.length / 3);
      positions = new Float32Array(this.pointCount * 3);
      for (let i = 0; i < this.pointCount; i++) positions.set(raw.subarray(Math.floor(i / this.pointCount * raw.length / 3) * 3, Math.floor(i / this.pointCount * raw.length / 3) * 3 + 3), i * 3);
    }
    this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    if (mode !== "morph") for (let i = 0; i < 5; i++) this.geometry.setAttribute(`a${i}`, new THREE.BufferAttribute(positions, 3));
    this.geometry.setAttribute("aNormal", new THREE.BufferAttribute(normals.length ? new Float32Array(normals) : new Float32Array(this.pointCount * 3), 3));
    this.geometry.setAttribute("aInk", new THREE.BufferAttribute(ink.length ? new Float32Array(ink) : new Float32Array(this.pointCount), 1));
    this.geometry.setAttribute("aTint", new THREE.BufferAttribute(colors.length ? new Float32Array(colors) : new Float32Array(this.pointCount * 3), 3));
    this.material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms: { uDirection: { value: this.direction }, uContrast: { value: {current:0,ink:1,chalk:2,duotone:3}[project.contrast??'current'] }, uMode: { value: mode === "morph" ? 0 : mode === "shell" ? 1 : 2 }, uReveal: { value: project.reveal }, uSize: { value: 10 }, uWeights: { value: new THREE.Vector4(0, 1, 0, 0) }, uLeft: { value: 0 } }, transparent: true, depthWrite: false });
    const points = new THREE.Points(this.geometry, this.material); points.frustumCulled = false; this.root.add(points);
    this.geometry.computeBoundingBox(); const b = this.geometry.boundingBox; if (b && !b.isEmpty()) this.bounds = [...b.min.toArray(), ...b.max.toArray()];
    this.generatedMs = performance.now() - t;
  }
  setView(direction: THREE.Vector3, pixels: number) {
    this.direction.copy(direction).normalize(); this.weights = computeViewBlend(this.direction).weights;
    this.material.uniforms.uWeights!.value.set(...this.weights.slice(0, 4)); this.material.uniforms.uLeft!.value = this.weights[4];
    this.material.uniforms.uSize!.value = pixels * (this.project.mode === "shell" ? .035 : .012);
  }
  snapshot() { return { mode: this.project.mode, pointCount: this.pointCount, weights: this.weights, generatedMs: this.generatedMs, positionUpdates: this.positionUpdates, fixedGeometry: this.project.mode !== "morph", bounds: this.bounds, attributeBytes: Object.values(this.geometry.attributes).reduce((sum, a) => sum + a.array.byteLength, 0), hullCandidates: this.hullCandidates, oppositeAgreement: oppositeAgreement(this.project.masks) }; }
  dispose() { this.geometry.dispose(); this.material.dispose(); }
}
