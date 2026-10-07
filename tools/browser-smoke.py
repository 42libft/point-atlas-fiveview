"""Optional headless QA with an existing Playwright installation and Chrome.

Uses only loopback pages and self-created input. It does not start a real camera.
This check is separate from the locked npm build/unit tests.
"""
import base64
import json
import os
from pathlib import Path
from time import monotonic
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright

url = os.environ.get('ATLAS_URL', 'http://127.0.0.1:4186').rstrip('/')
if urlparse(url).hostname not in ('localhost', '127.0.0.1', '::1'):
    raise SystemExit('Use a loopback preview URL; this check does not publish or inspect remote sites.')
chrome = os.environ.get('CHROME_PATH')
if not chrome:
    raise SystemExit('Set CHROME_PATH to an existing Chrome/Chromium executable.')
output = Path(os.environ.get('EVIDENCE_DIR', '.cache/browser'))
output.mkdir(parents=True, exist_ok=True)
report = {'scope': 'Headless synthetic-input UI and WebGL; no physical AR or camera',
          'passed': False, 'cases': [], 'errors': [], 'failed_requests': [], 'http_failures': []}
started = monotonic()

def record(name, details=None):
    report['cases'].append({'name': name, 'passed': True, 'details': details})
    print(name + ': passed', flush=True)

def track(page):
    page.on('pageerror', lambda error: report['errors'].append(str(error)))
    page.on('console', lambda msg: report['errors'].append(msg.text) if msg.type == 'error' else None)
    page.on('requestfailed', lambda request: report['failed_requests'].append({'url': request.url, 'reason': request.failure}))
    page.on('response', lambda response: report['http_failures'].append({'url': response.url, 'status': response.status}) if response.status >= 400 else None)

