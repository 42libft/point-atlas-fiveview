import { readdir, readFile, lstat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve, relative, dirname, sep } from 'node:path';

export const FONT_SHA256 = '1bc9fabb696915df66f59f99fe450b21fa1d6e48749213d182b173367832a118';
const originalAssets = /typography-targets\.(?:bin|json)|null2-typography-targets|print-pages-v1|flow-v1\.mind|type-v1\.mind|42libft\.github\.io(?!\/point-atlas-fiveview\/)|work_page_0|approved-ambient-five-direction-typography/;
const originalSource = /typography\/generated|approved-presentation|loadTypographyTargets|__ATLAS_RELEASE__|ALTERNATE_FACE_BY_VIEW|alternateFaceForView|blendAlternateAmbientMembership|vAlternateMembership|uAlternateStrength|ambient-perception|MACHADO_|perceptionPalette|AmbientVisionMode|["']original["']|null²|ぬる/;
const privatePath = /\/Users\/[^\s/]+\/|\/home\/[^\s/]+\/|\/root\/|[A-Z]:\\Users\\/;
const internalReference = /\b(?:libfile_[0-9a-f]{24,}|file_[0-9a-f]{24,}|[0-9a-f]{8}-[0-9a-f]{4}-7[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\b/i;
const emailAddress = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
const secret = /\b(?:sk-(?:proj-)?[A-Za-z0-9_-]{24,}|AKIA[A-Z0-9]{16}|gh[pousr]_[A-Za-z0-9]{30,})|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/;
const forbiddenDirectories = new Set(['.git', '.aws', '.codex', '.agents', '__MACOSX']);
const developmentDirectories = new Set(['node_modules', '.cache', 'dist']);
const dependencyVersions = {
  'mind-ar': '1.2.5', three: '0.160.0', '@msgpack/msgpack': '2.8.0',
  '@types/three': '0.160.0', typescript: '5.8.3', vite: '6.4.3', vitest: '3.2.7',
};
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const portable = value => value.split(sep).join('/');

export async function listFiles(root, { skipDevelopment = false, strict = false } = {}) {
  const files = [], issues = [], skipped = [];
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name), name = portable(relative(root, path));
      const info = await lstat(path);
      if (info.isSymbolicLink()) { issues.push(`Symbolic link is not distributable: ${name}`); continue; }
      // A checkout needs its local Git metadata. Source archives must not contain it.
      if (directory === root && entry.name === '.git' && skipDevelopment && !strict) { skipped.push(name); continue; }
      if (forbiddenDirectories.has(entry.name)) { issues.push(`Private directory: ${name}`); continue; }
      if (directory === root && developmentDirectories.has(entry.name) && skipDevelopment) {
        skipped.push(name); if (strict) issues.push(`Development output in source archive: ${name}`); continue;
      }
      if (info.isDirectory()) await visit(path);
      else if (info.isFile()) files.push({ path: name, bytes: info.size, absolute: path });
      else issues.push(`Unsupported filesystem entry: ${name}`);
    }
  }
  await visit(root);
  return { files: files.sort((a, b) => a.path.localeCompare(b.path)), issues, skipped };
}

function inspectText(path, text, issues, { source = false } = {}) {
  if (originalAssets.test(text)) issues.push(`Original asset or identity reference: ${path}`);
  if (privatePath.test(text)) issues.push(`Personal absolute path: ${path}`);
  if (secret.test(text)) issues.push(`Credential/private-key pattern: ${path}`);
  if (internalReference.test(text)) issues.push(`Private workflow identifier: ${path}`);
  if (!path.startsWith('public/licenses/') && emailAddress.test(text)) issues.push(`Email outside third-party legal notices: ${path}`);
  if (source && originalSource.test(text)) issues.push(`Original entry/glyph/alternate/perception dependency: ${path}`);
}

