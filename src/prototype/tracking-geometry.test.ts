import { describe, expect, it } from 'vitest';
import { raiseViewingDirection, targetProjectionGeometry } from './tracking-geometry';

describe('targetProjectionGeometry', () => {
  it('distinguishes target incidence from the elevated artwork sightline', () => {
    // Camera at artwork-center height can read a side without being edge-on to the paper.
    const paper = targetProjectionGeometry([0, .95, 4.7])!;
    const artwork = targetProjectionGeometry([0, 0, 4.7])!;
    expect(paper.angleDeg).toBeCloseTo(78.57, 2);
    expect(artwork.angleDeg).toBe(90);
  });
  it('handles editor +Y and MindAR target +Z coordinates consistently', () => {
    expect(targetProjectionGeometry([0, 5, 0])).toEqual({ angleDeg: 0, faceOnRatio: 1, frontFacing: true });
    expect(targetProjectionGeometry({ x: 0, y: 0, z: 20 }, [0, 0, 1])).toEqual({ angleDeg: 0, faceOnRatio: 1, frontFacing: true });
    expect(targetProjectionGeometry([3, 0, 0])!.angleDeg).toBe(90);
    expect(targetProjectionGeometry([0, 1, Math.sqrt(3)])!.faceOnRatio).toBeCloseTo(.5);
  });
  it('reports the back side explicitly, and rejects unknown geometry', () => {
    expect(targetProjectionGeometry([0, -1, 0])).toEqual({ angleDeg: 0, faceOnRatio: 1, frontFacing: false });
    for (const invalid of [[0, 0, 0], [NaN, 1, 0], [0, Infinity, 0]] as const) {
      expect(targetProjectionGeometry(invalid)).toBeNull();
    }
    expect(targetProjectionGeometry([0, 1, 0], [0, 0, 0])).toBeNull();
  });
});

describe('raiseViewingDirection', () => {
  it('preserves the default and raises each side without changing its azimuth', () => {
    expect(raiseViewingDirection([0, 0, 4])).toEqual([0, 0, 1]);
    const raised = raiseViewingDirection([1, 0, -1], 35)!;
    expect(Math.hypot(...raised)).toBeCloseTo(1);
    expect(raised[0]).toBeCloseTo(-raised[2]);
    expect(Math.asin(raised[1]) * 180 / Math.PI).toBeCloseTo(35);
    expect(targetProjectionGeometry(raised)!.angleDeg).toBeCloseTo(55);
  });
  it('does not fabricate an azimuth at poles or wrap through them', () => {
    expect(raiseViewingDirection([0, 1, 0], 35)).toEqual([0, 1, 0]);
    expect(raiseViewingDirection([1, 1, 0], 90)![1]).toBeCloseTo(1);
    expect(raiseViewingDirection([0, 0, 0], 35)).toBeNull();
    expect(raiseViewingDirection([0, 0, 1], NaN)).toBeNull();
  });
});
