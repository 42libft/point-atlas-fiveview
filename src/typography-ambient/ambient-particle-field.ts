import * as THREE from "three";
import type { GlyphTargetInput } from "../typography/target-input";
import { ViewPatternRenderer } from "../typography/view-pattern";
import {
  computeViewBlend,
  FACE_IDS,
  type FaceId,
  type FaceWeights,
  type Vector3Like,
} from "../typography/view-blend";
import {
  createAmbientTargetData,
  type AmbientTargetData,
} from "./ambient-layout";
import type { AmbientParameters } from "./ambient-parameters";

const DEFAULT_SHARPNESS = 1.35;

const vertexShader = /* glsl */ `
  precision highp float;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform vec4 uWeightsA;
  uniform float uWeightLeft;
  uniform float uBoundaryEnergy;
  uniform float uPointScale;
  uniform float uFieldSpread;
  uniform float uParticleSize;
  uniform float uReadingElevation;

  in vec3 position;
  in vec3 aTarget0;
  in vec3 aTarget1;
  in vec3 aTarget2;
  in vec3 aTarget3;
  in vec3 aTarget4;
  in vec2 aFieldUv;
  in vec4 aMembershipA;
  in float aMembershipLeft;
  in vec4 aParticle;

  out vec2 vPatternUv;
  out float vMembership;
  out float vSizeNoise;
  out float vActivation;
  out float vPaletteNoise;
  out float vGalaxyAffinity;
  out float vBoundaryEnergy;

  void main() {
    vec4 shapeWeightsA = pow(max(uWeightsA, vec4(0.0)), vec4(2.15));
    float shapeWeightLeft = pow(max(uWeightLeft, 0.0), 2.15);
    float shapeWeightTotal = max(
      dot(shapeWeightsA, vec4(1.0)) + shapeWeightLeft,
      0.000001
    );
    shapeWeightsA /= shapeWeightTotal;
    shapeWeightLeft /= shapeWeightTotal;

    vec3 center0 = vec3(0.0, 0.78, 0.0);
    vec3 center1 = vec3(0.0, 0.39, 0.72);
    vec3 center2 = vec3(0.72, 0.39, 0.0);
    vec3 center3 = vec3(0.0, 0.39, -0.72);
    vec3 center4 = vec3(-0.72, 0.39, 0.0);
    vec3 target0 = center0 + (aTarget0 - center0) * uFieldSpread;
    vec3 target1 = center1 + (aTarget1 - center1) * uFieldSpread;
    vec3 target2 = center2 + (aTarget2 - center2) * uFieldSpread;
    vec3 target3 = center3 + (aTarget3 - center3) * uFieldSpread;
    vec3 target4 = center4 + (aTarget4 - center4) * uFieldSpread;
    // Optional generic reading layout. Rotate each complete side state toward
    // the viewer's upper ring, about the common object center, after spread.
    // A zero setting follows the default shader path unchanged.
    if (uReadingElevation > 0.0001) {
      float c = cos(uReadingElevation), s = sin(uReadingElevation);
      vec3 center = vec3(0.0, 0.39, 0.0);
      vec3 p1 = target1-center, p2 = target2-center;
      vec3 p3 = target3-center, p4 = target4-center;
      target1 = center + vec3(p1.x, c*p1.y+s*p1.z, -s*p1.y+c*p1.z);
      target2 = center + vec3(c*p2.x-s*p2.y, s*p2.x+c*p2.y, p2.z);
      target3 = center + vec3(p3.x, c*p3.y-s*p3.z, s*p3.y+c*p3.z);
      target4 = center + vec3(c*p4.x+s*p4.y, -s*p4.x+c*p4.y, p4.z);
    }
    vec3 body =
      target0 * shapeWeightsA.x +
      target1 * shapeWeightsA.y +
      target2 * shapeWeightsA.z +
      target3 * shapeWeightsA.w +
      target4 * shapeWeightLeft;

    float membership =
      dot(aMembershipA, shapeWeightsA) +
      aMembershipLeft * shapeWeightLeft;
    float phase = aParticle.z * 6.2831853 + dot(aFieldUv, vec2(13.4, 9.1));
    vec3 curl = vec3(
      sin(phase + body.y * 7.0),
      cos(phase * 1.17 + body.x * 5.0 - body.z * 3.0),
      sin(phase * 0.83 + body.z * 6.0)
    );
    float curlAmount = uBoundaryEnergy * uBoundaryEnergy *
      (0.018 + 0.040 * uBoundaryEnergy);
    body += curl * curlAmount * mix(0.42, 1.0, aParticle.z);

    vec4 viewPosition = modelViewMatrix * vec4(body, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = clamp(
      0.0125 * uPointScale / max(-viewPosition.z, 0.2) *
      aParticle.x * uParticleSize * (1.0 + uBoundaryEnergy * 0.12),
      1.0,
      11.0
    );

    vPatternUv = aFieldUv;
    vMembership = membership;
    vSizeNoise = aParticle.x;
    vActivation = aParticle.y;
    vPaletteNoise = aParticle.z;
    vGalaxyAffinity = aParticle.w;
    vBoundaryEnergy = uBoundaryEnergy;
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  uniform sampler2D uPattern;
  uniform float uDensity;
  uniform float uGalaxyConcentration;
  uniform float uSignalContrast;
  uniform float uOuterStars;
  uniform float uReadability;
  uniform float uFigureEmphasis;

  in vec2 vPatternUv;
  in float vMembership;
  in float vSizeNoise;
  in float vActivation;
  in float vPaletteNoise;
  in float vGalaxyAffinity;
  in float vBoundaryEnergy;
  out vec4 outColor;

  vec3 paletteColor(float selector, vec4 probabilities) {
    float first = probabilities.x;
    float second = first + probabilities.y;
    float third = second + probabilities.z;
    if (selector < first) return vec3(0.867, 0.976, 0.949);
    if (selector < second) return vec3(0.384, 0.863, 0.824);
    if (selector < third) return vec3(0.867, 0.545, 0.796);
    return vec3(0.529, 0.471, 0.824);
  }

  void main() {
    // Particle existence depends on the galaxy field only. Glyph membership is
    // deliberately absent, so text cannot emerge from density or opacity.
    float galaxyExponent = mix(0.55, 2.40, uGalaxyConcentration);
    float visibility = uDensity * pow(
      clamp(vGalaxyAffinity, 0.0, 1.0),
      galaxyExponent
    );
    vec2 fieldPoint = vec2(
      mix(-1.48, 1.48, vPatternUv.x),
      mix(-0.86, 0.86, vPatternUv.y)
    );
    float outerRadius = length(vec2(fieldPoint.x / 1.30, fieldPoint.y / 0.68));
    float outerEnvelope = smoothstep(0.94, 1.03, outerRadius) *
      (1.0 - smoothstep(1.08, 1.58, outerRadius));
    float outerJitter = pow(fract(
      vPaletteNoise * 37.719 + vPatternUv.x * 11.13 + vPatternUv.y * 7.17
    ), 3.2);
    float outerVisibility = uDensity * uOuterStars * outerEnvelope *
      mix(0.025, 0.19, outerJitter);
    visibility = max(visibility, outerVisibility);
    if (vActivation > visibility) discard;
    // Explicitly selected generic alternative: foreground survives while the
    // surrounding field keeps a deterministic 16% sample. This changes density,
    // unlike the inherited color-only presentation, and is disabled by default.
    if (uFigureEmphasis > 0.5) {
      float figure = smoothstep(0.08, 0.70, vMembership);
      float keep = mix(0.16, 1.0, figure);
      if (fract(vPaletteNoise * 61.731 + vActivation * 17.913) > keep) discard;
    }

    vec2 centered = gl_PointCoord * 2.0 - 1.0;
    float angle = atan(centered.y, centered.x);
    float liquidEdge = length(centered) +
      sin(angle * 3.0 + vPaletteNoise * 19.0) * 0.035 +
      sin(angle * 5.0 - vPaletteNoise * 11.0) * 0.018;
    if (liquidEdge > 1.0) discard;

    float galaxy = smoothstep(0.10, 0.86, vGalaxyAffinity);
    vec3 color;
    vec4 backgroundProbabilities = mix(
      vec4(0.02, 0.06, 0.42, 0.50),
      vec4(0.03, 0.08, 0.41, 0.48),
      galaxy
    );
    vec4 figureProbabilities = mix(
      vec4(0.48, 0.46, 0.04, 0.02),
      vec4(0.46, 0.48, 0.04, 0.02),
      galaxy
    );
    float backgroundSelector = fract(vPaletteNoise * 1.071 + 0.173);
    float figureSelector = fract(vPaletteNoise * 1.733 + 0.417);
    vec3 backgroundColor = paletteColor(backgroundSelector, backgroundProbabilities);
    vec3 figureColor = paletteColor(figureSelector, figureProbabilities);
    float ambiguityNoise = fract(vPaletteNoise * 83.271 + 0.371);
    float colorCarrier = smoothstep(-0.035, 0.035, ambiguityNoise);
    float figureSignal = clamp(
      vMembership * uSignalContrast * colorCarrier,
      0.0,
      1.0
    );
    color = mix(backgroundColor, figureColor, figureSignal);

    vec3 field = texture(uPattern, clamp(vPatternUv, vec2(0.018), vec2(0.982))).rgb;
    float fieldLuma = dot(field, vec3(0.299, 0.587, 0.114));
    color *= mix(
      0.78,
      1.09,
      smoothstep(0.10, 0.92, fieldLuma)
    );
    color = mix(color, color * 0.76 + field * 0.24, 0.055);

    float dome = sqrt(max(0.0, 1.0 - liquidEdge * liquidEdge));
    vec3 splatNormal = normalize(vec3(centered.x, -centered.y, dome + 0.08));
    vec3 lightDirection = normalize(vec3(-0.38, 0.58, 0.72));
    float wetHighlight = pow(max(dot(splatNormal, lightDirection), 0.0), 22.0);
    float edgeShade = mix(0.66, 1.0, smoothstep(0.0, 0.74, dome));
    color *= edgeShade;
    color = mix(color, vec3(0.90, 0.96, 1.0), 0.012 + vSizeNoise * 0.012);
    color += wetHighlight * vec3(0.72, 0.88, 1.0) * 0.28;
    color += pow(dome, 7.0) * vec3(0.07, 0.018, 0.10) * vBoundaryEnergy;

    // Optional, user-selected color candidates. Geometry, density and alpha
    // remain identical. Zero preserves the existing presentation exactly.
    if (uReadability > 0.5) {
      vec3 field = uReadability < 1.5 ? vec3(0.52, 0.59, 0.63)
        : uReadability < 2.5 ? vec3(0.10, 0.16, 0.20) : vec3(0.10, 0.25, 0.38);
      vec3 figure = uReadability < 1.5 ? vec3(0.04, 0.065, 0.08)
        : uReadability < 2.5 ? vec3(0.97, 0.95, 0.82) : vec3(0.95, 0.63, 0.17);
      color = mix(field, figure, clamp(vMembership, 0.0, 1.0));
    }
    outColor = vec4(color, 1.0);
  }
`;

