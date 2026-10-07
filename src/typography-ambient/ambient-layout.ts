import type { GlyphTargetInput } from "../typography/target-input";
import {
  GLYPH_SDF_BOUNDS,
  encodeGlyphSdfLayer,
} from "../typography-liquid/glyph-sdf-atlas";
import { mapGlyphPointToFace } from "../typography/face-space";
import {
  FACE_IDS,
  type FaceId,
  type FaceWeights,
} from "../typography/view-blend";

export const DEFAULT_AMBIENT_POINT_COUNT = 28_672;
export const GALAXY_FIELD_BOUNDS = Object.freeze({
  minX: -1.48,
  maxX: 1.48,
  minY: -0.86,
  maxY: 0.86,
});

const GLYPH_MEMBERSHIP_SIZE = 256;
const NORMAL_THICKNESS = 0.068;

export type AmbientFaceTarget = Readonly<{
  positions: Float32Array;
  membership: Float32Array;
}>;

export type AmbientTargetData = Readonly<{
  seed: number;
  pointCount: number;
  byFace: Readonly<Record<FaceId, AmbientFaceTarget>>;
  fieldUv: Float32Array;
  sizeNoise: Float32Array;
  activation: Float32Array;
  paletteNoise: Float32Array;
  galaxyAffinity: Float32Array;
  layoutHash: string;
  structuralHash: string;
}>;

function hashUnit(seed: number, value: number): number {
  let state = (seed ^ Math.imul(value + 1, 0x9e3779b9)) >>> 0;
  state = Math.imul(state ^ (state >>> 16), 0x7feb352d);
  state = Math.imul(state ^ (state >>> 15), 0x846ca68b);
  return ((state ^ (state >>> 16)) >>> 0) / 0x1_0000_0000;
}

function radicalInverse(index: number, base: number): number {
  let value = 0;
  let factor = 1 / base;
  let remaining = index;
  while (remaining > 0) {
    value += (remaining % base) * factor;
    remaining = Math.floor(remaining / base);
    factor /= base;
  }
  return value;
}

function fract(value: number): number {
  return value - Math.floor(value);
}

function smoothstep(edge0: number, edge1: number, value: number): number {
  const unit = Math.min(1, Math.max(0, (value - edge0) / (edge1 - edge0)));
  return unit * unit * (3 - 2 * unit);
}

function warpFieldPoint(
  x: number,
  y: number,
  faceIndex: number,
  seed: number,
): readonly [number, number] {
  const phaseX = hashUnit(seed ^ 0x6a09e667, faceIndex) * Math.PI * 2;
  const phaseY = hashUnit(seed ^ 0xbb67ae85, faceIndex) * Math.PI * 2;
  const normalizedX = x / GALAXY_FIELD_BOUNDS.maxX;
  const normalizedY = y / GALAXY_FIELD_BOUNDS.maxY;
  const envelope = Math.max(
    0,
    1 - Math.pow(Math.max(Math.abs(normalizedX), Math.abs(normalizedY)), 3.2),
  );
  const warpX =
    Math.sin(y * 5.1 + phaseX) * 0.045 +
    Math.sin((x + y) * 3.4 - phaseY) * 0.018;
  const warpY =
    Math.sin(x * 4.3 + phaseY) * 0.034 +
    Math.cos((x - y) * 3.0 + phaseX) * 0.014;
  return [x + warpX * envelope, y + warpY * envelope];
}

