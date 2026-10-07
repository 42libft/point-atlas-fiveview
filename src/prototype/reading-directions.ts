import { Vector3 } from 'three';
import { FACE_NORMALS, type FaceId } from '../typography/view-blend';
export const RAISED_ELEVATION_DEG = 35;
const elevation = RAISED_ELEVATION_DEG * Math.PI / 180;
/** Physical viewing direction. The top remains overhead; four side slots move upward. */
export function readingDirection(face: FaceId, raised: boolean): Vector3 {
  const d = new Vector3(...FACE_NORMALS[face]);
  if (raised && face !== 'top') d.multiplyScalar(Math.cos(elevation)).setY(Math.sin(elevation));
  return d;
}
/** Map the raised reading ring to the five-face blend; this does not estimate tracking. */
export function readingBlendDirection(direction: Vector3, raised: boolean): Vector3 {
  if (!raised) return direction;
  const d = direction.clone().normalize(), horizontal = Math.hypot(d.x, d.z);
  if (horizontal < 1e-8) return d;
  const theta = Math.atan2(d.y, horizontal);
  const mapped = Math.max(0, (theta - elevation) / (Math.PI / 2 - elevation)) * Math.PI / 2;
  return new Vector3(d.x / horizontal * Math.cos(mapped), Math.sin(mapped), d.z / horizontal * Math.cos(mapped));
}
