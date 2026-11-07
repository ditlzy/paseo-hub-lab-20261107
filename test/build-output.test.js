import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync } from 'node:fs';
import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';

test('build preserves accessible page content and health with one onboarding paragraph in main', () => {
  const root = fileURLToPath(new URL('../', import.meta.url));
  execFileSync(process.execPath, ['scripts/build.js'], { cwd: root });

  const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
  const message = 'Automated workflow onboarding verified.';
  assert.equal(html.split(message).length - 1, 1, 'onboarding text must occur exactly once');

  const main = html.match(/<main>([\s\S]*?)<\/main>/);
  assert.ok(main, 'page must contain main');
  assert.ok(main[1].includes(`<p>${message}</p>`), 'onboarding paragraph must be inside main');
  assert.ok(main[1].includes('<h1>Hello, Paseo Hub!</h1>'));
  assert.ok(main[1].includes('<p>Isolated workflow verification project.</p>'));
  assert.ok(html.includes('<html lang="en">'));
  assert.ok(html.includes('<meta charset="utf-8">'));
  assert.ok(html.includes('<meta name="viewport" content="width=device-width,initial-scale=1">'));

  const health = JSON.parse(readFileSync(new URL('../dist/health.json', import.meta.url), 'utf8'));
  assert.deepEqual(health, { ok: true, project: 'paseo-hub-lab-20261107' });
  assert.deepEqual(readdirSync(new URL('../dist/', import.meta.url)).sort(), ['health.json', 'index.html']);
});
