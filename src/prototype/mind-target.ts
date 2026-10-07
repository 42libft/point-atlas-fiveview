import { decode } from '@msgpack/msgpack';

export const MAX_MIND_BYTES = 16_000_000;
const invalid = () => new Error('正常なMindAR v2のターゲットを選んでください。画像から再生成することもできます。');
type RecordValue = Record<string, unknown>;
function record(value: unknown): RecordValue {
  if (!value || typeof value !== 'object' || Array.isArray(value) || value instanceof Uint8Array) throw invalid();
  return value as RecordValue;
}
function list(value: unknown, min: number, max: number): unknown[] {
  if (!Array.isArray(value) || value.length < min || value.length > max) throw invalid();
  return value;
}
function number(value: unknown, min: number, max: number, integer = false): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max || (integer && !Number.isInteger(value))) throw invalid();
  return value;
}
function dimensions(value: RecordValue) {
  const width = number(value.width, 1, 8192, true), height = number(value.height, 1, 8192, true);
  if (width * height > 32_000_000) throw invalid();
  return { width, height };
}
function cluster(value: unknown, count: number) {
  const pending = [{ value: record(value).rootNode, depth: 0 }];
  let nodes = 0;
  while (pending.length) {
    const { value: current, depth } = pending.pop()!;
    if (++nodes > 100_000 || depth > 64) throw invalid();
    const node = record(current);
    if (node.centerPointIndex !== null) {
      const index = typeof node.centerPointIndex === 'string' && /^\d+$/.test(node.centerPointIndex) ? Number(node.centerPointIndex) : node.centerPointIndex;
      number(index, 0, count - 1, true);
    }
    if (node.leaf === true) list(node.pointIndexes, 0, count).forEach(index => number(index, 0, count - 1, true));
    else if (node.leaf === false) list(node.children, 1, 100_000).forEach(child => pending.push({ value: child, depth: depth + 1 }));
    else throw invalid();
  }
}

/** Validate the pinned MindAR 1.2.5 v2 input before replacing usable state or opening a camera. */
export function validateMindTarget(bytes: Uint8Array): { targets: number; width: number; height: number } {
  if (!bytes.length || bytes.byteLength > MAX_MIND_BYTES) throw invalid();
  try {
    const root = record(decode(bytes, { maxStrLength: 256, maxBinLength: MAX_MIND_BYTES, maxArrayLength: 100_000, maxMapLength: 32, maxExtLength: 0 }));
    if (root.v !== 2) throw invalid();
    const targets = list(root.dataList, 1, 100);
    let first = { width: 0, height: 0 };
    targets.forEach((value, index) => {
      const target = record(value), size = dimensions(record(target.targetImage));
      if (!index) first = size;
      list(target.trackingData, 2, 32).forEach((value, frameIndex) => {
        const frame = record(value), size = dimensions(frame);
        number(frame.scale, Number.MIN_VALUE, 1024);
        if (!(frame.data instanceof Uint8Array) || frame.data.length !== size.width * size.height) throw invalid();
        list(frame.points, frameIndex === 1 ? 4 : 0, 100_000).forEach(value => { const p = record(value); number(p.x, 0, size.width); number(p.y, 0, size.height); });
      });
      let matchingPoints = 0;
      list(target.matchingData, 1, 32).forEach(value => {
        const frame = record(value), size = dimensions(frame);
        number(frame.scale, Number.MIN_VALUE, 1024);
        for (const key of ['maximaPoints', 'minimaPoints']) {
          const points = list(frame[key], 0, 100_000);
          matchingPoints += points.length;
          points.forEach(value => {
            const p = record(value);
            if (typeof p.maxima !== 'boolean') throw invalid();
            number(p.x, 0, size.width); number(p.y, 0, size.height);
            number(p.scale, Number.MIN_VALUE, 8192); number(p.angle, -Math.PI * 2, Math.PI * 2);
            list(p.descriptors, 21, 21).forEach(value => number(value, 0, 0xffffffff, true));
          });
          cluster(frame[key + 'Cluster'], points.length);
        }
      });
      if (matchingPoints < 4) throw invalid();
    });
    return { targets: targets.length, ...first };
  } catch { throw invalid(); }
}
