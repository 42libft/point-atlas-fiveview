import { describe, expect, it } from 'vitest';
import { createRasterMembershipSampler } from './input-sampling';
import type { Mask } from './model';
import { FACE_IDS } from '../typography/view-blend';
import { maskPoints } from './model';
import { createAmbientTargetData } from '../typography-ambient/ambient-layout';
import type { GlyphTargetInput } from '../typography/target-input';

const fixture = (): Mask => {
  const pixels = new Uint8Array(17 ** 2);
  // A one-pixel asymmetric hook, a hollow square, and a disconnected dot.
  for (let y = 2; y < 14; y++) pixels[y * 17 + 2] = 255;
  for (let x = 2; x < 7; x++) pixels[13 * 17 + x] = 255;
  for (let y = 4; y <= 8; y++) for (let x = 9; x <= 13; x++) {
    if (x === 9 || x === 13 || y === 4 || y === 8) pixels[y * 17 + x] = 255;
  }
  pixels[14 * 17 + 14] = 255;
  return { size: 17, pixels, label: 'synthetic' };
};

describe('optional direct raster membership', () => {
  it('preserves every input pixel centre, holes, and disconnected components on all five faces', () => {
    const mask = fixture(), scale = .71;
    const read = createRasterMembershipSampler(FACE_IDS.map(() => mask), FACE_IDS.map(() => scale));
    for (const face of FACE_IDS) for (let y = 0; y < 17; y++) for (let x = 0; x < 17; x++) {
      expect(read(face, (x / 16 * 2 - 1) * scale, (1 - y / 16 * 2) * scale)).toBeCloseTo(mask.pixels[y * 17 + x]! / 255, 12);
    }
  });
  it('interpolates at the source pixel spacing without a three-pixel dilation', () => {
    const mask = fixture();
    const read = createRasterMembershipSampler(FACE_IDS.map(() => mask), FACE_IDS.map(() => 1));
    expect(read('front', 2 / 16 * 2 - 1, 1 - 10 / 16 * 2)).toBe(1);
    expect(read('front', 2.5 / 16 * 2 - 1, 1 - 10 / 16 * 2)).toBe(.5);
    expect(read('front', 3 / 16 * 2 - 1, 1 - 10 / 16 * 2)).toBe(0);
    expect(read('front', 11 / 16 * 2 - 1, 1 - 6 / 16 * 2)).toBe(0);
  });
  it('uses the existing threshold and per-face scale without recentering', () => {
    const masks = FACE_IDS.map(fixture);
    masks[0]!.pixels[2 * 17 + 2] = 127;
    masks[1]!.pixels[2 * 17 + 2] = 128;
    const read = createRasterMembershipSampler(masks, [1, 2, 3, 4, 5]);
    expect(read('top', -.75, .75)).toBe(0);
    expect(read('front', -1.5, 1.5)).toBe(1);
    expect(read('right', -2.25, 2.25)).toBe(1);
  });
  it('rejects invalid configurations and returns zero outside the input', () => {
    const masks = FACE_IDS.map(fixture), read = createRasterMembershipSampler(masks, [1, 1, 1, 1, 1]);
    expect(read('top', 2, 0)).toBe(0);
    expect(read('front', Number.NaN, 0)).toBe(0);
    expect(() => createRasterMembershipSampler(masks, [1, 0, 1, 1, 1])).toThrow(RangeError);
    expect(() => createRasterMembershipSampler([], [])).toThrow(RangeError);
  });
  it('integrates as membership only, preserving the inherited default, geometry, and structural arrays', () => {
    const masks = FACE_IDS.map(fixture), scales = FACE_IDS.map(() => .5);
    const targets = { byFace: Object.fromEntries(FACE_IDS.map((face, f) => [face, { positions: Float32Array.from(maskPoints(masks[f]!, 1024).flatMap(([x, y]) => [x * scales[f]!, y * scales[f]!])) }])) } as GlyphTargetInput;
    const legacy = createAmbientTargetData(targets, 42, 2048);
    const explicitDefault = createAmbientTargetData(targets, 42, 2048, undefined);
    const raster = createAmbientTargetData(targets, 42, 2048, createRasterMembershipSampler(masks, scales));
    expect(explicitDefault).toEqual(legacy);
    expect(raster.structuralHash).toBe(legacy.structuralHash);
    expect(raster.layoutHash).not.toBe(legacy.layoutHash);
    for (const face of FACE_IDS) {
      expect(raster.byFace[face].positions).toEqual(legacy.byFace[face].positions);
      expect(raster.byFace[face].membership.every(value => Number.isFinite(value) && value >= 0 && value <= 1)).toBe(true);
    }
    expect(raster.activation).toEqual(legacy.activation);
    expect(raster.galaxyAffinity).toEqual(legacy.galaxyAffinity);
  });
});
