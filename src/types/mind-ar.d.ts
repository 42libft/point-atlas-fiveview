declare module "mind-ar/dist/mindar-image-three.prod.js" {
  import type * as THREE from "three";

  type MindAROptions = {
    container: HTMLElement;
    imageTargetSrc: string;
    maxTrack?: number;
    uiLoading?: "yes" | "no";
    uiScanning?: "yes" | "no";
    uiError?: "yes" | "no";
    filterMinCF?: number;
    filterBeta?: number;
    warmupTolerance?: number;
    missTolerance?: number;
  };

  type Anchor = {
    group: THREE.Group;
    onTargetFound: (() => void) | null;
    onTargetLost: (() => void) | null;
    onTargetUpdate: (() => void) | null;
  };

  export class MindARThree {
    constructor(options: MindAROptions);
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    // Runtime fields verified against the pinned mind-ar 1.2.5 implementation.
    video?: HTMLVideoElement;
    cssRenderer: { domElement: HTMLElement };
    controller?: { stopProcessVideo(): void; dispose(): void };
    addAnchor(targetIndex: number): Anchor;
    start(): Promise<void>;
    _startVideo(): Promise<void>;
    _startAR(): Promise<void>;
    stop(): void;
  }
}

declare module "mind-ar/dist/mindar-image.prod.js" {
  export class Compiler {
    compileImageTargets(images: HTMLImageElement[], onProgress: (progress: number) => void): Promise<void>;
    exportData(): Uint8Array;
  }
}
