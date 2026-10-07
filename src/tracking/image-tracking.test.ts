import { describe, expect, it } from "vitest";
import { IMAGE_TRACKING_OPTIONS } from "./image-tracking";

describe("physical image tracking configuration", () => {
  it("uses a deliberately damped MindAR filter before rigid-pose smoothing", () => {
    expect(IMAGE_TRACKING_OPTIONS).toEqual({
      filterMinCF: 0.001,
      filterBeta: 2,
      warmupTolerance: 4,
      missTolerance: 7,
    });
    expect(IMAGE_TRACKING_OPTIONS.filterBeta).toBeLessThan(12);
  });
});

