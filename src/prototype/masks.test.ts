import { afterEach, describe, expect, it, vi } from 'vitest';
import { imageMask, textMask } from './masks';

function installCanvas(rgba = new Uint8ClampedArray(256 * 256 * 4)) {
  const context = {
    fillStyle: '',
    strokeStyle: '',
    lineWidth: 1,
    font: '',
    textAlign: 'start',
    textBaseline: 'alphabetic',
    measureText: vi.fn(() => ({ width: 80, actualBoundingBoxAscent: 76, actualBoundingBoxDescent: 18 } as TextMetrics)),
    fillText: vi.fn(),
    fillRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    closePath: vi.fn(),
    stroke: vi.fn(),
    drawImage: vi.fn(),
    getImageData: vi.fn(() => ({ data: rgba } as ImageData)),
    createImageData: vi.fn((width: number, height: number) => ({ data: new Uint8ClampedArray(width * height * 4), width, height } as ImageData)),
    putImageData: vi.fn(),
  } as unknown as CanvasRenderingContext2D;
  const canvas = {
    width: 0,
    height: 0,
    getContext: vi.fn(() => context),
    toDataURL: vi.fn(() => 'data:image/png;base64,synthetic'),
  } as unknown as HTMLCanvasElement;
  vi.stubGlobal('document', {
    createElement: vi.fn(() => canvas),
    fonts: { load: vi.fn(async () => []) },
  });
  return { canvas, context };
}

function rgbaPixel(
  bytes: Uint8ClampedArray,
  index: number,
  red: number,
  green: number,
  blue: number,
  alpha: number,
) {
  bytes.set([red, green, blue, alpha], index * 4);
}

const fakeFile = (name = 'synthetic.png', type = 'image/png', size = 123) =>
  ({ name, type, size }) as File;

afterEach(() => vi.unstubAllGlobals());

describe('synthetic text and image mask input', () => {
  it('sends arbitrary user text to the canvas text renderer', () => {
    const { canvas, context } = installCanvas();
    const mask = textMask('任意の文字🧭');
    expect(mask.size).toBe(256);
    expect(mask.label).toBe('任意の文字🧭');
    expect(context.fillText).toHaveBeenCalledWith('任意の文字🧭', 128, expect.any(Number));
    expect(context.measureText).toHaveBeenCalledWith('任意の文字🧭');
    expect(canvas.width).toBe(256);
    expect(canvas.height).toBe(256);
  });

  it('normalizes an image to the 218px safe box and closes its bitmap', async () => {
    const { context } = installCanvas();
    const bitmap = { width: 800, height: 400, close: vi.fn() } as unknown as ImageBitmap;
    const createBitmap = vi.fn(async () => bitmap);
    vi.stubGlobal('createImageBitmap', createBitmap);

    await imageMask(fakeFile(), 0.5, 'dark');

    expect(createBitmap).toHaveBeenCalledOnce();
    expect(context.drawImage).toHaveBeenCalledWith(
      bitmap,
      expect.closeTo(19, 10),
      expect.closeTo(73.5, 10),
      expect.closeTo(218, 10),
      expect.closeTo(109, 10),
    );
    expect(bitmap.close).toHaveBeenCalledOnce();
  });

  it('applies dark, light, and alpha polarity to synthetic pixels', async () => {
    const rgba = new Uint8ClampedArray(256 * 256 * 4);
    rgbaPixel(rgba, 0, 255, 255, 255, 255);
    rgbaPixel(rgba, 1, 0, 0, 0, 255);
    rgbaPixel(rgba, 2, 128, 128, 128, 255);
    rgbaPixel(rgba, 3, 255, 255, 255, 0);
    rgbaPixel(rgba, 4, 255, 0, 0, 128);
    installCanvas(rgba);
    vi.stubGlobal('createImageBitmap', vi.fn(async () => ({ width: 256, height: 256, close: vi.fn() } as unknown as ImageBitmap)));

    const dark = await imageMask(fakeFile(), 0.5, 'dark');
    const light = await imageMask(fakeFile(), 0.5, 'light');
    const alpha = await imageMask(fakeFile(), 0.5, 'alpha');
    expect(Array.from(dark.pixels.slice(0, 5))).toEqual([0, 255, 0, 0, 0]);
    expect(Array.from(light.pixels.slice(0, 5))).toEqual([255, 0, 255, 0, 0]);
    expect(Array.from(alpha.pixels.slice(0, 5))).toEqual([255, 255, 255, 0, 255]);
  });

  it('rejects unsupported MIME types and files over 8MB before decoding', async () => {
    installCanvas();
    const createBitmap = vi.fn();
    vi.stubGlobal('createImageBitmap', createBitmap);
    await expect(imageMask(fakeFile('x.gif', 'image/gif'), 0.5, 'dark')).rejects.toThrow('PNG・JPEG・WebP');
    await expect(imageMask(fakeFile('large.png', 'image/png', 8 * 1024 * 1024 + 1), 0.5, 'dark')).rejects.toThrow('8MB以内');
    expect(createBitmap).not.toHaveBeenCalled();
  });

  it('rejects excessive pixel dimensions and closes the decoded bitmap', async () => {
    installCanvas();
    const bitmap = { width: 6000, height: 6000, close: vi.fn() } as unknown as ImageBitmap;
    vi.stubGlobal('createImageBitmap', vi.fn(async () => bitmap));
    await expect(imageMask(fakeFile(), 0.5, 'dark')).rejects.toThrow('3200万画素以内');
    expect(bitmap.close).toHaveBeenCalledOnce();
  });

  it('converts decode failures to a user-facing image error', async () => {
    installCanvas();
    vi.stubGlobal('createImageBitmap', vi.fn(async () => { throw new Error('decode detail'); }));
    await expect(imageMask(fakeFile(), 0.5, 'dark')).rejects.toThrow('画像として開けませんでした');
  });
});
