import * as THREE from 'three';
/** Convert an authored local particle radius into projected physical pixels.
 * MindAR's anchor post-matrix scales by markerWidth. Local .4 alone therefore
 * cannot be used with the hundreds-of-units camera depth in the point shader.
 * The active projection matrix is authoritative and includes tracking resize.
 */
export function arParticleScale(object:THREE.Object3D,camera:THREE.Camera,height:number):number {
  object.updateWorldMatrix(true,false);
  const scale=object.getWorldScale(new THREE.Vector3());
  const worldScale=(Math.abs(scale.x)+Math.abs(scale.y)+Math.abs(scale.z))/3;
  return height*.5*Math.abs(camera.projectionMatrix.elements[5]!)*worldScale;
}
