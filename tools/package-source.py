"""Package only the reviewed source policy; never include cache or Git metadata."""
import hashlib
import json
from pathlib import Path, PurePosixPath
import sys
import zipfile

root = Path(__file__).resolve().parent.parent
policy = json.loads((root / 'tools/source-policy.json').read_text())
output = Path(sys.argv[1] if len(sys.argv) > 1 else root / '.cache/point-atlas-fiveview-source.zip')
output.parent.mkdir(parents=True, exist_ok=True)
for name in policy['files']:
    portable = PurePosixPath(name)
    if portable.is_absolute() or any(part in ('.', '..', 'node_modules', '.cache', 'dist', '.git', '.aws', '.codex', '.agents') for part in portable.parts):
        raise SystemExit('Unsafe source policy path: ' + name)
    path = root / name
    if path.is_symlink() or not path.is_file() or not path.resolve().is_relative_to(root):
        raise SystemExit('Not a regular project file: ' + name)
with zipfile.ZipFile(output, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for name in sorted(policy['files']):
        info = zipfile.ZipInfo('point-atlas-fiveview/' + name, date_time=(2026, 10, 7, 0, 0, 0))
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        info.compress_type = zipfile.ZIP_DEFLATED
        archive.writestr(info, (root / name).read_bytes(), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
data = output.read_bytes()
print(json.dumps({'file': output.name, 'files': len(policy['files']), 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}))