export const AMBIENT_PARTICLE_FRAGMENT_SHADER = fragmentShader;

type AmbientUniforms = {
  uWeightsA: { value: THREE.Vector4 };
  uWeightLeft: { value: number };
  uBoundaryEnergy: { value: number };
  uPointScale: { value: number };
  uFieldSpread: { value: number };
  uParticleSize: { value: number };
  uReadingElevation: { value: number };
  uPattern: { value: THREE.Texture };
  uDensity: { value: number };
  uGalaxyConcentration: { value: number };
  uSignalContrast: { value: number };
  uOuterStars: { value: number };
  uReadability: { value: number };
  uFigureEmphasis: { value: number };
};

export type AmbientParticleFieldSnapshot = Readonly<{
  seed: number;
  pointCount: number;
  layoutHash: string;
  structuralHash: string;
  direction: readonly [number, number, number];
  weights: FaceWeights;
  dominant: FaceId;
  boundaryEnergy: number;
  updateCount: number;
  patternRenderCount: number;
  drawCalls: 1;
  attributeSlots: 10;
  pointOpacity: 1;
}>;

function normalizeDirection(direction: Vector3Like): readonly [number, number, number] {
  const vector = direction as Readonly<{ x: number; y: number; z: number }>;
  const raw = Array.isArray(direction)
    ? direction
    : [vector.x, vector.y, vector.z] as const;
  const length = Math.hypot(raw[0], raw[1], raw[2]);
  if (!Number.isFinite(length) || length <= Number.EPSILON) return [0, 1, 0];
  return [raw[0] / length, raw[1] / length, raw[2] / length];
}

