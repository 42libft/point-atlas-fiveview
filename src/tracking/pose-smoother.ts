import * as THREE from "three";

export type TrackedPoseSmootherSnapshot = Readonly<{
  initialized: boolean;
  updateCount: number;
  heldTranslationCount: number;
  heldRotationCount: number;
  lastNormalizedTranslationError: number;
  lastRotationErrorRadians: number;
}>;

type TrackedPoseSmootherOptions = Readonly<{
  translationHalfLifeMs: number;
  rotationHalfLifeMs: number;
  scaleHalfLifeMs: number;
  translationDeadband: number;
  rotationDeadbandRadians: number;
  scaleDeadband: number;
  maximumDeltaMs: number;
}>;

const DEFAULT_OPTIONS: TrackedPoseSmootherOptions = Object.freeze({
  translationHalfLifeMs: 90,
  rotationHalfLifeMs: 110,
  scaleHalfLifeMs: 120,
  translationDeadband: 0.0012,
  rotationDeadbandRadians: THREE.MathUtils.degToRad(0.14),
  scaleDeadband: 0.001,
  maximumDeltaMs: 100,
});

function smoothingAlpha(deltaMs: number, halfLifeMs: number): number {
  return 1 - Math.pow(2, -deltaMs / halfLifeMs);
}

function smoothstep(edge0: number, edge1: number, value: number): number {
  const unit = THREE.MathUtils.clamp((value - edge0) / (edge1 - edge0), 0, 1);
  return unit * unit * (3 - 2 * unit);
}

function responsiveAlpha(
  base: number,
  error: number,
  responseStart: number,
  responseFull: number,
): number {
  const response = smoothstep(responseStart, responseFull, error);
  return base + (1 - base) * response * 0.72;
}

function averageScale(scale: THREE.Vector3): number {
  return Math.max((Math.abs(scale.x) + Math.abs(scale.y) + Math.abs(scale.z)) / 3, 1e-6);
}

/**
 * Applies a second, rigid-pose smoothing stage after MindAR's element-wise
 * matrix filter. Small pose noise is held inside a deadband, while real camera
 * movement receives an adaptive response boost so the artwork keeps following
 * the printed page instead of appearing frozen.
 */
export class TrackedPoseSmoother {
  private readonly options: TrackedPoseSmootherOptions;
  private readonly position = new THREE.Vector3();
  private readonly rotation = new THREE.Quaternion();
  private readonly scale = new THREE.Vector3(1, 1, 1);
  private readonly rawPosition = new THREE.Vector3();
  private readonly rawRotation = new THREE.Quaternion();
  private readonly rawScale = new THREE.Vector3();
  private initialized = false;
  private previousTimestampMs = 0;
  private updateCount = 0;
  private heldTranslationCount = 0;
  private heldRotationCount = 0;
  private lastNormalizedTranslationError = 0;
  private lastRotationErrorRadians = 0;

  constructor(options: Partial<TrackedPoseSmootherOptions> = {}) {
    this.options = Object.freeze({ ...DEFAULT_OPTIONS, ...options });
  }

  reset(): void {
    this.initialized = false;
    this.previousTimestampMs = 0;
    this.lastNormalizedTranslationError = 0;
    this.lastRotationErrorRadians = 0;
  }

  update(object: THREE.Object3D, timestampMs: number): void {
    object.matrix.decompose(this.rawPosition, this.rawRotation, this.rawScale);
    this.rawRotation.normalize();

    if (!this.initialized || !Number.isFinite(timestampMs)) {
      this.position.copy(this.rawPosition);
      this.rotation.copy(this.rawRotation);
      this.scale.copy(this.rawScale);
      this.initialized = true;
      this.previousTimestampMs = Number.isFinite(timestampMs) ? timestampMs : 0;
      this.compose(object);
      this.updateCount += 1;
      return;
    }

    const deltaMs = THREE.MathUtils.clamp(
      timestampMs - this.previousTimestampMs,
      0,
      this.options.maximumDeltaMs,
    );
    this.previousTimestampMs = timestampMs;
    if (deltaMs <= 0) {
      this.compose(object);
      return;
    }

    const referenceScale = averageScale(this.rawScale);
    const translationError = this.position.distanceTo(this.rawPosition) / referenceScale;
    const rotationError = this.rotation.angleTo(this.rawRotation);
    const scaleError = this.scale.distanceTo(this.rawScale) / referenceScale;
    this.lastNormalizedTranslationError = translationError;
    this.lastRotationErrorRadians = rotationError;

    if (translationError > this.options.translationDeadband) {
      const alpha = responsiveAlpha(
        smoothingAlpha(deltaMs, this.options.translationHalfLifeMs),
        translationError,
        0.004,
        0.06,
      );
      this.position.lerp(this.rawPosition, alpha);
    } else {
      this.heldTranslationCount += 1;
    }

    if (rotationError > this.options.rotationDeadbandRadians) {
      const alpha = responsiveAlpha(
        smoothingAlpha(deltaMs, this.options.rotationHalfLifeMs),
        rotationError,
        THREE.MathUtils.degToRad(0.7),
        THREE.MathUtils.degToRad(12),
      );
      this.rotation.slerp(this.rawRotation, alpha).normalize();
    } else {
      this.heldRotationCount += 1;
    }

    if (scaleError > this.options.scaleDeadband) {
      const alpha = responsiveAlpha(
        smoothingAlpha(deltaMs, this.options.scaleHalfLifeMs),
        scaleError,
        0.003,
        0.04,
      );
      this.scale.lerp(this.rawScale, alpha);
    }

    this.compose(object);
    this.updateCount += 1;
  }

  getSnapshot(): TrackedPoseSmootherSnapshot {
    return {
      initialized: this.initialized,
      updateCount: this.updateCount,
      heldTranslationCount: this.heldTranslationCount,
      heldRotationCount: this.heldRotationCount,
      lastNormalizedTranslationError: this.lastNormalizedTranslationError,
      lastRotationErrorRadians: this.lastRotationErrorRadians,
    };
  }

  private compose(object: THREE.Object3D): void {
    object.matrix.compose(this.position, this.rotation, this.scale);
    object.matrixWorldNeedsUpdate = true;
  }
}