function computeGalaxyAffinity(
  x: number,
  y: number,
  seed: number,
): number {
  const normalizedX = x / GALAXY_FIELD_BOUNDS.maxX;
  const normalizedY = y / GALAXY_FIELD_BOUNDS.maxY;
  const phaseA = hashUnit(seed ^ 0x3c6ef372, 1) * Math.PI * 2;
  const phaseB = hashUnit(seed ^ 0xa54ff53a, 2) * Math.PI * 2;
  const cloudX = x / 1.30;
  const cloudY = y / 0.68;
  const cloudAngle = Math.atan2(cloudY, cloudX);
  const organicRadius = Math.hypot(cloudX, cloudY) +
    Math.sin(cloudAngle * 3 + phaseA) * 0.060 +
    Math.sin(cloudAngle * 7 - phaseB) * 0.034 +
    Math.sin(cloudAngle * 11 + phaseA - phaseB) * 0.017;
  const cloudSupport = 1 - smoothstep(0.82, 1.13, organicRadius);
  const centerLine =
    normalizedX * 0.22 +
    Math.sin(normalizedX * 4.2 + phaseA) * 0.13 +
    Math.sin(normalizedX * 9.4 - phaseB) * 0.045;
  const secondaryLine =
    -0.24 - normalizedX * 0.16 + Math.cos(normalizedX * 5.8 + phaseB) * 0.10;
  const coreDistance = Math.abs(normalizedY - centerLine);
  const secondaryDistance = Math.abs(normalizedY - secondaryLine);
  const core = Math.exp(-Math.pow(coreDistance / 0.205, 1.55));
  const secondary = Math.exp(-Math.pow(secondaryDistance / 0.12, 1.45)) * 0.34;
  const radialDistance = Math.hypot(normalizedX * 0.88, normalizedY * 1.03);
  const halo = Math.exp(-Math.pow(radialDistance / 0.82, 2.1)) * 0.22;
  const horizontalEnvelope = 1 - smoothstep(0.61, 1.02, Math.abs(normalizedX));
  const verticalEnvelope = 1 - smoothstep(0.70, 1.04, Math.abs(normalizedY));
  const knot = 0.72 + 0.28 * Math.sin(normalizedX * 11.0 + phaseA) ** 2;
  const band = Math.max(core * knot, secondary) *
    horizontalEnvelope * verticalEnvelope;
  const lobeA = Math.exp(-(
    Math.pow((normalizedX + 0.46) / 0.30, 2) +
    Math.pow((normalizedY - 0.18) / 0.23, 2)
  )) * 0.28;
  const lobeB = Math.exp(-(
    Math.pow((normalizedX - 0.36) / 0.24, 2) +
    Math.pow((normalizedY + 0.25) / 0.29, 2)
  )) * 0.24;
  const internalDensity = Math.min(
    1,
    0.34 + Math.max(band * 0.72, halo, lobeA, lobeB),
  );
  return Math.min(1, Math.max(0, cloudSupport * internalDensity));
}

function sampleMembership(
  encoded: Uint8Array,
  x: number,
  y: number,
): number {
  if (
    x < GLYPH_SDF_BOUNDS.minX ||
    x > GLYPH_SDF_BOUNDS.maxX ||
    y < GLYPH_SDF_BOUNDS.minY ||
    y > GLYPH_SDF_BOUNDS.maxY
  ) {
    return 0;
  }
  const unitX = (x - GLYPH_SDF_BOUNDS.minX) /
    (GLYPH_SDF_BOUNDS.maxX - GLYPH_SDF_BOUNDS.minX);
  const unitY = (y - GLYPH_SDF_BOUNDS.minY) /
    (GLYPH_SDF_BOUNDS.maxY - GLYPH_SDF_BOUNDS.minY);
  const pixelX = Math.min(
    GLYPH_MEMBERSHIP_SIZE - 1,
    Math.max(0, Math.round(unitX * (GLYPH_MEMBERSHIP_SIZE - 1))),
  );
  const pixelY = Math.min(
    GLYPH_MEMBERSHIP_SIZE - 1,
    Math.max(0, Math.round(unitY * (GLYPH_MEMBERSHIP_SIZE - 1))),
  );
  const encodedDistance = encoded[pixelY * GLYPH_MEMBERSHIP_SIZE + pixelX]! / 255;
  return smoothstep(0.485, 0.535, encodedDistance);
}