function sameBlend(
  previous: FaceWeights | null,
  next: FaceWeights,
  previousEnergy: number,
  nextEnergy: number,
): boolean {
  if (previous === null || Math.abs(previousEnergy - nextEnergy) > 1e-10) return false;
  return previous.every((weight, index) => Math.abs(weight - next[index]!) <= 1e-10);
}

function createGeometry(data: AmbientTargetData): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(data.pointCount * 3), 3),
  );

  for (let faceIndex = 0; faceIndex < FACE_IDS.length; faceIndex += 1) {
    const face = FACE_IDS[faceIndex]!;
    geometry.setAttribute(
      `aTarget${faceIndex}`,
      new THREE.BufferAttribute(data.byFace[face].positions, 3),
    );
  }

  geometry.setAttribute("aFieldUv", new THREE.BufferAttribute(data.fieldUv, 2));
  const membershipA = new Float32Array(data.pointCount * 4);
  for (let faceIndex = 0; faceIndex < 4; faceIndex += 1) {
    const membership = data.byFace[FACE_IDS[faceIndex]!].membership;
    for (let pointIndex = 0; pointIndex < data.pointCount; pointIndex += 1) {
      membershipA[pointIndex * 4 + faceIndex] = membership[pointIndex]!;
    }
  }
  geometry.setAttribute("aMembershipA", new THREE.BufferAttribute(membershipA, 4));
  geometry.setAttribute(
    "aMembershipLeft",
    new THREE.BufferAttribute(data.byFace.left.membership, 1),
  );

  const particle = new Float32Array(data.pointCount * 4);
  for (let pointIndex = 0; pointIndex < data.pointCount; pointIndex += 1) {
    const index = pointIndex * 4;
    particle[index] = data.sizeNoise[pointIndex]!;
    particle[index + 1] = data.activation[pointIndex]!;
    particle[index + 2] = data.paletteNoise[pointIndex]!;
    particle[index + 3] = data.galaxyAffinity[pointIndex]!;
  }
  geometry.setAttribute("aParticle", new THREE.BufferAttribute(particle, 4));
  geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 0.42, 0), 1.7);
  return geometry;
}

