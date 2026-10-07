"""Headless release checks with a generated canvas camera; never uses a real camera.

Requires an existing Playwright Python and Chrome installation. Uses loopback only.
No camera permissions are granted; getUserMedia is replaced before the app loads.
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
    raise SystemExit('Use a loopback preview URL.')
chrome = os.environ.get('CHROME_PATH')
if not chrome:
    raise SystemExit('Set CHROME_PATH to an existing Chrome/Chromium executable.')
output = Path(os.environ.get('EVIDENCE_DIR', '.cache/release-browser'))
output.mkdir(parents=True, exist_ok=True)
report = {'scope': 'Synthetic canvas camera and headless release UI; no physical camera, iPhone or printed target', 'passed': False, 'cases': [], 'errors': []}
started = monotonic()

def record(name, details=None):
    report['cases'].append({'name': name, 'passed': True, 'details': details})
    print(name + ': passed', flush=True)

camera_script = '''(() => {
 if(!navigator.mediaDevices)return;
 const canvas=document.createElement('canvas');canvas.width=960;canvas.height=720;
 const x=canvas.getContext('2d');let image=null,blank=false,mode='immediate';const streams=[],pending=[];
 const draw=()=>{x.fillStyle='#dddddd';x.fillRect(0,0,960,720);if(image&&!blank)x.drawImage(image,180,60,600,600);};
 setInterval(draw,67);draw();
 let calls=0;
 navigator.mediaDevices.getUserMedia=async()=>{
  calls++;if(mode==='reject')throw new DOMException('Synthetic rejection','NotAllowedError');
  const stream=canvas.captureStream(15);streams.push(stream);
  if(mode==='delay')return new Promise((resolve,reject)=>pending.push({resolve:()=>resolve(stream),reject:()=>{stream.getTracks().forEach(t=>t.stop());reject(new DOMException('Synthetic delayed rejection','NotAllowedError'));}}));
  return stream;
 };
 window.__SYNTHETIC_CAMERA__={
  load:async(src)=>{image=new Image();image.src=src;await image.decode();draw();},
  blank:(value)=>{blank=value;draw();},mode:(value)=>{mode=value;},resolve:()=>pending.splice(0).forEach(item=>item.resolve()),reject:()=>pending.splice(0).forEach(item=>item.reject()),
  snapshot:()=>({calls,tracks:streams.flatMap(s=>s.getTracks().map(t=>t.readyState)),pending:pending.length})
 };
})();'''

try:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(executable_path=chrome, headless=True, chromium_sandbox=True)
        report['browser'] = browser.version
        context = browser.new_context(viewport={'width': 1360, 'height': 950}, reduced_motion='reduce', accept_downloads=True)
        context.add_init_script(camera_script)
        context.on('page', lambda page: page.on('pageerror', lambda error: report['errors'].append(str(error))))
        page = context.new_page()
        response = page.goto(url + '/')
        assert response.status == 200
        for width in (390, 1360):
            page.set_viewport_size({'width': width, 'height': 950})
            assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1')
        page.screenshot(path=str(output / 'start-page.png'), full_page=True)
        page.locator('#open-demo').click()
        page.wait_for_function('window.__ATLAS__?.ready', timeout=60000)
        assert page.evaluate('window.__ATLAS__.projectObject().contrast') == 'ink'
        assert page.evaluate('window.__ATLAS__.projectObject().sampling') == 'raster'
        assert page.evaluate('window.__ATLAS__.projectObject().background') == 'light'
        for i, face in enumerate(('top', 'front', 'right', 'back', 'left')):
            page.locator('[data-view="' + face + '"]').click()
            assert abs(page.evaluate('window.__ATLAS__.snapshot().weights')[i] - 1) < 1e-6
        assert page.evaluate('window.__SYNTHETIC_CAMERA__.snapshot().calls') == 0
        record('landing page, mobile width and five-view contrast demo without camera access')
        for face, text in zip(('top', 'front', 'right', 'back', 'left'), ('○', 'HELLO', '五', '42', '◇')):
            page.locator('#text-' + face).fill(text)
        page.locator('#apply').click()
        page.locator('#budget').select_option('4096')
        with page.expect_download() as saved:
            page.locator('#save').click()
        saved.value.save_as(output / 'synthetic-project.json')
        project = (output / 'synthetic-project.json').read_bytes()
        page.locator('#reset').click()
        page.locator('#project-file').set_input_files({'name': 'synthetic-project.json', 'mimeType': 'application/json', 'buffer': project})
        page.wait_for_function('window.__ATLAS__.projectObject().masks[1].label === "HELLO"')
        assert json.loads(page.evaluate('window.__ATLAS__.project()')) == json.loads(project)
        page.locator('[data-view="front"]').click()
        page.screenshot(path=str(output / 'demo.png'), full_page=True)
        record('new demo supports arbitrary text and JSON download/load roundtrip')
        ar = context.new_page()
        ar.goto(url + '/atlas-ar.html')
        ar.wait_for_function('!!window.__ATLAS_EXPORT__')
        ar.locator('#sample').click()
        ar.wait_for_function('!document.querySelector("#save-image").disabled')
        with ar.expect_download() as saved:
            ar.locator('#save-image').click()
        saved.value.save_as(output / 'recognition-image.png')
        image_bytes = (output / 'recognition-image.png').read_bytes()
        image_url = 'data:image/png;base64,' + base64.b64encode(image_bytes).decode()
        ar.locator('#target').set_input_files({'name': 'invalid.png', 'mimeType': 'image/png', 'buffer': b'invalid'})
        ar.wait_for_function('document.querySelector("#status").textContent.includes("Error")')
        assert ar.evaluate('document.querySelector("#target-preview").naturalWidth') == 720
        record('recognition-image PNG download and corrupt-image rejection preserve the valid image')
        wide = ar.evaluate('''() => {const c=document.createElement('canvas');c.width=1440;c.height=720;c.getContext('2d').drawImage(document.querySelector('#target-preview'),0,0,1440,720);return c.toDataURL().split(',')[1];}''')
        ar.locator('#target').set_input_files({'name': 'wide-synthetic.png', 'mimeType': 'image/png', 'buffer': base64.b64decode(wide)})
        ar.wait_for_function('document.querySelector("#target-preview").naturalWidth === 1440')
        with ar.expect_download() as wide_saved:
            ar.locator('#save-image').click()
        wide_saved.value.save_as(output / 'wide-recognition-image.png')
        normalized = base64.b64encode((output / 'wide-recognition-image.png').read_bytes()).decode()
        size = ar.evaluate('''async (base64) => {const image=new Image();image.src='data:image/png;base64,'+base64;await image.decode();return [image.naturalWidth,image.naturalHeight];}''', normalized)
        assert size == [720, 360]
        ar.locator('#target').set_input_files({'name': 'recognition-image.png', 'mimeType': 'image/png', 'buffer': image_bytes})
        ar.wait_for_function('document.querySelector("#target-preview").naturalWidth === 720')
        record('custom image download preserves aspect ratio and limits the long edge to 720 pixels')
        ar.locator('#project').set_input_files({'name': 'synthetic-project.json', 'mimeType': 'application/json', 'buffer': project})
        ar.locator('#compile').click()
        assert ar.locator('#sample').is_disabled() and ar.locator('#target').is_disabled()
        ar.wait_for_function('!document.querySelector("#save-target").disabled', timeout=120000)
        with ar.expect_download() as saved:
            ar.locator('#save-target').click()
        saved.value.save_as(output / 'synthetic-target.mind')
        target = (output / 'synthetic-target.mind').read_bytes()
        record('real pinned compiler generates a target from the downloadable recognition image', {'bytes': len(target)})
        # Navigation closes the compiler realm. There is no in-page cancel API in this release.
        ar.locator('#compile').click()
        ar.wait_for_function('document.querySelector("#status").textContent.includes("%")', timeout=60000)
        ar.reload()
        ar.wait_for_function('!!window.__ATLAS_EXPORT__')
        assert ar.locator('#compile').is_enabled()
        ar.locator('#project').set_input_files({'name': 'synthetic-project.json', 'mimeType': 'application/json', 'buffer': project})
        ar.locator('#mind-file').set_input_files({'name': 'synthetic-target.mind', 'mimeType': 'application/octet-stream', 'buffer': target})
        ar.wait_for_function('!document.querySelector("#start").disabled')
        record('reloading during compilation allows a fresh page and saved-project/target recovery')
        ar.evaluate('(src) => window.__SYNTHETIC_CAMERA__.load(src)', image_url)
        ar.evaluate('window.__SYNTHETIC_CAMERA__.mode("reject")')
        ar.locator('#start').click()
        ar.wait_for_function('document.querySelector("#status").textContent.includes("Synthetic rejection")', timeout=60000)
        assert ar.locator('#start').is_enabled()
        assert ar.locator('#ar-stage canvas, #ar-stage video').count() == 0
        record('synthetic camera rejection returns controls and removes rendering resources')
        ar.evaluate('window.__SYNTHETIC_CAMERA__.mode("delay")')
        ar.locator('#start').click()
        ar.wait_for_function('window.__SYNTHETIC_CAMERA__.snapshot().pending === 1', timeout=60000)
        ar.evaluate('window.__SYNTHETIC_CAMERA__.reject()')
        ar.wait_for_function('document.querySelector("#status").textContent.includes("Synthetic delayed rejection")')
        assert ar.locator('#start').is_enabled()
        assert ar.locator('#ar-stage canvas, #ar-stage video').count() == 0
        record('delayed synthetic camera rejection recovers without a stranded video or canvas')
        ar.locator('#start').click()
        ar.wait_for_function('window.__SYNTHETIC_CAMERA__.snapshot().pending === 1', timeout=60000)
        ar.locator('#stop').click()
        assert ar.locator('#start').is_enabled()
        ar.evaluate('window.__SYNTHETIC_CAMERA__.mode("immediate")')
        ar.locator('#start').click()
        ar.wait_for_function('window.__ATLAS_AR__?.snapshot().started === true', timeout=90000)
        ar.evaluate('window.__SYNTHETIC_CAMERA__.resolve()')
        ar.wait_for_function('window.__SYNTHETIC_CAMERA__.snapshot().tracks.slice(0,-1).every(state=>state==="ended")')
        assert ar.evaluate('window.__ATLAS_AR__.snapshot().stopped') is False
        assert ar.locator('#gate').is_hidden()
        record('stop during delayed permission and late grant do not reopen or overwrite a newer session')
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().visible === true', timeout=90000)
        ar.screenshot(path=str(output / 'synthetic-camera-tracking.png'), full_page=True)
        record('real MindAR recognizes the generated image in a synthetic canvas camera')
        ar.evaluate('window.__SYNTHETIC_CAMERA__.blank(true)')
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().visible === false', timeout=60000)
        ar.evaluate('window.__SYNTHETIC_CAMERA__.blank(false)')
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().visible === true', timeout=90000)
        record('real tracker loses a blank synthetic frame and reacquires the generated image')
        ar.locator('#stop').click()
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().resources?.released === true', timeout=30000)
        assert ar.locator('#ar-stage canvas, #ar-stage video').count() == 0
        assert all(state == 'ended' for state in ar.evaluate('window.__SYNTHETIC_CAMERA__.snapshot().tracks'))
        record('stop ends all synthetic camera tracks and releases the owned controller')
        ar.locator('#start').click()
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().started === true && !window.__ATLAS_AR__.snapshot().stopped', timeout=90000)
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().visible === true', timeout=90000)
        record('a second actual tracker session starts and recognizes the same synthetic target')
        ar.evaluate('''() => {const c=document.querySelector('#ar-stage canvas');const gl=c.getContext('webgl2')||c.getContext('webgl');const ext=gl.getExtension('WEBGL_lose_context');if(!ext)throw Error('No context-loss extension');ext.loseContext();}''')
        ar.wait_for_function('document.querySelector("#status").textContent.includes("描画が中断")')
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().resources?.released === true', timeout=30000)
        assert ar.locator('#start').is_enabled()
        assert all(state == 'ended' for state in ar.evaluate('window.__SYNTHETIC_CAMERA__.snapshot().tracks'))
        ar.locator('#start').click()
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().started === true && !window.__ATLAS_AR__.snapshot().stopped', timeout=90000)
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().visible === true', timeout=90000)
        ar.locator('#stop').click()
        ar.wait_for_function('window.__ATLAS_AR__.snapshot().resources?.released === true', timeout=30000)
        record('AR render context loss cleans up and permits a fresh tracking session')
        browser.close()
        assert not report['errors'], report['errors']
        report['passed'] = True
except Exception as error:
    report['failure'] = str(error)
finally:
    report['durationSeconds'] = round(monotonic() - started, 3)
    (output / 'browser-release.json').write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps(report, ensure_ascii=False), flush=True)
if not report['passed']:
    raise SystemExit(1)