try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(executable_path=chrome, headless=True, chromium_sandbox=True)
        report['browser'] = browser.version
        context = browser.new_context(viewport={'width': 1440, 'height': 1000}, reduced_motion='reduce', accept_downloads=True)
        page = context.new_page()
        track(page)
        if urlparse(url).path.strip('/'):
            page.goto(urlparse(url).scheme + '://' + urlparse(url).netloc + '/atlas.html')
            page.wait_for_function('window.__ATLAS__?.ready === true', timeout=60000)
            record('root installation starts before subdirectory inspection')
        page.goto(url + '/atlas.html')
        page.wait_for_function('window.__ATLAS__?.ready === true', timeout=60000)
        initial = page.evaluate('window.__ATLAS__.snapshot()')
        assert initial['pointCount'] == 28672 and initial['renderCalls'] == 1
        assert page.evaluate('document.fonts.check("700 120px Plex")')
        assert not page.locator('[data-mode="original"]').count()
        record('editor starts and draws one generic point cloud', {'pointCount': initial['pointCount'], 'renderCalls': initial['renderCalls']})
        for mode in ('galaxy', 'morph', 'shell', 'hull'):
            page.locator('[data-mode="' + mode + '"]').click()
            page.wait_for_function('(mode) => window.__ATLAS__.snapshot().mode === mode', arg=mode)
            for index, face in enumerate(('top', 'front', 'right', 'back', 'left')):
                page.locator('[data-view="' + face + '"]').click()
                weights = page.evaluate('window.__ATLAS__.snapshot().weights')
                assert abs(weights[index] - 1) < 1e-6, (mode, face, weights)
            record(mode + ' exposes all five one-hot view directions')
        page.locator('[data-mode="galaxy"]').click()
        page.locator('#viewing').select_option('raised')
        for index, face in enumerate(('top', 'front', 'right', 'back', 'left')):
            page.locator('[data-view="' + face + '"]').click()
            weights = page.evaluate('window.__ATLAS__.snapshot().weights')
            assert abs(weights[index] - 1) < 1e-6
        record('raised reading ring preserves all five directions')
        values = ('◎', 'ALPHA', '五方向', 'B+7', '◆')
        for face, value in zip(('top', 'front', 'right', 'back', 'left'), values):
            page.locator('#text-' + face).fill(value)
        page.locator('#apply').click()
        page.wait_for_function('document.querySelector("#apply").disabled === false')
        project = page.evaluate('JSON.parse(window.__ATLAS__.project())')
        assert [mask['label'] for mask in project['masks']] == list(values)
        assert all(sum(mask['pixels']) > 0 for mask in project['masks'])
        record('arbitrary Latin, Japanese and symbol inputs are rasterized')
        png = page.evaluate('''() => {
          const c=document.createElement('canvas'); c.width=640; c.height=160;
          const x=c.getContext('2d'); x.fillStyle='white'; x.fillRect(0,0,640,160);
          x.fillStyle='black'; x.beginPath(); x.moveTo(40,50); x.lineTo(390,50);
          x.lineTo(390,20); x.lineTo(600,80); x.lineTo(390,140); x.lineTo(390,110);
          x.lineTo(40,110); x.closePath(); x.fill(); return c.toDataURL().split(',')[1];
        }''')
        page.locator('#file-right').set_input_files({'name': 'self-created-arrow.png', 'mimeType': 'image/png', 'buffer': base64.b64decode(png)})
        page.wait_for_function('window.__ATLAS__.projectObject().masks[2].label === "self-created-arrow.png"')
        record('self-created raster logo input is accepted and normalized')
        with page.expect_download() as saved:
            page.locator('#save').click()
        saved.value.save_as(output / 'synthetic-project.json')
        before = page.evaluate('JSON.parse(window.__ATLAS__.project())')
        page.locator('#budget').select_option('4096')
        page.locator('#project-file').set_input_files({'name': 'synthetic-project.json', 'mimeType': 'application/json', 'buffer': (output / 'synthetic-project.json').read_bytes()})
        page.wait_for_function('window.__ATLAS__.projectObject().budget === 28672')
        assert page.evaluate('JSON.parse(window.__ATLAS__.project())') == before
        record('UI JSON save/load roundtrip preserves all masks and settings')
        layout = page.evaluate('window.__ATLAS__.snapshot().layoutHash')
        page.locator('#contrast').select_option('ink')
        page.locator('#background').select_option('light')
        page.locator('#emphasis').select_option('figure')
        assert page.evaluate('window.__ATLAS__.snapshot().layoutHash') == layout
        assert page.evaluate('window.__ATLAS__.projectObject().contrast') == 'ink'
        assert page.evaluate('window.__ATLAS__.projectObject().emphasis') == 'figure'
        record('ordinary contrast and figure controls preserve input geometry')
        page.locator('#sampling').select_option('raster')
        assert page.evaluate('window.__ATLAS__.snapshot().layoutHash') != layout
        assert page.evaluate('window.__ATLAS__.projectObject().sampling') == 'raster'
        record('direct raster reading changes membership without replacing user input')
        page.locator('[data-view="right"]').click()
        page.screenshot(path=str(output / 'high-contrast-logo.png'), full_page=True)
        page.locator('[data-view="front"]').click()
        page.screenshot(path=str(output / 'desktop.png'), full_page=True)
        for width, height, filename in ((390, 844, 'mobile.png'), (768, 1024, 'tablet.png')):
            page.set_viewport_size({'width': width, 'height': height})
            page.wait_for_timeout(150)
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
            page.screenshot(path=str(output / filename), full_page=True)
            record(str(width) + 'px responsive layout has no horizontal overflow')
        ar = context.new_page()
        track(ar)
        ar.goto(url + '/atlas-ar.html')
        ar.locator('#project').set_input_files({'name': 'synthetic-project.json', 'mimeType': 'application/json', 'buffer': (output / 'synthetic-project.json').read_bytes()})
        ar.locator('#pose').click()
        ar.wait_for_function('!!window.__ATLAS_POSE__')
        for index, direction in enumerate(((0, 1, 0), (0, 0, 1), (1, 0, 0), (0, 0, -1), (-1, 0, 0))):
            ar.evaluate('(d) => window.__ATLAS_POSE__.view(d)', list(direction))
            actual = ar.evaluate('window.__ATLAS_POSE__.snapshot().direction')
            assert all(abs(actual[i] - direction[i]) < 1e-6 for i in range(3))
        ar.screenshot(path=str(output / 'pose.png'), full_page=True)
        ar.locator('#stop').click()
        assert ar.locator('#gate').is_visible()
        record('camera-free AR pose draws and stops')
        ar.locator('#sample').click()
        ar.wait_for_function('document.querySelector("#target-preview").naturalWidth === 720')
        ar.locator('#compile').click()
        ar.wait_for_function('document.querySelector("#save-target").disabled === false', timeout=120000)
        compiled_size = ar.evaluate('window.__ATLAS_EXPORT__.snapshot().targetBytes')
        assert compiled_size > 1000
        with ar.expect_download() as target:
            ar.locator('#save-target').click()
        target.value.save_as(output / 'synthetic-target.mind')
        ar.locator('#mind-file').set_input_files({'name': 'synthetic-target.mind', 'mimeType': 'application/octet-stream', 'buffer': (output / 'synthetic-target.mind').read_bytes()})
        ar.wait_for_function('document.querySelector("#status").textContent.includes("読み込みました")')
        assert ar.evaluate('window.__ATLAS_EXPORT__.snapshot().targetBytes') == compiled_size
        record('real pinned Compiler generates, saves and reloads a synthetic target', {'bytes': compiled_size})
        ar.locator('#mind-file').set_input_files({'name': 'invalid.mind', 'mimeType': 'application/octet-stream', 'buffer': bytes([0xc1])})
        ar.wait_for_function('document.querySelector("#status").textContent.includes("MindAR v2")')
        assert ar.evaluate('window.__ATLAS_EXPORT__.snapshot().targetBytes') == compiled_size
        record('malformed target leaves the usable target unchanged')
        ar.screenshot(path=str(output / 'ar-preparation.png'), full_page=True)
        browser.close()
        assert not report['errors'], report['errors']
        assert not report['failed_requests'], report['failed_requests']
        assert not report['http_failures'], report['http_failures']
        report['passed'] = True
except Exception as error:
    report['failure'] = str(error)
finally:
    report['durationSeconds'] = round(monotonic() - started, 3)
    (output / 'browser-smoke.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({key: report[key] for key in ('passed', 'cases', 'errors', 'failed_requests', 'http_failures', 'durationSeconds')}, ensure_ascii=False), flush=True)
if not report['passed']:
    raise SystemExit(1)