export async function auditSource(directory, { strict = false } = {}) {
  const root = resolve(directory);
  const walked = await listFiles(root, { skipDevelopment: true, strict });
  const issues = [...walked.issues];
  const policy = JSON.parse(await readFile(resolve(root, 'tools/source-policy.json'), 'utf8'));
  const allowed = new Set(policy.files), present = new Set(walked.files.map(file => file.path));
  for (const path of allowed) if (!present.has(path)) issues.push(`Required source file missing: ${path}`);
  const entries = [];
  for (const file of walked.files) {
    const bytes = await readFile(file.absolute);
    entries.push({ path: file.path, bytes: bytes.length, sha256: hash(bytes) });
    if (!allowed.has(file.path)) issues.push(`Unexpected source file: ${file.path}`);
    if (/\.env(?:\.|$)|\.log$|\.map$|\.mind$|\.bin$|\.zip$|\.DS_Store$|(?:^|\/)targets\//.test(file.path)) issues.push(`Undistributable source asset: ${file.path}`);
    if (file.path === 'LICENSE' || /\.(ts|mjs|py|json|html|css|md|txt)$/.test(file.path)) {
      const text = bytes.toString('utf8');
      if (file.path.startsWith('tools/')) {
        // Audit patterns intentionally name excluded assets; privacy checks still apply.
        if (privatePath.test(text)) issues.push(`Personal absolute path: ${file.path}`);
        if (secret.test(text)) issues.push(`Credential/private-key pattern: ${file.path}`);
        if (internalReference.test(text)) issues.push(`Private workflow identifier: ${file.path}`);
        if (emailAddress.test(text)) issues.push(`Email outside third-party legal notices: ${file.path}`);
      } else inspectText(file.path, text, issues, { source: file.path.startsWith('src/') });
      if (file.path.startsWith('src/') && file.path.endsWith('.ts')) {
        const imports = [...text.matchAll(/\bfrom\s*["']([^"']+)["']|\bimport\s*(?:\(\s*)?["']([^"']+)["']/g)].map(match => match[1] ?? match[2]);
        for (const specifier of imports) {
          if (specifier.startsWith('.')) {
            const target = resolve(dirname(file.absolute), specifier);
            const candidates = [target, target + '.ts', target + '.json', target + '/index.ts'].map(path => portable(relative(root, path)));
            if (!candidates.some(path => allowed.has(path) && present.has(path))) issues.push(`Unresolved or excluded local import: ${file.path} -> ${specifier}`);
          } else if (!/^(?:three(?:\/|$)|vitest$|@msgpack\/msgpack$|mind-ar\/dist\/mindar-image(?:-three)?\.prod\.js$|node:)/.test(specifier)) issues.push(`Unexpected module import: ${file.path} -> ${specifier}`);
        }
      }
    }
  }
  const pkg = JSON.parse(await readFile(resolve(root, 'package.json'), 'utf8'));
  const lock = JSON.parse(await readFile(resolve(root, 'package-lock.json'), 'utf8'));
  const declared = { ...pkg.dependencies, ...pkg.devDependencies };
  if (JSON.stringify(Object.keys(declared).sort()) !== JSON.stringify(Object.keys(dependencyVersions).sort())) issues.push('Direct dependency set changed');
  for (const [name, version] of Object.entries(dependencyVersions)) {
    if (declared[name] !== version || lock.packages?.['node_modules/' + name]?.version !== version) issues.push(`Unpinned or changed dependency: ${name}`);
  }
  if (lock.lockfileVersion !== 3 || lock.packages?.['']?.name !== pkg.name || lock.name !== pkg.name) issues.push('Package/lock identity mismatch');
  if (pkg.private !== true) issues.push('Keep npm publishing disabled for this application');
  if (pkg.name !== 'point-atlas-fiveview' || pkg.license !== 'MIT' || lock.packages?.['']?.license !== 'MIT') issues.push('Project name or MIT license metadata mismatch');
  const license = await readFile(resolve(root, 'LICENSE'), 'utf8');
  const bundledLicense = await readFile(resolve(root, 'public/licenses/point-atlas-fiveview-MIT.txt'), 'utf8');
  if (license !== bundledLicense || !license.startsWith('MIT License\n\nCopyright (c) 2026 Point Atlas Fiveview contributors\n') || !license.includes('Permission is hereby granted, free of charge') || !license.includes('THE SOFTWARE IS PROVIDED "AS IS"')) issues.push('Project MIT license missing, incomplete or inconsistent');
  for (const [name, data] of Object.entries(lock.packages ?? {})) {
    if (data.resolved && (!data.resolved.startsWith('https://registry.npmjs.org/') || !data.integrity?.startsWith('sha512-'))) issues.push(`Unexpected registry/integrity: ${name}`);
  }
  if (entries.find(file => file.path === 'public/fonts/IBMPlexSansJP-Bold.ttf')?.sha256 !== FONT_SHA256) issues.push('Bundled font changed');
  return { scope: 'Independent generic MIT source', passed: issues.length === 0, strict, skipped: walked.skipped, issues, files: entries, totalBytes: entries.reduce((sum, file) => sum + file.bytes, 0) };
}

export async function auditDist(directory) {
  const root = resolve(directory), walked = await listFiles(root);
  const issues = [...walked.issues], entries = [];
  const allowed = /^(?:index\.html|\.nojekyll|atlas(?:-ar)?\.html|THIRD_PARTY_NOTICES\.txt|fonts\/IBMPlexSansJP-Bold\.ttf|licenses\/[A-Za-z0-9_.-]+\.txt|assets\/[A-Za-z0-9_.-]+\.(?:js|css))$/;
  for (const file of walked.files) {
    const bytes = await readFile(file.absolute);
    entries.push({ path: file.path, bytes: bytes.length, sha256: hash(bytes) });
    if (!allowed.test(file.path)) issues.push(`Unexpected production asset: ${file.path}`);
    if (/\.(?:js|html|css)$/.test(file.path)) {
      const text = bytes.toString('utf8');
      inspectText(file.path, text, issues, { source: true });
      if (/(?:https?:)?\/\/(?:[^\s"'<>]*\.)?(?:googleapis\.com|gstatic\.com|cdn\.jsdelivr\.net|unpkg\.com|github\.io)/.test(text)) issues.push(`External runtime CDN/service: ${file.path}`);
    }
  }
  for (const path of ['index.html', '.nojekyll', 'atlas.html', 'atlas-ar.html', 'THIRD_PARTY_NOTICES.txt', 'licenses/point-atlas-fiveview-MIT.txt', 'licenses/MindAR-1.2.5-embedded-NOTICES.txt', 'licenses/Apache-2.0.txt', 'licenses/IBM-Plex-OFL-1.1.txt', 'licenses/mind-ar-LICENSE.txt', 'licenses/three-LICENSE.txt', 'licenses/msgpack-msgpack-LICENSE.txt', 'licenses/tfjs-layers-4.16.0-LICENSE.txt']) {
    if (!entries.some(file => file.path === path)) issues.push(`Required production file missing: ${path}`);
  }
  if (entries.find(file => file.path === 'fonts/IBMPlexSansJP-Bold.ttf')?.sha256 !== FONT_SHA256) issues.push('Bundled font changed');
  return { scope: 'Generic static build with project and third-party licenses', passed: issues.length === 0, issues, files: entries, totalBytes: entries.reduce((sum, file) => sum + file.bytes, 0) };
}
