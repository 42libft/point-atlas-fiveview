import { describe, expect, it, vi } from 'vitest';
import { ViewPatternRenderer } from '../typography/view-pattern';
// These checks cover deterministic CPU geometry and masks, not rendered pixels.
vi.spyOn(ViewPatternRenderer.prototype, 'update').mockImplementation(() => {});
import * as THREE from 'three';
import { GalaxyBody } from './galaxy';
import { parseProject, serializeProject } from './project';
import { validateMasks } from './masks';
import type { Mask, Project } from './model';

const renderer = { domElement: { width: 884, height: 658 } } as THREE.WebGLRenderer;

function makeMask(label: string, predicate: (x: number, y: number) => boolean): Mask {
  const size = 256;
  const pixels = new Uint8Array(size * size);
  for (let py = 0; py < size; py += 1) {
    for (let px = 0; px < size; px += 1) {
      const x = (px - 127.5) / 127.5;
      const y = (127.5 - py) / 127.5;
      if (predicate(x, y)) pixels[py * size + px] = 255;
    }
  }
  return { size, label, pixels };
}

function syntheticProject(): Project {
  const masks = [
    makeMask('ring', (x, y) => Math.abs(Math.hypot(x * 0.86, y * 1.35) - 0.48) < 0.075),
    makeMask('hook', (x, y) =>
      (Math.abs(x + 0.27) < 0.075 && y > -0.62 && y < 0.58) ||
      (Math.hypot(x + 0.06, y - 0.50) > 0.22 && Math.hypot(x + 0.06, y - 0.50) < 0.36 && x < 0.18 && y > 0.28)),
    makeMask('asymmetric-arrow', (x, y) =>
      (Math.abs(y + 0.12) < 0.075 && x > -0.65 && x < 0.52) ||
      (x > 0.18 && Math.abs(y - (0.48 - x) * 0.62) < 0.065) ||
      (x > 0.18 && Math.abs(y + (0.48 - x) * 0.62) < 0.065)),
    makeMask('square', (x, y) => Math.abs(x) > 0.42 && Math.abs(x) < 0.54 && Math.abs(y) < 0.58 || Math.abs(y) > 0.46 && Math.abs(y) < 0.58 && Math.abs(x) < 0.54),
    makeMask('diamond', (x, y) => Math.abs(Math.abs(x) + Math.abs(y) * 1.35 - 0.76) < 0.065),
  ];
  return {
    version: 1,
    mode: 'galaxy',
    budget: 4096,
    depth: 1,
    reveal: 0.5,
    threshold: 0.5,
    contrast: 'current',
    background: 'dark',
    sampling: 'sdf',
    emphasis: 'field',
    viewing: 'horizontal',
    masks,
  };
}

describe('generic readability inputs and deterministic generation (CPU only)', () => {
  for (const sampling of ['sdf', 'raster'] as const) {
    for (const emphasis of ['field', 'figure'] as const) {
      it(`keeps the generated ${sampling}/${emphasis} layout deterministic and leaves every mask unchanged`, () => {
        const project = { ...syntheticProject(), sampling, emphasis };
        const before = serializeProject(project);
        const first = new GalaxyBody(renderer, project);
        const second = new GalaxyBody(renderer, project);
        expect(second.snapshot().layoutHash).toBe(first.snapshot().layoutHash);
        expect(serializeProject(project)).toBe(before);
        expect(first.pointCount).toBe(project.budget);
        first.dispose();
        second.dispose();
      });
    }
  }

  it('round-trips all five synthetic input masks through the project JSON format', () => {
    const project = syntheticProject();
    const before = project.masks.map((mask) => mask.pixels.slice());
    const copy = parseProject(serializeProject(project));
    expect(copy).toEqual(project);
    copy.masks.forEach((mask, index) => expect(mask.pixels).toEqual(before[index]));
    project.masks.forEach((mask, index) => expect(mask.pixels).toEqual(before[index]));
  });

  it('returns one-hot weights for all five face-on viewing directions', () => {
    const body = new GalaxyBody(renderer, syntheticProject());
    const directions: Array<readonly [number, number, number]> = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
      [0, 0, -1],
      [-1, 0, 0],
    ];
    directions.forEach((direction, index) => {
      body.setView(new THREE.Vector3(...direction), 800);
      expect(body.snapshot().weights).toEqual(directions.map((_, face) => Number(face === index)));
    });
    body.dispose();
  });

  it('warns about thin strokes and tiny disconnected features in synthetic masks', () => {
    const thin = makeMask('thin-hook', (x, y) => Math.abs(x + 0.1) < 0.012 && y > -0.85 && y < 0.85);
    const islands = makeMask('islands', (x, y) =>
      (Math.abs(x) < 0.42 && Math.abs(y) < 0.32) ||
      (Math.abs(x - 0.70) < 0.012 && Math.abs(y - 0.70) < 0.012) ||
      (Math.abs(x + 0.70) < 0.012 && Math.abs(y + 0.70) < 0.012));
    expect(validateMasks([thin]).some((warning) => warning.includes('細線'))).toBe(true);
    expect(validateMasks([islands]).some((warning) => warning.includes('孤立'))).toBe(true);
  });
});
