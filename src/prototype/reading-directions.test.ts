import { describe, it, expect } from 'vitest';
import { Vector3 } from 'three';
import { FACE_IDS, computeViewBlend } from '../typography/view-blend';
import { readingDirection, readingBlendDirection } from './reading-directions';
describe('Raised reading ring', () => {
  it('keeps all five independent endpoints, including overhead', () => {
    for (const [index, face] of FACE_IDS.entries()) {
      const physical = readingDirection(face, true);
      const blend = computeViewBlend(readingBlendDirection(physical, true));
      expect(blend.weights[index]).toBeCloseTo(1, 10);
      if (face !== 'top') expect(physical.y).toBeCloseTo(Math.sin(35 * Math.PI / 180));
    }
  });
  it('preserves the existing default direction exactly', () => {
    const d = new Vector3(1, .4, 2);
    expect(readingBlendDirection(d, false)).toBe(d);
  });
  it('remains continuous and normalized across the new reading ring', () => {
    const at = (deg: number) => readingBlendDirection(new Vector3(0, Math.sin(deg*Math.PI/180), Math.cos(deg*Math.PI/180)), true);
    expect(at(35.001).distanceTo(at(34.999))).toBeLessThan(.0001);
    expect(at(65).length()).toBeCloseTo(1);
    expect(at(89.99).y).toBeGreaterThan(.999);
  });
});
