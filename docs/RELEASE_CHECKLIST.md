# Remaining validation work

This experimental release has automated source, build and synthetic-input checks. The following physical-device and failure-recovery checks remain open. They are not claimed as completed by the release.

- [ ] iPhone / Safari and other physical browsers: camera permission, rejection, delayed permission, start, stop, restart and screen rotation.
- [ ] Printed and displayed targets: oblique recognition, tracking loss and reacquisition, and moving through all five reading directions.
- [ ] At least five minutes of continuous rendering and repeated sessions: heat, frame time, GPU and TensorFlow resource use.
- [ ] Readability of thin strokes, isolated points, dense Japanese text, long text and photographic outlines.
- [ ] Compiler failure/cancellation, memory exhaustion and recovery from WebGL or TensorFlow failures.
- [ ] Initial transfer and startup cost of the large font and compiler bundles on mobile connections.

For each future release, run the source audit, pinned dependency installation and `npm run verify` from a fresh checkout; package from the allowlist and audit the freshly extracted source ZIP with `--strict`. Preserve the project LICENSE, third-party notices and font license. Check new files and commit metadata for private information before pushing.
