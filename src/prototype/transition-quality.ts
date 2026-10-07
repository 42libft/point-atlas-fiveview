import type { AmbientTargetData } from '../typography-ambient/ambient-layout';
import { computeViewBlend, FACE_IDS, type FaceWeights, type Vector3Like } from '../typography/view-blend';

/** CPU diagnostic matching the current vertex shader, not a rendered image. */
export function ambientShapeWeights(direction: Vector3Like): {
  weights: FaceWeights;
  boundaryEnergy: number;
} {
  const blend = computeViewBlend(direction, 1.35);
  const powers = blend.weights.map(weight => weight ** 2.15);
  const total = Math.max(0.000001, powers.reduce((sum, value) => sum + value, 0));
  return {
    weights: powers.map(weight => weight / total) as unknown as FaceWeights,
    boundaryEnergy: blend.boundaryEnergy,
  };
}

const CENTERS = [[0, .78, 0], [0, .39, .72], [.72, .39, 0], [0, .39, -.72], [-.72, .39, 0]] as const;

/** Includes spread and the shader's boundary curl. Visibility/occlusion is not simulated. */
export function evaluateAmbientTransition(
  data: AmbientTargetData,
  direction: Vector3Like,
  spread = .87,
): { positions: Float32Array; membership: Float32Array; weights: FaceWeights; boundaryEnergy: number } {
  const { weights, boundaryEnergy } = ambientShapeWeights(direction);
  const positions = new Float32Array(data.pointCount * 3);
  const membership = new Float32Array(data.pointCount);
  for (let point = 0; point < data.pointCount; point++) {
    const p = [0, 0, 0];
    let signal = 0;
    FACE_IDS.forEach((face, f) => {
      signal += data.byFace[face].membership[point]! * weights[f]!;
      for (let axis = 0; axis < 3; axis++) {
        const center = CENTERS[f]![axis]!;
        p[axis] = p[axis]! + (center + (data.byFace[face].positions[point * 3 + axis]! - center) * spread) * weights[f]!;
      }
    });
    const noise = data.paletteNoise[point]!;
    const phase = noise * 6.2831853 + data.fieldUv[point * 2]! * 13.4 + data.fieldUv[point * 2 + 1]! * 9.1;
    const curl = [Math.sin(phase + p[1]! * 7), Math.cos(phase * 1.17 + p[0]! * 5 - p[2]! * 3), Math.sin(phase * .83 + p[2]! * 6)];
    const amount = boundaryEnergy ** 2 * (.018 + .040 * boundaryEnergy) * (.42 + .58 * noise);
    for (let axis = 0; axis < 3; axis++) positions[point * 3 + axis] = p[axis]! + curl[axis]! * amount;
    membership[point] = signal;
  }
  return { positions, membership, weights, boundaryEnergy };
}

export function displacementSummary(a: Float32Array, b: Float32Array): { rms: number; max: number } {
  if (a.length !== b.length || a.length % 3 !== 0) throw new RangeError('Expected equally sized XYZ arrays.');
  let sum = 0, max = 0;
  for (let i = 0; i < a.length; i += 3) {
    const distance = Math.hypot(a[i]! - b[i]!, a[i + 1]! - b[i + 1]!, a[i + 2]! - b[i + 2]!);
    sum += distance ** 2;
    max = Math.max(max, distance);
  }
  return { rms: a.length ? Math.sqrt(sum / (a.length / 3)) : 0, max };
}
