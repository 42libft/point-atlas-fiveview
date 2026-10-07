# Point Atlas Fiveview

A local, experimental point-cloud authoring tool. Assign your own text, logo or raster image to five views—top, front, right, back and left—then inspect the result in WebGL or prepare image-target AR. The interface is in Japanese.

[日本語の使い方](README.ja.md) · [Verification](docs/VERIFICATION.md) · [Third-party notices](public/THIRD_PARTY_NOTICES.txt)

The application code is MIT licensed. The bundled font and dependencies retain their respective licenses. Sample shapes and the sample recognition image are generated in code; no precompiled tracking target or artwork image is bundled.

## Try it without installing Node.js

Open the **[HTTPS demo](https://42libft.github.io/point-atlas-fiveview/)** and choose **Try demo**. The generated sample uses ink on a light background. Use the five direction buttons, replace the text or upload your own logo, and save your project as JSON. The page does not start a camera automatically.

The **[v0.1.1 experimental release](https://github.com/42libft/point-atlas-fiveview/releases/tag/v0.1.1)** provides a source ZIP, a prebuilt web ZIP and `SHA256SUMS.txt`. The interface and detailed on-page steps are Japanese; an English quick start is included on the landing page.

To run the web ZIP without a build, extract it and use an already installed Python 3:

```sh
cd point-atlas-fiveview-web
python3 -m http.server 8000 --bind 127.0.0.1
```

Open **http://127.0.0.1:8000/**. Keep all extracted files together. Double-clicking the HTML is unsupported. This loopback address works on the server device; use the HTTPS demo on a separate phone.

## Run locally

Use Node.js 22 or newer and npm. Node 24.6.0 and npm 11.5.1 were used for verification. Dependencies are pinned in `package-lock.json`; installation scripts are disabled.

```sh
git clone https://github.com/42libft/point-atlas-fiveview.git
cd point-atlas-fiveview
node tools/audit-generic-source.mjs
mkdir -p .cache
touch .cache/npm-userconfig .cache/npm-globalconfig
npm ci --ignore-scripts --no-audit --no-fund --cache .cache/npm --userconfig .cache/npm-userconfig --globalconfig .cache/npm-globalconfig --registry https://registry.npmjs.org
npm run verify
npm run preview -- --port 4186
```

Open **http://127.0.0.1:4186/** for the guide, **http://127.0.0.1:4186/atlas.html** for the editor or **http://127.0.0.1:4186/atlas-ar.html** for AR preparation. The server binds to loopback. For development, use `npm run dev` and its printed local URL with `/atlas.html`.

`npm run verify` runs unit tests, audit rejection tests, TypeScript, the production build and source/build audits. Run `node tools/audit-generic-source.mjs --strict` before installing dependencies when checking a fresh source ZIP. Strict archive mode rejects Git metadata, cache, dependencies and build output; normal checkout mode skips those local working directories.

## Create and save a project

1. Enter short text in each direction field, or choose PNG, JPEG or WebP images. Select dark pixels, light pixels or nontransparent pixels and adjust the threshold. Press **入力を反映** to apply.
2. Choose **銀河** (view-dependent point colors), **形を変える** (morph), **固定した器** (fixed surfaces) or **投影の交差** (visual hull). Drag to orbit, scroll to zoom, or use the direction buttons.
3. Adjust the point budget, depth, reveal angle, background and colors. Galaxy mode also supports direct raster sampling, figure emphasis and a raised reading angle.
4. **プロジェクト保存** downloads JSON; **開く** restores it. JSON includes normalized masks, labels and settings, not the original image bytes. Check labels before sharing. PLY export is available for fixed-surface and visual-hull geometry.

## Prepare custom image-target AR

1. Choose **AR出力** from the editor, or open the AR page and load a project JSON.
2. Select your own detailed, flat recognition image or choose **自作ターゲットを使う** for a generated sample. **認識画像を保存** downloads the PNG used for compilation (at most 720 pixels on its longest side). Choose **ターゲットを生成**, then save the `.mind` file for reuse.
3. Print or display the **same image** used to compile that target. Use HTTPS or localhost and choose **ARを始める** to request camera access. **終了** ends the session, including while waiting for camera permission.
4. **カメラなしで姿勢確認** checks the coordinate mapping without starting a camera. It does not verify image recognition or physical AR tracking.

Text/image processing, compilation and tracking run on the device. There is no analytics endpoint, input-upload API, account requirement or API key. Initial dependency installation uses the npm registry. Once built, the app uses local static assets. The editor stores the current project in the browser for transfer to the AR page.

## Limits

- **Physical AR, iPhone/Safari, printed targets and sustained heat/performance have not been verified.** Headless WebGL and synthetic-input tests are not a substitute for those checks.
- Text accepts up to 40 characters, but short words and thick shapes work best. Thin strokes, isolated points, dense Japanese text, long strings and photographic outlines may lose detail. Readability is not guaranteed.
- Raster inputs are limited to 8 MB and 32 million pixels and become 256×256 masks. Full-color reproduction and direct SVG input are unsupported. Missing characters in IBM Plex Sans JP Bold depend on browser fallback.
- Point budgets are 4,096, 12,000 and 28,672. Opposing projections of a fixed shape are mirrored; five arbitrary independent images may not form a valid visual hull. Intermediate views blend information; the bottom view falls back to the top.
- Default colors can appear faint. Try ink on a light background or chalk on a dark background and figure emphasis. Preview backgrounds do not replace the camera image in AR.
- MindAR must keep seeing the recognition image. Oblique views and walking around it can lose tracking. The displayed geometric angle is not a tracking-success estimate.
- Cleanup code targets MindAR 1.2.5. There is no in-page compiler cancellation: reload the page and reload your saved project/target to recover. Synthetic camera rejection, delayed permission, tracking loss/recovery and render-context loss are checked separately; memory exhaustion and internal TensorFlow failures are not covered. Font and compiler assets are large; Vite reports a large-chunk warning.

## Build and distribute

`npm run build` writes the static application to `dist/`. Serve that whole directory, including `licenses/` and `THIRD_PARTY_NOTICES.txt`. Relative asset URLs support subdirectory installation. Camera use requires HTTPS or localhost.

`python3 tools/package-release.py` audits the current source/build and creates versioned source/web ZIPs plus SHA-256 checksums in `.cache/release/`. It does not publish them.

`python3 tools/package-source.py` creates `.cache/point-atlas-fiveview-source.zip` from the explicit source allowlist. It excludes Git history, OS metadata, cache, installed dependencies and generated output. Python 3.9+ is needed only for this packaging helper. The optional headless browser check is described in [verification](docs/VERIFICATION.md).

`private: true` in `package.json` prevents accidental npm publication; it does not restrict the MIT license. See [LICENSE](LICENSE), [third-party notices](public/THIRD_PARTY_NOTICES.txt) and [remaining validation work](docs/RELEASE_CHECKLIST.md). User-supplied text and images remain subject to their own rights.
