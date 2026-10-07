# Verification

The publication candidate was checked on 2026-10-07. These results describe automated and headless checks of this source, not physical AR tracking.

| Check | Result |
| --- | --- |
| Unit tests | 94 passed across 16 files |
| Audit tests | 11 passed, including rejection of excluded assets, external local imports, private paths, credentials, internal workflow identifiers, personal emails, altered font, license mismatch and unexpected build assets |
| TypeScript and Vite | Passed; 26 static build files totaling 8,490,516 bytes |
| Source and build audits | No findings; 82 files in the source allowlist |
| Headless UI / WebGL | 17 checks passed; no page exceptions, failed requests or HTTP errors |
| Real MindAR Compiler | Generated, saved and reloaded a 512,388-byte target from a generated image |

Environment: arm64 macOS, Node.js 24.6.0, npm 11.5.1, Chrome 155.0.8059.39, Playwright Python 1.54.0 and Python 3.11.7. Pinned dependencies were installed using `npm ci --ignore-scripts`. The production build reports a large-chunk warning; the font and compiler remain large downloads.

The headless checks cover root and subdirectory installation, all five views in each of four modes, the raised reading angle, arbitrary Latin/Japanese/symbol inputs, a generated raster logo, UI JSON save/load, ordinary color and figure controls, raster sampling, 390/768 px widths, camera-free pose rendering and stopping, real target compilation, and rejecting malformed targets while preserving the current valid target. Test MessagePack fixtures only check the input schema; they are separate from the real compiler check.

Default colors can produce faint text. Ink on a light background and figure emphasis made the synthetic text/logo easier to read. This is not a readability guarantee for arbitrary inputs.

## Repeat the checks

Follow the pinned installation and `npm run verify` steps in the README. Source ZIPs contain only `tools/source-policy.json` entries. Strict archive mode rejects local Git metadata and generated files. Normal checkout mode skips root Git metadata, cache, dependencies and build output while auditing the source files.

```sh
npm run test:audit
npm run audit:source
npm run audit:dist
python3 tools/package-source.py
```

To inspect the packaged source independently, extract the ZIP into a fresh directory and run `node tools/audit-generic-source.mjs --strict` there before dependency installation.

## Optional headless check

Use an already installed Playwright Python package and Chrome/Chromium. This check uses a temporary browser profile, synthetic inputs and no real camera. Start the preview server in one terminal:

```sh
npm run preview -- --port 4186
```

Then run in another terminal:

```sh
ATLAS_URL=http://127.0.0.1:4186 CHROME_PATH=/absolute/path/to/chrome python3 tools/browser-smoke.py
```

The script writes local evidence to `.cache/browser/`; it is excluded from the source package. The subdirectory deployment check can be run against a loopback static server that maps a subdirectory to the same `dist/` contents.

## Not verified

No camera was started by the headless check. Physical iPhone/Safari, printed targets, recognition loss/recovery, walking around all five directions, long-running heat/performance and GPU/TensorFlow resource measurements remain unverified. See [remaining validation work](RELEASE_CHECKLIST.md).
