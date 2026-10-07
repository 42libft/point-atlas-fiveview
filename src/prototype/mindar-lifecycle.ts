/** Ownership bridge for the pinned mind-ar 1.2.5 runtime. No tracking or appearance changes. */
export function ownResizeListener<T>(create: () => T): { value: T; release: () => void } {
  const savedAddEventListener = window.addEventListener;
  const listeners: Array<{ listener: EventListenerOrEventListenerObject; options?: boolean | AddEventListenerOptions }> = [];
  window.addEventListener = function(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) {
    if (type === 'resize') listeners.push({ listener, options });
    savedAddEventListener.call(window, type, listener, options);
  } as typeof window.addEventListener;
  const release = () => { listeners.splice(0).forEach(({ listener, options }) => window.removeEventListener('resize', listener, options)); };
  try { return { value: create(), release }; }
  catch (error) { release(); throw error; }
  finally { window.addEventListener = savedAddEventListener; }
}

type Tensor = { dispose(): void; isDisposedInternal?: boolean };
type TensorFlow = { backend(): { disposeData(id: object): void } };
export type OwnedController = {
  stopProcessVideo(): void;
  dispose(): void;
  processVideo(video: HTMLVideoElement): void;
  worker: Worker;
  workerMatchDone: ((value: { targetIndex: number; modelViewTransform: null }) => void) | null;
  workerTrackDone: ((value: { modelViewTransform: null }) => void) | null;
  _workerMatch(...args: unknown[]): Promise<unknown>;
  _workerTrackUpdate(...args: unknown[]): Promise<unknown>;
  inputLoader: { tempPixelHandle: { dataId: object }; loadInput(video: HTMLVideoElement): Tensor; context: CanvasRenderingContext2D };
  cropDetector: { detector: { tensorCaches: Record<string, Record<string, Tensor>> } };
  tracker?: { featurePointsListT: Tensor[]; imagePixelsListT: Tensor[]; imagePropertiesListT: Tensor[] };
};

/** Wait for outstanding frame tensors before releasing only this controller's tensors. */
export function ownController(controller: OwnedController, tf: TensorFlow) {
  let stopped = false, startupDone = false, released = false;
  const inputs = new Set<Tensor>();
  const release = () => {
    if (!stopped || !startupDone || inputs.size || released) return;
    released = true;
    controller.worker.terminate();
    controller.workerMatchDone = null; controller.workerTrackDone = null;
    const tensors = new Set<Tensor>();
    Object.values(controller.cropDetector.detector.tensorCaches).forEach(cache => Object.values(cache).forEach(t => tensors.add(t)));
    for (const list of [controller.tracker?.featurePointsListT, controller.tracker?.imagePixelsListT, controller.tracker?.imagePropertiesListT]) list?.forEach(t => tensors.add(t));
    tensors.forEach(t => { if (!t.isDisposedInternal) t.dispose(); });
    tf.backend().disposeData(controller.inputLoader.tempPixelHandle.dataId);
    controller.inputLoader.context.canvas.width = controller.inputLoader.context.canvas.height = 0;
  };
  const load = controller.inputLoader.loadInput.bind(controller.inputLoader);
  controller.inputLoader.loadInput = video => {
    const tensor = load(video), dispose = tensor.dispose.bind(tensor);
    inputs.add(tensor);
    tensor.dispose = () => { dispose(); inputs.delete(tensor); release(); };
    return tensor;
  };
  const process = controller.processVideo.bind(controller);
  controller.processVideo = video => { if (!stopped) process(video); };
  const match = controller._workerMatch.bind(controller), track = controller._workerTrackUpdate.bind(controller);
  controller._workerMatch = (...args) => stopped ? Promise.resolve({ targetIndex: -1, modelViewTransform: null }) : match(...args);
  controller._workerTrackUpdate = (...args) => stopped ? Promise.resolve(null) : track(...args);
  return {
    stop() {
      stopped = true; controller.stopProcessVideo();
      controller.workerMatchDone?.({ targetIndex: -1, modelViewTransform: null });
      controller.workerTrackDone?.({ modelViewTransform: null });
      release();
    },
    ready() { startupDone = true; release(); },
    snapshot: () => ({ released, pendingInputs: inputs.size }),
  };
}
