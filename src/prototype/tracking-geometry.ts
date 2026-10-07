import type { Vector3Like, Vector3Tuple } from '../typography/view-blend';

function unit(vector: Vector3Like): Vector3Tuple | null {
  const values: Vector3Tuple = Array.isArray(vector)
    ? [vector[0], vector[1], vector[2]]
    : [(vector as { x: number }).x, (vector as { y: number }).y, (vector as { z: number }).z];
  if (!values.every(Number.isFinite)) return null;
  const length = Math.hypot(...values);
  return length > Number.EPSILON ? [values[0] / length, values[1] / length, values[2] / length] : null;
}

export type TargetProjectionGeometry = {
  /** Acute angle: 0 = face-on, 90 = edge-on. Check frontFacing for the printed side. */
  angleDeg: number;
  /** abs(cos(angle)): local orthographic foreshortening only, never a detection probability. */
  faceOnRatio: number;
  frontFacing: boolean;
};

/**
 * Geometric inclination of a planar image target from its own center.
 * Both inputs must use the same coordinate system. The editor's target normal is
 * +Y; a MindAR anchor's image plane uses +Z. Do not pass camera - body CENTER:
 * the artwork floats above the target and therefore has a different sightline.
 * This is not projected pixel area (perspective, distance and cropping matter),
 * nor an estimate of tracking confidence or an empirical safe-angle threshold.
 */
export function targetProjectionGeometry(
  targetToCamera: Vector3Like,
  targetNormal: Vector3Like = [0, 1, 0],
): TargetProjectionGeometry | null {
  const direction = unit(targetToCamera), normal = unit(targetNormal);
  if (!direction || !normal) return null;
  const signedCosine = Math.max(-1, Math.min(1,
    direction[0] * normal[0] + direction[1] * normal[1] + direction[2] * normal[2]));
  const faceOnRatio = Math.abs(signedCosine);
  return { angleDeg: Math.acos(faceOnRatio) * 180 / Math.PI, faceOnRatio, frontFacing: signedCosine > 0 };
}

/**
 * Preview-only candidate camera direction, in body coordinates (+Y is up).
 * Positive degrees raises the direction while preserving azimuth; 0 is the
 * existing direction. The returned direction is normalized and elevation is
 * clamped at the poles. This never changes a tracked camera pose, feature
 * detection, or the geometry/appearance of the artwork. Null means invalid input.
 */
export function raiseViewingDirection(direction: Vector3Like, elevationDeg = 0): Vector3Tuple | null {
  const value = unit(direction);
  if (!value || !Number.isFinite(elevationDeg)) return null;
  const horizontal = Math.hypot(value[0], value[2]);
  // At a pole no azimuth exists. Preserve it rather than inventing a side.
  if (horizontal <= Number.EPSILON) return value;
  const elevation = Math.max(-Math.PI / 2, Math.min(Math.PI / 2,
    Math.atan2(value[1], horizontal) + elevationDeg * Math.PI / 180));
  const radius = Math.cos(elevation);
  return [value[0] / horizontal * radius, Math.sin(elevation), value[2] / horizontal * radius];
}
