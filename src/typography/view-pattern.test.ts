import { describe, expect, it } from "vitest";
import { deriveViewPatternState } from "./view-pattern";
import type { FaceWeights } from "./view-blend";

const TOP: FaceWeights = [1, 0, 0, 0, 0];
const FRONT: FaceWeights = [0, 1, 0, 0, 0];
const TOP_FRONT: FaceWeights = [0.5, 0.5, 0, 0, 0];

describe("deriveViewPatternState", () => {
  it("recreates the exact same field after A → B → A", () => {
    const firstA = deriveViewPatternState(42, TOP, 0);
    const stateB = deriveViewPatternState(42, FRONT, 0);
    const secondA = deriveViewPatternState(42, TOP, 0);

    expect(stateB).not.toEqual(firstA);
    expect(secondA).toEqual(firstA);
  });

  it("uses the session seed once without changing view geometry", () => {
    const seed42 = deriveViewPatternState(42, TOP, 0);
    const seed43 = deriveViewPatternState(43, TOP, 0);

    expect(seed43.phase).not.toBe(seed42.phase);
    expect(seed43.lens).toEqual(seed42.lens);
  });

  it("localizes boil, curl, and stretch to intermediate states", () => {
    const canonical = deriveViewPatternState(42, TOP, 0);
    const boundary = deriveViewPatternState(42, TOP_FRONT, 0.5);

    expect(boundary.cellBoilMix).toBeGreaterThan(canonical.cellBoilMix);
    expect(boundary.cellStretchMix).toBeGreaterThan(canonical.cellStretchMix);
    expect(boundary.curlMix).toBeGreaterThan(canonical.curlMix);
    expect(boundary.skinMix).toBeLessThan(canonical.skinMix);
  });
});
