import * as THREE from "three";
import { v1AtlasVertexShader } from "../render/generator-shader";
import { v1AtlasFragmentShader } from "../render/v1-fragment-shader";
import type { FaceWeights } from "./view-blend";

type PatternUniforms = {
  u_resolution: { value: THREE.Vector2 };
  u_viewportOrigin: { value: THREE.Vector2 };
  u_visualAspect: { value: number };
  u_rotateSource: { value: number };
  u_vortexCount: { value: number };
  u_time: { value: number };
  u_vortexPos: { value: THREE.Vector2[] };
  u_vortexVel: { value: THREE.Vector2[] };
  u_vortexRadius: { value: number[] };
  u_vortexSpin: { value: number[] };
  u_speed: { value: number };
  u_vortexStrength: { value: number };
  u_ledStrength: { value: number };
  u_glow: { value: number };
  u_displayMode: { value: number };
  u_colorMode: { value: number };
  u_colorStyleMix: { value: number };
  u_flowMix: { value: THREE.Vector4 };
  u_layuMix: { value: number };
  u_cellBoilMix: { value: number };
  u_cellStretchMix: { value: number };
  u_curlMix: { value: number };
  u_skinMix: { value: number };
  u_unevenCellMix: { value: number };
  u_fireflyEnabled: { value: number };
  u_hueCenter: { value: number };
  u_sectorHalfWidth: { value: number };
};

const FACE_PHASES: FaceWeights = [0.2, 1.45, 2.7, 3.95, 5.2];
const FACE_LENS_X: FaceWeights = [0.48, 0.38, 0.66, 0.58, 0.30];
const FACE_LENS_Y: FaceWeights = [0.58, 0.42, 0.54, 0.34, 0.66];

// Typography keeps the V1 lens deformation but not the opaque event-horizon
// disk: inside letterforms the disk can be misread as a glyph counter.
const typographyPatternFragmentShader = v1AtlasFragmentShader.replace(
  "col = mix(col, vec3(0.0), max(hole, innerInk * 0.86));",
  "col = mix(col, vec3(0.0), max(hole, innerInk * 0.86) * 0.0);",
);

if (typographyPatternFragmentShader === v1AtlasFragmentShader) {
  throw new Error("The V1 event-horizon shader hook could not be found.");
}

function seededUnit(seed: number, salt: number): number {
  let value = (seed ^ salt) >>> 0;
  value = Math.imul(value ^ (value >>> 16), 0x7feb352d);
  value = Math.imul(value ^ (value >>> 15), 0x846ca68b);
  return ((value ^ (value >>> 16)) >>> 0) / 0x1_0000_0000;
}

function weighted(values: FaceWeights, weights: FaceWeights): number {
  return values.reduce((sum, value, index) => sum + value * weights[index]!, 0);
}

export type DerivedViewPatternState = Readonly<{
  phase: number;
  lens: readonly [number, number];
  flowMix: readonly [number, number, number, number];
  layuMix: number;
  cellBoilMix: number;
  cellStretchMix: number;
  curlMix: number;
  skinMix: number;
  unevenCellMix: number;
}>;

export function deriveViewPatternState(
  seed: number,
  weights: FaceWeights,
  boundaryEnergy: number,
): DerivedViewPatternState {
  const energy = Math.min(1, Math.max(0, boundaryEnergy));
  const basePhase = seededUnit(seed, 0x85ebca6b) * 47 + 11;
  return {
    phase: basePhase + weighted(FACE_PHASES, weights) + energy * 0.72,
    lens: [weighted(FACE_LENS_X, weights), weighted(FACE_LENS_Y, weights)],
    flowMix: [0, 0, 0.18 + energy * 0.42, energy * 0.08],
    layuMix: 0.06 + energy * 0.42,
    cellBoilMix: 0.08 + energy * 0.62,
    cellStretchMix: 0.04 + energy * 0.36,
    curlMix: 0.06 + energy * 0.46,
    skinMix: 0.42 - energy * 0.12,
    unevenCellMix: 0.26 + energy * 0.34,
  };
}

function createUniforms(seed: number, size: number): PatternUniforms {
  const vortexPosition = new THREE.Vector2(0.5, 0.5);
  return {
    u_resolution: { value: new THREE.Vector2(size, size) },
    u_viewportOrigin: { value: new THREE.Vector2(0, 0) },
    u_visualAspect: { value: 1 },
    u_rotateSource: { value: 0 },
    u_vortexCount: { value: 1 },
    u_time: { value: seededUnit(seed, 0x6d2b79f5) * 41 + 7 },
    u_vortexPos: {
      value: [vortexPosition, new THREE.Vector2(-10, -10), new THREE.Vector2(-10, -10)],
    },
    u_vortexVel: {
      value: [new THREE.Vector2(), new THREE.Vector2(), new THREE.Vector2()],
    },
    u_vortexRadius: { value: [0.12, 0, 0] },
    u_vortexSpin: { value: [seededUnit(seed, 0x9e3779b9) > 0.5 ? 1 : -1, 1, -1] },
    u_speed: { value: 1 },
    u_vortexStrength: { value: 4.2 },
    u_ledStrength: { value: 0.12 },
    u_glow: { value: 0.54 },
    u_displayMode: { value: 0 },
    u_colorMode: { value: 5 },
    u_colorStyleMix: { value: 0.28 },
    u_flowMix: { value: new THREE.Vector4(0, 0, 0.18, 0) },
    u_layuMix: { value: 0.06 },
    u_cellBoilMix: { value: 0.08 },
    u_cellStretchMix: { value: 0.04 },
    u_curlMix: { value: 0.06 },
    u_skinMix: { value: 0.42 },
    u_unevenCellMix: { value: 0.26 },
    u_fireflyEnabled: { value: 0 },
    u_hueCenter: { value: 0.64 },
    u_sectorHalfWidth: { value: 0.18 },
  };
}

