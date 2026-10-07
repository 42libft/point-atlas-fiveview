import {it,expect} from 'vitest';
import * as THREE from 'three';
import {arParticleScale} from './ar-space';
it('compensates the complete marker scale when projecting authored particle size',()=>{const camera=new THREE.PerspectiveCamera(45,1,.1,5000);const anchor=new THREE.Group(),object=new THREE.Group();object.scale.setScalar(.4);anchor.add(object);const unit=arParticleScale(object,camera,1000);anchor.scale.setScalar(720);const pixels=arParticleScale(object,camera,1000);expect(pixels/unit).toBeCloseTo(720);expect(pixels/(1440)).toBeCloseTo(unit/2);});
it('uses a custom active projection even when the caller has not updated the fov property',()=>{const camera=new THREE.PerspectiveCamera(45);camera.projectionMatrix.elements[5]=3;const object=new THREE.Group();object.scale.setScalar(.4);expect(arParticleScale(object,camera,1000)).toBeCloseTo(600);});
