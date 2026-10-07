import * as THREE from "three";
import { describe, expect, it } from "vitest";
import { TrackedPoseSmoother } from "./pose-smoother";

function setPose(
  object: THREE.Object3D,
  position: THREE.Vector3,
  rotation: THREE.Quaternion,
  scale = new THREE.Vector3(720, 720, 720),
): void {
  object.matrix.compose(position, rotation, scale);
}

function readPose(object: THREE.Object3D): {
  position: THREE.Vector3;
  rotation: THREE.Quaternion;
  scale: THREE.Vector3;
} {
  const position = new THREE.Vector3();
  const rotation = new THREE.Quaternion();
  const scale = new THREE.Vector3();
  object.matrix.decompose(position, rotation, scale);
  return { position, rotation, scale };
}

describe("TrackedPoseSmoother", () => {
  it("attenuates alternating moderate pose noise instead of only relying on the deadband", () => {
    const object = new THREE.Group();
    const smoother = new TrackedPoseSmoother();
    const rotation = new THREE.Quaternion();
    setPose(object, new THREE.Vector3(), rotation);
    smoother.update(object, 0);
    const filtered: number[] = [];
    for (let frame = 1; frame <= 90; frame += 1) {
      const rawJitter = frame % 2 === 0 ? 4 : -4;
      setPose(object, new THREE.Vector3(rawJitter, 0, 0), rotation);
      smoother.update(object, frame * 16.67);
      if (frame > 30) filtered.push(readPose(object).position.x);
    }
    expect(Math.max(...filtered.map(Math.abs))).toBeLessThan(1.2);
  });

  it("holds sub-threshold translation and rotation noise without freezing real motion", () => {
    const object = new THREE.Group();
    const smoother = new TrackedPoseSmoother();
    const baseRotation = new THREE.Quaternion();
    setPose(object, new THREE.Vector3(10, 20, 30), baseRotation);
    smoother.update(object, 0);

    for (let frame = 1; frame <= 12; frame += 1) {
      const sign = frame % 2 === 0 ? 1 : -1;
      const jitterRotation = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 0, 1),
        THREE.MathUtils.degToRad(0.08 * sign),
      );
      setPose(
        object,
        new THREE.Vector3(10 + 0.35 * sign, 20 - 0.25 * sign, 30),
        jitterRotation,
      );
      smoother.update(object, frame * 16.67);
    }

    const held = readPose(object);
    expect(held.position.distanceTo(new THREE.Vector3(10, 20, 30))).toBeLessThan(1e-8);
    expect(held.rotation.angleTo(baseRotation)).toBeLessThan(1e-8);

    const movedRotation = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      THREE.MathUtils.degToRad(18),
    );
    for (let frame = 13; frame <= 24; frame += 1) {
      setPose(object, new THREE.Vector3(90, 20, 30), movedRotation);
      smoother.update(object, frame * 16.67);
    }

    const followed = readPose(object);
    expect(followed.position.x).toBeGreaterThan(86);
    expect(followed.position.x).toBeLessThanOrEqual(90);
    expect(followed.rotation.angleTo(movedRotation)).toBeLessThan(
      THREE.MathUtils.degToRad(1),
    );
    expect(smoother.getSnapshot().heldTranslationCount).toBeGreaterThan(0);
    expect(smoother.getSnapshot().heldRotationCount).toBeGreaterThan(0);
  });

  it("recomposes a rigid pose instead of retaining element-wise matrix skew", () => {
    const object = new THREE.Group();
    const smoother = new TrackedPoseSmoother();
    setPose(
      object,
      new THREE.Vector3(0, 0, 4),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0.2, -0.3, 0.1)),
    );
    smoother.update(object, 0);
    object.matrix.elements[1] = object.matrix.elements[1]! + 0.018;
    object.matrix.elements[4] = object.matrix.elements[4]! - 0.011;
    smoother.update(object, 16.67);

    const { rotation, scale } = readPose(object);
    expect(rotation.length()).toBeCloseTo(1, 10);
    expect(scale.x).toBeGreaterThan(700);
    expect(scale.y).toBeGreaterThan(700);
    expect(scale.z).toBeGreaterThan(700);
    expect(object.matrix.determinant()).toBeGreaterThan(0);
  });
});
