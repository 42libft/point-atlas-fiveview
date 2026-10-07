import { afterEach, describe, expect, it, vi } from 'vitest';
import { ownController, ownResizeListener, type OwnedController } from './mindar-lifecycle';

afterEach(() => vi.unstubAllGlobals());
function fixture() {
  const tensor = () => ({ dispose: vi.fn(), isDisposedInternal: false });
  const detectorTensor = tensor(), trackerTensor = tensor(), input = tensor();
  const canvas = { width: 720, height: 960 };
  const controller = {
    stopProcessVideo: vi.fn(), dispose: vi.fn(), processVideo: vi.fn(),
    worker: { terminate: vi.fn() }, workerMatchDone: vi.fn(), workerTrackDone: vi.fn(),
    _workerMatch: vi.fn(async () => ({ targetIndex: 0 })), _workerTrackUpdate: vi.fn(async () => [[1]]),
    inputLoader: { tempPixelHandle: { dataId: {} }, loadInput: vi.fn(() => input), context: { canvas } },
    cropDetector: { detector: { tensorCaches: { orientation: { a: detectorTensor, duplicate: detectorTensor } } } },
    tracker: { featurePointsListT: [trackerTensor], imagePixelsListT: [], imagePropertiesListT: [] },
  };
  const backend = { disposeData: vi.fn() }, tf = { backend: () => backend };
  const owner = ownController(controller as unknown as OwnedController, tf);
  return { owner, controller, backend, detectorTensor, trackerTensor, input, canvas };
}
describe('pinned MindAR resource ownership', () => {
  it('does not dispose active state or resources before startup settles', () => {
    const f = fixture(); f.owner.stop();
    expect(f.owner.snapshot().released).toBe(false); expect(f.backend.disposeData).not.toHaveBeenCalled();
    f.owner.ready(); expect(f.owner.snapshot().released).toBe(true);
  });
  it('releases detector, tracker, input handle and worker exactly once', () => {
    const f = fixture(); f.owner.ready(); expect(f.owner.snapshot().released).toBe(false);
    f.owner.stop(); f.owner.stop(); f.owner.ready();
    expect(f.detectorTensor.dispose).toHaveBeenCalledTimes(1); expect(f.trackerTensor.dispose).toHaveBeenCalledTimes(1);
    expect(f.backend.disposeData).toHaveBeenCalledExactlyOnceWith(f.controller.inputLoader.tempPixelHandle.dataId);
    expect(f.controller.worker.terminate).toHaveBeenCalledTimes(1); expect(f.canvas).toEqual({ width: 0, height: 0 });
  });
  it('drains an outstanding input tensor before releasing its backing resources', () => {
    const f = fixture(); f.controller.inputLoader.loadInput(); f.owner.ready(); f.owner.stop();
    expect(f.owner.snapshot()).toEqual({ released: false, pendingInputs: 1 });
    expect(f.controller.worker.terminate).not.toHaveBeenCalled();
    f.input.dispose(); expect(f.owner.snapshot()).toEqual({ released: true, pendingInputs: 0 });
    expect(f.backend.disposeData).toHaveBeenCalledTimes(1);
  });
  it('settles pending match/track operations on stop and blocks new pipeline work', async () => {
    const f = fixture(), matchDone = f.controller.workerMatchDone, trackDone = f.controller.workerTrackDone;
    f.owner.ready(); f.owner.stop();
    expect(matchDone).toHaveBeenCalledWith({ targetIndex: -1, modelViewTransform: null });
    expect(trackDone).toHaveBeenCalledWith({ modelViewTransform: null });
    expect(await f.controller._workerMatch()).toEqual({ targetIndex: -1, modelViewTransform: null });
    expect(await f.controller._workerTrackUpdate()).toBe(null);
    f.controller.processVideo(); expect(f.owner.snapshot().released).toBe(true);
  });
  it('keeps resource counters balanced across 100 independent stop/restart ownership cycles', () => {
    for (let i = 0; i < 100; i++) { const f = fixture(); f.owner.ready(); f.owner.stop(); expect(f.owner.snapshot()).toEqual({ released: true, pendingInputs: 0 }); expect(f.backend.disposeData).toHaveBeenCalledTimes(1); }
  });
  it('captures only constructor-owned resize listeners and restores addEventListener', () => {
    const target = new EventTarget(); vi.stubGlobal('window', target);
    const savedAddEventListener = target.addEventListener, listener = vi.fn(), foreign = vi.fn(); target.addEventListener('resize', foreign);
    const value = ownResizeListener(() => { window.addEventListener('resize', listener); return 42; });
    expect(target.addEventListener).toBe(savedAddEventListener); expect(value.value).toBe(42);
    target.dispatchEvent(new Event('resize')); expect(listener).toHaveBeenCalledTimes(1);
    value.release(); value.release(); target.dispatchEvent(new Event('resize'));
    expect(listener).toHaveBeenCalledTimes(1); expect(foreign).toHaveBeenCalledTimes(2);
  });
  it('releases listeners and restores the platform function on constructor failure', () => {
    const target = new EventTarget(); vi.stubGlobal('window', target); const savedAddEventListener = target.addEventListener, listener = vi.fn();
    expect(() => ownResizeListener(() => { window.addEventListener('resize', listener); throw Error('GPU allocation failed'); })).toThrow('GPU allocation');
    expect(target.addEventListener).toBe(savedAddEventListener); target.dispatchEvent(new Event('resize')); expect(listener).not.toHaveBeenCalled();
  });
});
