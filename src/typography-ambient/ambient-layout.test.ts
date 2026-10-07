import { describe, expect, it } from "vitest";
import type { GlyphTargetInput } from "../typography/target-input";
import { FACE_IDS, type FaceId, type FaceWeights } from "../typography/view-blend";
import {
  blendAmbientMembership,
  blendAmbientPositions,
  createAmbientTargetData,
  galaxyVisibilityProbability,
} from "./ambient-layout";

function syntheticTargets(variant = 0): GlyphTargetInput {
  const predicates: Array<(x: number, y: number) => boolean> = [
    (x, y) => Math.abs(Math.hypot(x, y * 1.5) - 0.62) < 0.07,
    (x, y) => Math.abs(x) < 0.12 || (Math.abs(y) > 0.25 && Math.abs(x) < 0.72),
    (x, y) => Math.abs(x) + Math.abs(y) * 1.6 > 0.78 && Math.abs(x) + Math.abs(y) * 1.6 < 0.94,
    (x, y) => x > -0.55 && x < 0.48 && Math.abs(y - (0.48 - x * 0.62)) < 0.07,
    (x, y) => Math.abs(x) < 0.67 && Math.abs(y) < 0.40 && (Math.abs(x) > 0.55 || Math.abs(y) > 0.30),
  ];
  const byFace = {} as Record<FaceId, { positions: Float32Array }>;
  FACE_IDS.forEach((face, faceIndex) => {
    const points: number[] = [];
    for (let yi = 0; yi <= 30; yi += 1) {
      const y = -0.48 + yi * 0.032;
      for (let xi = 0; xi <= 58; xi += 1) {
        const x = -0.95 + xi * 0.032;
        const isInk = variant === 0
          ? predicates[faceIndex]!(x, y)
          : x * x + y * y < 0.21 + faceIndex * 0.008;
        if (isInk) points.push(x, y);
      }
    }
    byFace[face] = { positions: new Float32Array(points) };
  });
  return { byFace };
}

function componentRange(values: Float32Array, component: 0 | 1 | 2): number {
  let minimum = Number.POSITIVE_INFINITY;
  let maximum = Number.NEGATIVE_INFINITY;
  for (let index = component; index < values.length; index += 3) {
    minimum = Math.min(minimum, values[index]!);
    maximum = Math.max(maximum, values[index]!);
  }
  return maximum - minimum;
}

function conditionalMean(
  values: Float32Array,
  membership: Float32Array,
  predicate: (value: number) => boolean,
): number {
  let sum = 0;
  let count = 0;
  for (let index = 0; index < values.length; index += 1) {
    if (!predicate(membership[index]!)) continue;
    sum += values[index]!;
    count += 1;
  }
  expect(count).toBeGreaterThan(80);
  return sum / count;
}

describe("five-direction ambient particle field", () => {
  it("is deterministic for a seed and changes with a different seed", () => {
    const targets = syntheticTargets();
    const first = createAmbientTargetData(targets, 42, 384);
    const second = createAmbientTargetData(targets, 42, 384);
    const changed = createAmbientTargetData(targets, 43, 384);
    expect(second.layoutHash).toBe(first.layoutHash);
    expect(second.structuralHash).toBe(first.structuralHash);
    expect(changed.structuralHash).not.toBe(first.structuralHash);
    expect(second.byFace.top.positions).toEqual(first.byFace.top.positions);
  });

  it("keeps its structural particle population independent from input geometry", () => {
    const first = createAmbientTargetData(syntheticTargets(), 42, 512);
    const changedInput = createAmbientTargetData(syntheticTargets(1), 42, 512);
    expect(changedInput.structuralHash).toBe(first.structuralHash);
    expect(changedInput.fieldUv).toEqual(first.fieldUv);
    expect(changedInput.sizeNoise).toEqual(first.sizeNoise);
    expect(changedInput.activation).toEqual(first.activation);
    expect(changedInput.layoutHash).not.toBe(first.layoutHash);
  });

  it("keeps thickness on every canonical face instead of creating a zero-depth plate", () => {
    const data = createAmbientTargetData(syntheticTargets(), 42, 512);
    expect(componentRange(data.byFace.top.positions, 1)).toBeGreaterThan(0.1);
    expect(componentRange(data.byFace.front.positions, 2)).toBeGreaterThan(0.1);
    expect(componentRange(data.byFace.right.positions, 0)).toBeGreaterThan(0.1);
    expect(componentRange(data.byFace.back.positions, 2)).toBeGreaterThan(0.1);
    expect(componentRange(data.byFace.left.positions, 0)).toBeGreaterThan(0.1);
  });

  it("interpolates one particle identity for position and input membership", () => {
    const data = createAmbientTargetData(syntheticTargets(), 42, 512);
    const weights: FaceWeights = [0.5, 0.5, 0, 0, 0];
    const positions = blendAmbientPositions(data, weights);
    const membership = blendAmbientMembership(data, weights);
    for (let index = 0; index < 48; index += 1) {
      expect(positions[index]).toBeCloseTo(
        (data.byFace.top.positions[index]! + data.byFace.front.positions[index]!) * 0.5,
        6,
      );
    }
    for (let index = 0; index < 24; index += 1) {
      expect(membership[index]).toBeCloseTo(
        (data.byFace.top.membership[index]! + data.byFace.front.membership[index]!) * 0.5,
        6,
      );
    }
  });

  it("returns exact one-hot target position and membership", () => {
    const data = createAmbientTargetData(syntheticTargets(), 42, 256);
    expect(blendAmbientPositions(data, [0, 0, 1, 0, 0])).toEqual(
      data.byFace.right.positions,
    );
    expect(blendAmbientMembership(data, [0, 0, 1, 0, 0])).toEqual(
      data.byFace.right.membership,
    );
  });

  it("does not encode the input into particle size or activation", () => {
    const data = createAmbientTargetData(syntheticTargets(), 42, 8_192);
    const membership = data.byFace.top.membership;
    const insideSize = conditionalMean(data.sizeNoise, membership, (value) => value > 0.8);
    const outsideSize = conditionalMean(data.sizeNoise, membership, (value) => value < 0.2);
    const insideActivation = conditionalMean(
      data.activation,
      membership,
      (value) => value > 0.8,
    );
    const outsideActivation = conditionalMean(
      data.activation,
      membership,
      (value) => value < 0.2,
    );
    expect(Math.abs(insideSize - outsideSize)).toBeLessThan(0.055);
    expect(Math.abs(insideActivation - outsideActivation)).toBeLessThan(0.035);
  });

  it("keeps the field frameless while concentration tightens its faint outskirts", () => {
    expect(galaxyVisibilityProbability(0, 0.84, 0)).toBe(0);
    expect(galaxyVisibilityProbability(1, 0.84, 0)).toBeCloseTo(0.84, 8);
    expect(galaxyVisibilityProbability(1, 0.84, 0.9)).toBeCloseTo(0.84, 8);
    expect(galaxyVisibilityProbability(0.2, 0.84, 0.9)).toBeLessThan(
      galaxyVisibilityProbability(0.8, 0.84, 0.9),
    );
    expect(galaxyVisibilityProbability(0.2, 0.84, 0.9)).toBeLessThan(
      galaxyVisibilityProbability(0.2, 0.84, 0),
    );
  });
});
