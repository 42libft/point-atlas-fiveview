import { describe, expect, it } from 'vitest';
import { createAmbientTargetData } from '../typography-ambient/ambient-layout';
import { FACE_IDS, FACE_NORMALS } from '../typography/view-blend';
import type { GlyphTargetInput } from '../typography/target-input';
import { ambientShapeWeights, displacementSummary, evaluateAmbientTransition } from './transition-quality';

const targets = { byFace: Object.fromEntries(FACE_IDS.map(face => [face, { positions: new Float32Array([-.5, 0, 0, 0, .5, 0]) }])) } as GlyphTargetInput;
const direction = (degrees: number) => [Math.sin(degrees * Math.PI / 180), 0, Math.cos(degrees * Math.PI / 180)] as const;

describe('CPU diagnostics for the inherited transition shader', () => {
  it('recovers exact target positions and membership at all canonical views with spread one', () => {
    const data = createAmbientTargetData(targets, 42, 96);
    for (const face of FACE_IDS) {
      const frame = evaluateAmbientTransition(data, FACE_NORMALS[face], 1);
      expect(frame.positions).toEqual(data.byFace[face].positions);
      expect(frame.membership).toEqual(data.byFace[face].membership);
      expect(frame.boundaryEnergy).toBe(0);
    }
  });
  it('matches the two-stage effective exponent and a half blend at 45 degrees', () => {
    const frame = ambientShapeWeights(direction(30));
    const expected = Math.sin(Math.PI / 6) ** 2.9025 / (Math.sin(Math.PI / 6) ** 2.9025 + Math.cos(Math.PI / 6) ** 2.9025);
    expect(frame.weights[2]).toBeCloseTo(expected, 12);
    expect(ambientShapeWeights(direction(45)).weights[1]).toBeCloseTo(.5, 12);
  });
  it('halves near-boundary displacement when the angular step halves, without changing point count', () => {
    const data = createAmbientTargetData(targets, 42, 96);
    const a = evaluateAmbientTransition(data, direction(45));
    const b = evaluateAmbientTransition(data, direction(46));
    const c = evaluateAmbientTransition(data, direction(45.5));
    const one = displacementSummary(a.positions, b.positions).max;
    const half = displacementSummary(a.positions, c.positions).max;
    expect(half / one).toBeGreaterThan(.49);
    expect(half / one).toBeLessThan(.51);
    expect(b.positions.length).toBe(data.pointCount * 3);
  });
});