export class AmbientParticleField {
  readonly root = new THREE.Group();

  private readonly renderer: THREE.WebGLRenderer;
  private readonly seed: number;
  private readonly data: AmbientTargetData;
  private readonly geometry: THREE.BufferGeometry;
  private readonly material: THREE.RawShaderMaterial;
  private readonly points: THREE.Points;
  private readonly pattern: ViewPatternRenderer;
  private readonly uniforms: AmbientUniforms;
  private direction: readonly [number, number, number] = [0, 1, 0];
  private weights: FaceWeights = [1, 0, 0, 0, 0];
  private dominant: FaceId = "top";
  private boundaryEnergy = 0;
  private sharpness = DEFAULT_SHARPNESS;
  private lastPatternWeights: FaceWeights | null = null;
  private lastPatternEnergy = Number.NaN;
  private updateCount = 0;

  constructor(
    renderer: THREE.WebGLRenderer,
    targets: GlyphTargetInput,
    seed: number,
    parameters: AmbientParameters,
    pointCount?: number,
    membershipSampler?: (face: FaceId, x: number, y: number) => number,
  ) {
    this.renderer = renderer;
    this.seed = seed >>> 0;
    this.data = createAmbientTargetData(targets, this.seed, pointCount, membershipSampler);
    const shortestDrawingBufferEdge = Math.min(
      renderer.domElement.width,
      renderer.domElement.height,
    );
    this.pattern = new ViewPatternRenderer(
      this.seed,
      shortestDrawingBufferEdge < 700 ? 256 : 320,
    );
    this.geometry = createGeometry(this.data);
    this.uniforms = {
      uWeightsA: { value: new THREE.Vector4(1, 0, 0, 0) },
      uWeightLeft: { value: 0 },
      uBoundaryEnergy: { value: 0 },
      uPointScale: { value: 1 },
      uFieldSpread: { value: parameters.spread },
      uParticleSize: { value: parameters.particleSize },
      uReadingElevation: { value: 0 },
      uPattern: { value: this.pattern.texture },
      uDensity: { value: parameters.density },
      uGalaxyConcentration: { value: parameters.galaxyConcentration },
      uSignalContrast: { value: parameters.signalContrast },
      uOuterStars: { value: parameters.outerStars },
      uReadability: { value: 0 },
      uFigureEmphasis: { value: 0 },
    };
    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader,
      fragmentShader,
      glslVersion: THREE.GLSL3,
      transparent: false,
      depthTest: true,
      depthWrite: true,
      blending: THREE.NormalBlending,
    });
    this.points = new THREE.Points(this.geometry, this.material);
    this.points.name = "five-direction-chromatic-galaxy-field";
    this.points.frustumCulled = false;
    this.points.renderOrder = 2;
    this.root.name = "chromatic-galaxy-typography";
    this.root.add(this.points);
    this.setViewDirection(this.direction);
  }

  setReadability(mode: "current" | "ink" | "chalk" | "duotone"): void {
    this.uniforms.uReadability.value = {current:0, ink:1, chalk:2, duotone:3}[mode];
  }

  setFigureEmphasis(enabled: boolean): void { this.uniforms.uFigureEmphasis.value = enabled ? 1 : 0; }
  setReadingElevation(degrees: number): void { this.uniforms.uReadingElevation.value = Math.max(0, Math.min(45, degrees)) * Math.PI / 180; }

  setViewDirection(direction: Vector3Like): boolean {
    this.direction = normalizeDirection(direction);
    const blend = computeViewBlend(this.direction, this.sharpness);
    this.weights = blend.weights;
    this.dominant = blend.dominant;
    this.boundaryEnergy = blend.boundaryEnergy;
    this.uniforms.uWeightsA.value.set(
      blend.weights[0],
      blend.weights[1],
      blend.weights[2],
      blend.weights[3],
    );
    this.uniforms.uWeightLeft.value = blend.weights[4];
    this.uniforms.uBoundaryEnergy.value = blend.boundaryEnergy;

    const changed = !sameBlend(
      this.lastPatternWeights,
      blend.weights,
      this.lastPatternEnergy,
      blend.boundaryEnergy,
    );
    if (!changed) return false;
    this.pattern.update(this.renderer, blend.weights, blend.boundaryEnergy);
    this.lastPatternWeights = [...blend.weights] as FaceWeights;
    this.lastPatternEnergy = blend.boundaryEnergy;
    this.updateCount += 1;
    return true;
  }

  setSharpness(sharpness: number): boolean {
    if (!Number.isFinite(sharpness) || sharpness <= 0) return false;
    if (Math.abs(sharpness - this.sharpness) <= Number.EPSILON) return false;
    this.sharpness = sharpness;
    return this.setViewDirection(this.direction);
  }

  setPointScale(pointScale: number): void {
    if (Number.isFinite(pointScale) && pointScale > 0) {
      this.uniforms.uPointScale.value = pointScale;
    }
  }

  setParameters(parameters: AmbientParameters): void {
    this.uniforms.uDensity.value = parameters.density;
    this.uniforms.uGalaxyConcentration.value = parameters.galaxyConcentration;
    this.uniforms.uFieldSpread.value = parameters.spread;
    this.uniforms.uParticleSize.value = parameters.particleSize;
    this.uniforms.uSignalContrast.value = parameters.signalContrast;
    this.uniforms.uOuterStars.value = parameters.outerStars;
  }

  getDebugSnapshot(): AmbientParticleFieldSnapshot {
    return {
      seed: this.seed,
      pointCount: this.data.pointCount,
      layoutHash: this.data.layoutHash,
      structuralHash: this.data.structuralHash,
      direction: [...this.direction],
      weights: [...this.weights] as FaceWeights,
      dominant: this.dominant,
      boundaryEnergy: this.boundaryEnergy,
      updateCount: this.updateCount,
      patternRenderCount: this.pattern.getSnapshot().renderCount,
      drawCalls: 1,
      attributeSlots: 10,
      pointOpacity: 1,
    };
  }

  dispose(): void {
    this.root.remove(this.points);
    this.geometry.dispose();
    this.material.dispose();
    this.pattern.dispose();
  }
}