function hashFloatArrays(arrays: readonly Float32Array[]): string {
  let hash = 0x811c9dc5;
  for (const array of arrays) {
    for (const value of array) {
      const quantized = Math.round(value * 1_000_000);
      hash ^= quantized;
      hash = Math.imul(hash, 0x01000193);
    }
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

export function galaxyVisibilityProbability(
  affinity: number,
  density: number,
  concentration: number,
): number {
  const safeAffinity = Math.min(1, Math.max(0, affinity));
  const safeDensity = Math.min(1, Math.max(0, density));
  const safeConcentration = Math.min(1, Math.max(0, concentration));
  const exponent = 0.55 * (1 - safeConcentration) + 2.40 * safeConcentration;
  return safeDensity * Math.pow(safeAffinity, exponent);
}

export function createAmbientTargetData(
  targets: GlyphTargetInput,
  seed: number,
  pointCount = DEFAULT_AMBIENT_POINT_COUNT,
  membershipSampler?: (face: FaceId, x: number, y: number) => number,
): AmbientTargetData {
  if (!Number.isInteger(pointCount) || pointCount <= 0) {
    throw new RangeError("Galaxy point count must be a positive integer.");
  }
  const normalizedSeed = seed >>> 0;
  const width = GALAXY_FIELD_BOUNDS.maxX - GALAXY_FIELD_BOUNDS.minX;
  const height = GALAXY_FIELD_BOUNDS.maxY - GALAXY_FIELD_BOUNDS.minY;
  const offsetU = hashUnit(normalizedSeed ^ 0x510e527f, 0);
  const offsetV = hashUnit(normalizedSeed ^ 0x9b05688c, 0);
  const localPositions = new Float32Array(pointCount * 2);
  const fieldUv = new Float32Array(pointCount * 2);
  const sizeNoise = new Float32Array(pointCount);
  const activation = new Float32Array(pointCount);
  const paletteNoise = new Float32Array(pointCount);
  const galaxyAffinity = new Float32Array(pointCount);

  for (let pointIndex = 0; pointIndex < pointCount; pointIndex += 1) {
    const sequenceIndex = pointIndex + 1;
    const u = fract(radicalInverse(sequenceIndex, 2) + offsetU);
    const v = fract(radicalInverse(sequenceIndex, 3) + offsetV);
    const x = GALAXY_FIELD_BOUNDS.minX + u * width;
    const y = GALAXY_FIELD_BOUNDS.minY + v * height;
    const index = pointIndex * 2;
    localPositions[index] = x;
    localPositions[index + 1] = y;
    fieldUv[index] = u;
    fieldUv[index + 1] = v;
    const sizeUnit = hashUnit(normalizedSeed ^ 0x5be0cd19, pointIndex);
    sizeNoise[pointIndex] = 0.58 + Math.pow(sizeUnit, 2.1) * 1.55;
    activation[pointIndex] = hashUnit(normalizedSeed ^ 0xcbbb9d5d, pointIndex);
    paletteNoise[pointIndex] = hashUnit(normalizedSeed ^ 0x629a292a, pointIndex);
    galaxyAffinity[pointIndex] = computeGalaxyAffinity(x, y, normalizedSeed);
  }

  const byFace = {} as Record<FaceId, AmbientFaceTarget>;
  for (let faceIndex = 0; faceIndex < FACE_IDS.length; faceIndex += 1) {
    const face = FACE_IDS[faceIndex]!;
    const encodedMembership = membershipSampler ? null : encodeGlyphSdfLayer(
      targets.byFace[face].positions,
      GLYPH_MEMBERSHIP_SIZE,
    );
    const positions = new Float32Array(pointCount * 3);
    const membership = new Float32Array(pointCount);
    for (let pointIndex = 0; pointIndex < pointCount; pointIndex += 1) {
      const localIndex = pointIndex * 2;
      const baseX = localPositions[localIndex]!;
      const baseY = localPositions[localIndex + 1]!;
      const [x, y] = warpFieldPoint(baseX, baseY, faceIndex, normalizedSeed);
      const normalNoise = hashUnit(
        normalizedSeed ^ Math.imul(faceIndex + 1, 0x1f123bb5),
        pointIndex,
      );
      const normalOffset = (normalNoise * 2 - 1) * NORMAL_THICKNESS;
      const mapped = mapGlyphPointToFace(face, x, y, normalOffset);
      const positionIndex = pointIndex * 3;
      positions[positionIndex] = mapped[0];
      positions[positionIndex + 1] = mapped[1];
      positions[positionIndex + 2] = mapped[2];
      membership[pointIndex] = membershipSampler ? membershipSampler(face, x, y) : sampleMembership(encodedMembership!, x, y);
    }
    byFace[face] = { positions, membership };
  }

  const structuralArrays = [
    fieldUv,
    sizeNoise,
    activation,
    paletteNoise,
    galaxyAffinity,
  ];
  const stateArrays = FACE_IDS.flatMap((face) => [
    byFace[face].positions,
    byFace[face].membership,
  ]);
  return {
    seed: normalizedSeed,
    pointCount,
    byFace,
    fieldUv,
    sizeNoise,
    activation,
    paletteNoise,
    galaxyAffinity,
    structuralHash: hashFloatArrays(structuralArrays),
    layoutHash: hashFloatArrays([...structuralArrays, ...stateArrays]),
  };
}

export function blendAmbientPositions(
  targets: AmbientTargetData,
  weights: FaceWeights,
): Float32Array {
  const output = new Float32Array(targets.pointCount * 3);
  for (let faceIndex = 0; faceIndex < FACE_IDS.length; faceIndex += 1) {
    const source = targets.byFace[FACE_IDS[faceIndex]!].positions;
    const weight = weights[faceIndex]!;
    for (let index = 0; index < output.length; index += 1) {
      output[index] = output[index]! + source[index]! * weight;
    }
  }
  return output;
}

export function blendAmbientMembership(
  targets: AmbientTargetData,
  weights: FaceWeights,
): Float32Array {
  const output = new Float32Array(targets.pointCount);
  for (let faceIndex = 0; faceIndex < FACE_IDS.length; faceIndex += 1) {
    const source = targets.byFace[FACE_IDS[faceIndex]!].membership;
    const weight = weights[faceIndex]!;
    for (let index = 0; index < output.length; index += 1) {
      output[index] = output[index]! + source[index]! * weight;
    }
  }
  return output;
}