export type ViewPatternSnapshot = Readonly<{
  renderCount: number;
  phase: number;
  lens: readonly [number, number];
}>;

/**
 * Renders the generated field only when view-derived inputs change.
 * No clock or requestAnimationFrame value ever enters this class.
 */
export class ViewPatternRenderer {
  readonly texture: THREE.Texture;

  private readonly scene = new THREE.Scene();
  private readonly camera = new THREE.Camera();
  private readonly target: THREE.WebGLRenderTarget;
  private readonly material: THREE.RawShaderMaterial;
  private readonly quad: THREE.Mesh<THREE.PlaneGeometry, THREE.RawShaderMaterial>;
  private readonly uniforms: PatternUniforms;
  private readonly seed: number;
  private renderCount = 0;

  constructor(seed: number, size = 512) {
    this.seed = seed >>> 0;
    this.uniforms = createUniforms(seed, size);
    this.target = new THREE.WebGLRenderTarget(size, size, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
      depthBuffer: false,
      stencilBuffer: false,
    });
    this.target.texture.generateMipmaps = false;
    this.target.texture.colorSpace = THREE.NoColorSpace;
    this.target.texture.name = "view-driven-v1-typography-pattern";
    this.texture = this.target.texture;
    this.material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: v1AtlasVertexShader,
      fragmentShader: typographyPatternFragmentShader,
      glslVersion: THREE.GLSL3,
      depthTest: false,
      depthWrite: false,
    });
    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }

  update(renderer: THREE.WebGLRenderer, weights: FaceWeights, boundaryEnergy: number): void {
    const state = deriveViewPatternState(this.seed, weights, boundaryEnergy);
    this.uniforms.u_time.value = state.phase;
    this.uniforms.u_vortexPos.value[0]!.set(...state.lens);
    this.uniforms.u_flowMix.value.set(...state.flowMix);
    this.uniforms.u_layuMix.value = state.layuMix;
    this.uniforms.u_cellBoilMix.value = state.cellBoilMix;
    this.uniforms.u_cellStretchMix.value = state.cellStretchMix;
    this.uniforms.u_curlMix.value = state.curlMix;
    this.uniforms.u_skinMix.value = state.skinMix;
    this.uniforms.u_unevenCellMix.value = state.unevenCellMix;

    const previousTarget = renderer.getRenderTarget();
    const previousViewport = renderer.getViewport(new THREE.Vector4());
    const previousScissor = renderer.getScissor(new THREE.Vector4());
    const previousScissorTest = renderer.getScissorTest();
    const previousClearColor = renderer.getClearColor(new THREE.Color());
    const previousClearAlpha = renderer.getClearAlpha();
    const xrEnabled = renderer.xr.enabled;

    renderer.xr.enabled = false;
    try {
      renderer.setRenderTarget(this.target);
      // setViewport uses logical CSS units even for a physical-pixel render
      // target, so compensate for DPR exactly as the existing V1 atlas does.
      const pixelRatio = renderer.getPixelRatio();
      renderer.setViewport(
        0,
        0,
        this.target.width / pixelRatio,
        this.target.height / pixelRatio,
      );
      renderer.setScissorTest(false);
      renderer.setClearColor(0x07080d, 1);
      renderer.clear(true, true, true);
      renderer.render(this.scene, this.camera);
      this.renderCount += 1;
    } finally {
      renderer.setRenderTarget(previousTarget);
      renderer.setViewport(previousViewport);
      renderer.setScissor(previousScissor);
      renderer.setScissorTest(previousScissorTest);
      renderer.setClearColor(previousClearColor, previousClearAlpha);
      renderer.xr.enabled = xrEnabled;
    }
  }

  getSnapshot(): ViewPatternSnapshot {
    const lens = this.uniforms.u_vortexPos.value[0]!;
    return {
      renderCount: this.renderCount,
      phase: this.uniforms.u_time.value,
      lens: [lens.x, lens.y],
    };
  }

  dispose(): void {
    this.quad.geometry.dispose();
    this.material.dispose();
    this.target.dispose();
  }
}
