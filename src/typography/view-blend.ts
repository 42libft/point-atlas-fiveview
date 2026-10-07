export const FACE_IDS = ["top", "front", "right", "back", "left"] as const;

export type FaceId = (typeof FACE_IDS)[number];
export type Vector3Tuple = readonly [x: number, y: number, z: number];
export type Vector3Like = Vector3Tuple | Readonly<{ x: number; y: number; z: number }>;
export type FaceWeights = readonly [
  top: number,
  front: number,
  right: number,
  back: number,
  left: number,
];

export const FACE_NORMALS: Readonly<Record<FaceId, Vector3Tuple>> = {
  top: [0, 1, 0],
  front: [0, 0, 1],
  right: [1, 0, 0],
  back: [0, 0, -1],
  left: [-1, 0, 0],
};

export type ViewBlend = {
  weights: FaceWeights;
  dominant: FaceId;
  boundaryEnergy: number;
};

const DEFAULT_SHARPNESS = 1.35;
const TOP_ONLY_WEIGHTS: FaceWeights = [1, 0, 0, 0, 0];

function components(direction: Vector3Like): Vector3Tuple {
  if (Array.isArray(direction)) {
    return [direction[0], direction[1], direction[2]];
  }
  const vector = direction as Readonly<{ x: number; y: number; z: number }>;
  return [vector.x, vector.y, vector.z];
}

function topOnlyBlend(): ViewBlend {
  return {
    weights: TOP_ONLY_WEIGHTS,
    dominant: "top",
    boundaryEnergy: 0,
  };
}

/**
 * Blends the five visible cube faces from an object-to-viewer direction.
 * The unsupported bottom direction falls back to the top view.
 */
export function computeViewBlend(
  direction: Vector3Like,
  sharpness = DEFAULT_SHARPNESS,
): ViewBlend {
  const [rawX, rawY, rawZ] = components(direction);
  const length = Math.hypot(rawX, rawY, rawZ);
  if (![rawX, rawY, rawZ, length].every(Number.isFinite) || length <= Number.EPSILON) {
    return topOnlyBlend();
  }

  const exponent = Number.isFinite(sharpness) && sharpness > 0 ? sharpness : DEFAULT_SHARPNESS;
  const x = rawX / length;
  const y = rawY / length;
  const z = rawZ / length;
  const scores = [
    Math.pow(Math.max(y, 0), exponent),
    Math.pow(Math.max(z, 0), exponent),
    Math.pow(Math.max(x, 0), exponent),
    Math.pow(Math.max(-z, 0), exponent),
    Math.pow(Math.max(-x, 0), exponent),
  ] as const;
  const total = scores.reduce((sum, score) => sum + score, 0);

  if (!Number.isFinite(total) || total <= Number.EPSILON) {
    return topOnlyBlend();
  }

  const weights: FaceWeights = [
    scores[0] / total,
    scores[1] / total,
    scores[2] / total,
    scores[3] / total,
    scores[4] / total,
  ];

  let dominantIndex = 0;
  for (let index = 1; index < weights.length; index += 1) {
    if (weights[index]! > weights[dominantIndex]!) dominantIndex = index;
  }

  const sumOfSquares = weights.reduce((sum, weight) => sum + weight * weight, 0);
  const boundaryEnergy = Math.min(1, Math.max(0, 1 - sumOfSquares));

  return {
    weights,
    dominant: FACE_IDS[dominantIndex]!,
    boundaryEnergy,
  };
}
