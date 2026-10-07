import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, copyFile, rm, symlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { auditSource, auditDist } from './generic-audit-lib.mjs';
const source = fileURLToPath(new URL('../', import.meta.url));
const policy = JSON.parse(await readFile(join(source, 'tools/source-policy.json'), 'utf8'));

async function checkMutation(mutate, expected) {
  const temporary = await mkdtemp(join(tmpdir(), 'pointatlas-audit-test-'));
  try {
    for (const path of policy.files) {
      await mkdir(dirname(join(temporary, path)), { recursive: true });
      await copyFile(join(source, path), join(temporary, path));
    }
    await mutate(temporary);
    const report = await auditSource(temporary, { strict: true });
    assert.equal(report.passed, false);
    for (const pattern of Array.isArray(expected) ? expected : [expected]) {
      assert.ok(report.issues.some(issue => pattern.test(issue)), JSON.stringify(report.issues));
    }
  } finally { await rm(temporary, { recursive: true, force: true }); }
}

test('clean allowlisted source passes without build dependencies', async () => {
  const temporary = await mkdtemp(join(tmpdir(), 'pointatlas-audit-clean-'));
  try {
    for (const path of policy.files) {
      await mkdir(dirname(join(temporary, path)), { recursive: true });
      await copyFile(join(source, path), join(temporary, path));
    }
    assert.equal((await auditSource(temporary, { strict: true })).passed, true);
  } finally { await rm(temporary, { recursive: true, force: true }); }
});
test('rejects an unapproved tracking target asset', () => checkMutation(async root => {
  await mkdir(join(root, 'public/targets'));
  await writeFile(join(root, 'public/targets/unapproved.mind'), new Uint8Array([1, 2, 3]));
}, /Unexpected source file|Undistributable source asset/));
test('rejects a reintroduced original entry or fixed alternate channel', () => checkMutation(async root => {
  await writeFile(join(root, 'src/prototype/main.ts'), 'export const uAlternateStrength = 1;');
}, /Original entry\/glyph\/alternate\/perception dependency/));
test('rejects a local import outside the reviewed source set', () => checkMutation(async root => {
  await writeFile(join(root, 'src/prototype/main.ts'), "import '../../external-runtime.ts';");
}, /Unresolved or excluded local import/));
test('rejects private paths and credential-shaped values', () => checkMutation(async root => {
  const path = ['/', 'Users/', 'private-person/', 'document'].join('');
  const credential = ['sk-', 'proj-', 'x'.repeat(40)].join('');
  await writeFile(join(root, 'src/prototype/main.ts'), JSON.stringify({ path, credential }));
}, [/Personal absolute path/, /Credential\/private-key pattern/]));
test('rejects Git metadata even when omitted from the file allowlist', () => checkMutation(async root => {
  await mkdir(join(root, '.git'));
  await writeFile(join(root, '.git/config'), '[core]');
}, /Private directory/));
test('allows checkout Git metadata only outside strict archive mode', async () => {
  const temporary = await mkdtemp(join(tmpdir(), 'pointatlas-checkout-'));
  try {
    for (const path of policy.files) {
      await mkdir(dirname(join(temporary, path)), { recursive: true });
      await copyFile(join(source, path), join(temporary, path));
    }
    await mkdir(join(temporary, '.git'));
    await writeFile(join(temporary, '.git/config'), '[core]');
    const report = await auditSource(temporary);
    assert.equal(report.passed, true);
    assert.ok(report.skipped.includes('.git'));
    assert.equal((await auditSource(temporary, { strict: true })).passed, false);
  } finally { await rm(temporary, { recursive: true, force: true }); }
});
test('rejects private workflow identifiers and personal emails', () => checkMutation(async root => {
  const reference = ['libfile_', 'a'.repeat(32)].join('');
  const email = ['private-person', '@', 'example', '.invalid'].join('');
  await writeFile(join(root, 'src/prototype/main.ts'), JSON.stringify({ reference, email }));
}, [/Private workflow identifier/, /Email outside third-party legal notices/]));
test('rejects inconsistent license selection', () => checkMutation(async root => {
  const file = join(root, 'package.json');
  const pkg = JSON.parse(await readFile(file, 'utf8'));
  pkg.license = 'UNLICENSED';
  await writeFile(file, JSON.stringify(pkg));
}, /Project name or MIT license metadata mismatch/));
test('rejects symbolic links and a modified licensed font', () => checkMutation(async root => {
  await writeFile(join(root, 'public/fonts/IBMPlexSansJP-Bold.ttf'), 'changed');
  await symlink('README.md', join(root, 'readme-link'));
}, [/Symbolic link/, /Bundled font changed/]));
test('production build also rejects an added image or camera target', async () => {
  const temporary = await mkdtemp(join(tmpdir(), 'pointatlas-dist-audit-'));
  try {
    await writeFile(join(temporary, 'unapproved-logo.png'), new Uint8Array([1, 2, 3]));
    const report = await auditDist(temporary);
    assert.equal(report.passed, false);
    assert.ok(report.issues.some(issue => /Unexpected production asset/.test(issue)));
  } finally { await rm(temporary, { recursive: true, force: true }); }
});
