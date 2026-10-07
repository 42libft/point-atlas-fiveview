"""Create audited, reproducible source/web ZIPs; no publishing or network access."""
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import zipfile

root = Path(__file__).resolve().parent.parent
version = json.loads((root / 'package.json').read_text())['version']
output = Path(sys.argv[1] if len(sys.argv) > 1 else root / '.cache/release').resolve()
output.mkdir(parents=True, exist_ok=True)
for kind in ('source', 'dist'):
    subprocess.run(['node', 'tools/audit-generic-' + kind + '.mjs'], cwd=root, check=True)
source = output / ('point-atlas-fiveview-' + version + '-source.zip')
subprocess.run([sys.executable, str(root / 'tools/package-source.py'), str(source)], cwd=root, check=True)
web = output / ('point-atlas-fiveview-' + version + '-web.zip')
with zipfile.ZipFile(web, 'w', compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
    for path in sorted((root / 'dist').rglob('*')):
        if not path.is_file():
            continue
        info = zipfile.ZipInfo('point-atlas-fiveview-web/' + path.relative_to(root / 'dist').as_posix(), date_time=(2026, 10, 7, 0, 0, 0))
        info.create_system = 3
        info.external_attr = 0o100644 << 16
        info.compress_type = zipfile.ZIP_DEFLATED
        archive.writestr(info, path.read_bytes(), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
rows = [{'file': path.name, 'bytes': path.stat().st_size, 'sha256': hashlib.sha256(path.read_bytes()).hexdigest()} for path in (source, web)]
(output / 'SHA256SUMS.txt').write_text(''.join(row['sha256'] + '  ' + row['file'] + '\n' for row in rows))
print(json.dumps(rows, indent=2))
