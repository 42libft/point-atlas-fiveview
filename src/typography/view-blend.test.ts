import { describe, expect, it } from "vitest";
import {
  FACE_IDS,
  FACE_NORMALS,
  computeViewBlend,
  type FaceWeights,
  type Vector3Tuple,
} from "./view-blend";

function expectWeights(actual: FaceWeights, expected: readonly number[]): void {
  expected.forEach((weight, index) => {
    expect(actual[index]).toBeCloseTo(weight, 12);
  });
}

describe("computeViewBlend", () => {
  it("maps each face normal to its exact one-hot typography state", () => {
    FACE_IDS.forEach((face, faceIndex) => {
      const blend = computeViewBlend(FACE_NORMALS[face]);
      const expected = FACE_IDS.map((_, index) => (index === faceIndex ? 1 : 0));

      expectWeights(blend.weights, expected);
      expect(blend.dominant).toBe(face);
      expect(blend.boundaryEnergy).toBeCloseTo(0, 12);
    });
  });

  it("gives two adjacent faces equal weight on their boundary", () => {
    const blend = computeViewBlend([1, 0, 1]);

    expectWeights(blend.weights, [0, 0.5, 0.5, 0, 0]);
    expect(blend.boundaryEnergy).toBeCloseTo(0.5, 12);
  });

  it("gives the three meeting faces one third each at a cube corner", () => {
    const blend = computeViewBlend([1, 1, 1]);

    expectWeights(blend.weights, [1 / 3, 1 / 3, 1 / 3, 0, 0]);
    expect(blend.boundaryEnergy).toBeCloseTo(2 / 3, 12);
  });

  it("always returns normalized, nonnegative, deterministic weights", () => {
    const directions: Vector3Tuple[] = [
      [0.2, 0.7, 0.4],
      [-4, 2, 9],
      [5, 3, -7],
      [-0.8, 0.1, -0.2],
    ];

    directions.forEach((direction) => {
      const first = computeViewBlend(direction, 1.35);
      const second = computeViewBlend(direction, 1.35);

      expect(first).toEqual(second);
      expect(first.weights.reduce((sum, weight) => sum + weight, 0)).toBeCloseTo(1, 12);
      first.weights.forEach((weight) => {
        expect(Number.isFinite(weight)).toBe(true);
        expect(weight).toBeGreaterThanOrEqual(0);
      });
      expect(first.boundaryEnergy).toBeGreaterThanOrEqual(0);
      expect(first.boundaryEnergy).toBeLessThanOrEqual(1);
    });
  });

  it("falls back to the top view for missing or non-finite directions", () => {
    const invalidDirections: Vector3Tuple[] = [
      [0, 0, 0],
      [0, -1, 0],
      [Number.NaN, 1, 0],
      [Number.POSITIVE_INFINITY, 0, 1],
    ];

    invalidDirections.forEach((direction) => {
      expect(computeViewBlend(direction)).toEqual({
        weights: [1, 0, 0, 0, 0],
        dominant: "top",
        boundaryEnergy: 0,
      });
    });
  });

  it("accepts Three.js-compatible vector objects without importing Three.js", () => {
    const blend = computeViewBlend({ x: -1, y: 0, z: 0 });

    expectWeights(blend.weights, [0, 0, 0, 0, 1]);
    expect(blend.dominant).toBe("left");
  });
});
