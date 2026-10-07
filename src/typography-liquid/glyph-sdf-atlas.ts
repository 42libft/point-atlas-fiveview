import * as THREE from "three";
import type { GlyphTargetInput } from "../typography/target-input";
import { FACE_IDS, type FaceId, type Vector3Tuple } from "../typography/view-blend";

export const GLYPH_SDF_BOUNDS = Object.freeze({
  minX: -1.18,
  maxX: 1.18,
  minY: -0.57,
  maxY: 0.57,
});

export const DEFAULT_GLYPH_SDF_SIZE = 192;
const DISTANCE_RANGE_PIXELS = 24;
const DIAGONAL_DISTANCE = Math.SQRT2;

export type GlyphSdfAtlas = Readonly<{
  texture: THREE.DataArrayTexture;
  data: Uint8Array;
  size: number;
  layers: number;
  dispose: () => void;
}>;

function rasterizePoints(points: Float32Array, size: number): Uint8Array {
  const mask = new Uint8Array(size * size);
  const width = GLYPH_SDF_BOUNDS.maxX - GLYPH_SDF_BOUNDS.minX;
  const height = GLYPH_SDF_BOUNDS.maxY - GLYPH_SDF_BOUNDS.minY;

  for (let index = 0; index < points.length; index += 2) {
    const normalizedX = (points[index]! - GLYPH_SDF_BOUNDS.minX) / width;
    const normalizedY = (points[index + 1]! - GLYPH_SDF_BOUNDS.minY) / height;
    const centerX = Math.round(normalizedX * (size - 1));
    const centerY = Math.round(normalizedY * (size - 1));
    for (let offsetY = -1; offsetY <= 1; offsetY += 1) {
      const y = centerY + offsetY;
      if (y < 0 || y >= size) continue;
      for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
        const x = centerX + offsetX;
        if (x < 0 || x >= size) continue;
        mask[y * size + x] = 1;
      }
    }
  }
  return mask;
}
function chamferDistance(mask: Uint8Array, size: number, feature: 0 | 1): Float32Array {
  const distance = new Float32Array(mask.length);
  const infinity = size * 4;
  for (let index = 0; index < mask.length; index += 1) {
    distance[index] = mask[index] === feature ? 0 : infinity;
  }

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const index = y * size + x;
      let value = distance[index]!;
      if (x > 0) value = Math.min(value, distance[index - 1]! + 1);
      if (y > 0) {
        value = Math.min(value, distance[index - size]! + 1);
        if (x > 0) value = Math.min(value, distance[index - size - 1]! + DIAGONAL_DISTANCE);
        if (x + 1 < size) {
          value = Math.min(value, distance[index - size + 1]! + DIAGONAL_DISTANCE);
        }
      }
      distance[index] = value;
    }
  }

  for (let y = size - 1; y >= 0; y -= 1) {
    for (let x = size - 1; x >= 0; x -= 1) {
      const index = y * size + x;
      let value = distance[index]!;
      if (x + 1 < size) value = Math.min(value, distance[index + 1]! + 1);
      if (y + 1 < size) {
        value = Math.min(value, distance[index + size]! + 1);
        if (x > 0) value = Math.min(value, distance[index + size - 1]! + DIAGONAL_DISTANCE);
        if (x + 1 < size) {
          value = Math.min(value, distance[index + size + 1]! + DIAGONAL_DISTANCE);
        }
      }
      distance[index] = value;
    }
  }
  return distance;
}

export function encodeGlyphSdfLayer(points: Float32Array, size: number): Uint8Array {
  if (!Number.isInteger(size) || size < 32) {
    throw new Error(`Glyph SDF size must be an integer of at least 32; received ${size}.`);
  }
  const mask = rasterizePoints(points, size);
  const distanceToInk = chamferDistance(mask, size, 1);
  const distanceToVoid = chamferDistance(mask, size, 0);
  const encoded = new Uint8Array(mask.length);

  for (let index = 0; index < mask.length; index += 1) {
    const signedDistance = mask[index]
      ? Math.min(distanceToVoid[index]!, DISTANCE_RANGE_PIXELS)
      : -Math.min(distanceToInk[index]!, DISTANCE_RANGE_PIXELS);
    const normalized = 0.5 + signedDistance / (DISTANCE_RANGE_PIXELS * 2);
    encoded[index] = Math.round(Math.min(1, Math.max(0, normalized)) * 255);
  }
  return encoded;
}

export function createGlyphSdfAtlas(
  targets: GlyphTargetInput,
  size = DEFAULT_GLYPH_SDF_SIZE,
): GlyphSdfAtlas {
  const layerLength = size * size;
  const data = new Uint8Array(layerLength * FACE_IDS.length);
  FACE_IDS.forEach((face, layer) => {
    data.set(encodeGlyphSdfLayer(targets.byFace[face].positions, size), layer * layerLength);
  });

  const texture = new THREE.DataArrayTexture(data, size, size, FACE_IDS.length);
  texture.format = THREE.RedFormat;
  texture.type = THREE.UnsignedByteType;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.generateMipmaps = false;
  texture.unpackAlignment = 1;
  texture.colorSpace = THREE.NoColorSpace;
  texture.name = "five-glyph-signed-distance-atlas";
  texture.needsUpdate = true;

  return {
    texture,
    data,
    size,
    layers: FACE_IDS.length,
    dispose: () => texture.dispose(),
  };
}

export function decodeGlyphSdf(value: number): number {
  return (value / 255 - 0.5) * 2;
}

/** CPU analogue of the five central shader projections, useful for QA/tests. */
export function mapVolumePointToGlyphPlane(
  face: FaceId,
  point: Vector3Tuple,
): readonly [number, number] {
  const [x, y, z] = point;
  switch (face) {
    case "top":
      return [x, -z];
    case "front":
      return [x, y];
    case "right":
      return [-z, y];
    case "back":
      return [-x, y];
    case "left":
      return [z, y];
  }
}
