import type { Mask } from './model';
import { FACE_IDS, type FaceId } from '../typography/view-blend';

/** Coordinates are the pre-face-map glyph coordinates used by ambient-layout. */
export type RasterMembershipSampler = (face: FaceId, x: number, y: number) => number;

/**
 * Read the thresholded input directly, without point-to-SDF dilation. Scales
 * must be those already used to build each face's target positions: this
 * option changes membership only, not framing, point identity or geometry.
 */
export function createRasterMembershipSampler(
  masks: readonly Mask[],
  scales: readonly number[],
): RasterMembershipSampler {
  if (masks.length !== FACE_IDS.length || scales.length !== FACE_IDS.length) {
    throw new RangeError('Raster membership needs five masks and five scales.');
  }
  const byFace = {} as Record<FaceId, { mask: Mask; scale: number }>;
  FACE_IDS.forEach((face, index) => {
    const mask = masks[index]!;
    const scale = scales[index]!;
    if (!Number.isInteger(mask.size) || mask.size < 2 || mask.pixels.length !== mask.size ** 2) {
      throw new RangeError('Raster membership needs square masks with at least two pixels.');
    }
    if (!Number.isFinite(scale) || scale <= 0) {
      throw new RangeError('Raster membership scale must be finite and positive.');
    }
    byFace[face] = { mask, scale };
  });
  return (face, x, y) => {
    const { mask, scale } = byFace[face];
    const u = x / scale;
    const v = y / scale;
    if (!Number.isFinite(u) || !Number.isFinite(v) || Math.abs(u) > 1 || Math.abs(v) > 1) return 0;
    const px = (u + 1) * 0.5 * (mask.size - 1);
    const py = (1 - v) * 0.5 * (mask.size - 1);
    const x0 = Math.floor(px), y0 = Math.floor(py);
    const x1 = Math.min(mask.size - 1, x0 + 1), y1 = Math.min(mask.size - 1, y0 + 1);
    const tx = px - x0, ty = py - y0;
    // Match maskPoints' >127 threshold, including antialiased text masks.
    const bit = (cx: number, cy: number) => mask.pixels[cy * mask.size + cx]! > 127 ? 1 : 0;
    return (bit(x0, y0) * (1 - tx) + bit(x1, y0) * tx) * (1 - ty)
      + (bit(x0, y1) * (1 - tx) + bit(x1, y1) * tx) * ty;
  };
}
