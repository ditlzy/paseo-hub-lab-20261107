import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, rmSync } from 'node:fs';
import process from 'node:process';
import { URL, fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
test('build preserves page content and adds preview disclosure after main', () => {
  const dist = new URL('../dist/', import.meta.url);
  rmSync(dist, { recursive: true, force: true });
  execFileSync(process.execPath, ['scripts/build.js'], { cwd: root });
  const html = readFileSync(new URL('index.html', dist), 'utf8');
  const footers = [...html.matchAll(/<footer>(.*?)<\/footer>/gs)];
  assert.equal(footers.length, 1);
  assert.equal(footers[0]?.[1], 'Preview only — production requires approval.');
  assert.equal((html.match(/<footer>/g) ?? []).length, 1);
  assert.ok(html.indexOf('</main>') >= 0);
  assert.ok(html.indexOf('<footer>') > html.indexOf('</main>'));
  assert.ok(html.indexOf('</footer>') < html.indexOf('</html>'));
  assert.match(html, /<main>.*Hello, Paseo Hub!.*<\/main>/s);
  assert.match(html, /<meta charset="utf-8">/);
  assert.match(html, /<meta name="viewport" content="width=device-width,initial-scale=1">/);
  assert.deepEqual(JSON.parse(readFileSync(new URL('health.json', dist), 'utf8')), { ok: true, project: 'paseo-hub-lab-20261107' });
  assert.deepEqual(readdirSync(dist).sort(), ['health.json', 'index.html']);
});
