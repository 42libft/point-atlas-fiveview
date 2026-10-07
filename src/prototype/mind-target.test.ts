import { describe, expect, it } from 'vitest';
import { decode, encode } from '@msgpack/msgpack';
import { validateMindTarget, MAX_MIND_BYTES } from './mind-target';

function syntheticMindTarget() {
  const pointSet = (width: number, height: number) => [
    { x: 2, y: 2 },
    { x: width - 3, y: 2 },
    { x: 2, y: height - 3 },
    { x: width - 3, y: height - 3 },
  ];
  const trackingFrame = (width: number, height: number, withFeatures: boolean) => ({
    width,
    height,
    scale: 0.5,
    data: new Uint8Array(width * height),
    points: withFeatures ? pointSet(width, height) : [],
  });
  const maximaPoints = pointSet(16, 16).map((point, index) => ({
    ...point,
    maxima: true,
    scale: 1,
    angle: index * 0.1,
    descriptors: Array.from({ length: 21 }, (_, descriptor) => descriptor + index),
  }));
  const minimaPoints: Array<unknown> = [];
  const cluster = (count: number) => ({
    rootNode: {
      leaf: true,
      centerPointIndex: count ? 0 : null,
      pointIndexes: Array.from({ length: count }, (_, index) => index),
    },
  });
  return {
    v: 2,
    dataList: [{
      targetImage: { width: 720, height: 720 },
      trackingData: [trackingFrame(16, 16, false), trackingFrame(8, 8, true)],
      matchingData: [{
        width: 16,
        height: 16,
        scale: 0.5,
        maximaPoints,
        minimaPoints,
        maximaPointsCluster: cluster(maximaPoints.length),
        minimaPointsCluster: cluster(minimaPoints.length),
      }],
    }],
  };
}

const valid = () => new Uint8Array(encode(syntheticMindTarget()));

describe('MindAR target schema admission', () => {
  it('accepts a synthetic MessagePack schema fixture without changing its bytes', () => {
    const bytes = valid(), before = bytes.slice();
    expect(validateMindTarget(bytes)).toEqual({ targets: 1, width: 720, height: 720 });
    expect(bytes).toEqual(before);
  });
  it.each([new Uint8Array(), new Uint8Array([0xc1]), new TextEncoder().encode('not a target'), new Uint8Array(MAX_MIND_BYTES + 1)])('rejects empty, malformed, non-mind and oversized input', bytes => expect(() => validateMindTarget(bytes)).toThrow('MindAR v2'));
  it('rejects truncation and trailing bytes', () => {
    const bytes = valid();
    expect(() => validateMindTarget(bytes.subarray(0, bytes.length - 1))).toThrow();
    expect(() => validateMindTarget(new Uint8Array([...bytes, 0]))).toThrow();
  });
  const changes: Array<[string, (data: any) => void]> = [
    ['old version', d => d.v = 1], ['missing targets', d => d.dataList = []],
    ['missing tracking keyframe', d => d.dataList[0].trackingData.length = 1],
    ['insufficient tracking features', d => d.dataList[0].trackingData[1].points = []],
    ['pixel length mismatch', d => d.dataList[0].trackingData[1].data = new Uint8Array(1)],
    ['nonfinite dimensions', d => d.dataList[0].targetImage.width = Infinity],
    ['oversized dimensions', d => d.dataList[0].targetImage.width = 999999],
    ['missing descriptors', d => d.dataList[0].matchingData[0].maximaPoints[0].descriptors = []],
    ['invalid cluster index', d => d.dataList[0].matchingData[0].maximaPointsCluster.rootNode = { leaf: true, centerPointIndex: null, pointIndexes: [999999] }],
    ['missing cluster', d => delete d.dataList[0].matchingData[0].minimaPointsCluster],
    ['invalid point', d => d.dataList[0].trackingData[1].points[0].x = NaN],
  ];
  it.each(changes)('rejects %s', (_, mutate) => { const data = decode(valid()); mutate(data); expect(() => validateMindTarget(encode(data))).toThrow(); });
  it('rejects oversized MessagePack allocation headers before allocating', () => {
    expect(() => validateMindTarget(new Uint8Array([0xdd, 0xff, 0xff, 0xff, 0xff]))).toThrow();
  });
});
