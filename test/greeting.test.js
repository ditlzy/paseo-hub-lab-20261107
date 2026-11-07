import test from 'node:test';
import assert from 'node:assert/strict';
import { greeting, escapeHtml } from '../src/greeting.js';

test('trims names and preserves Unicode', () => {
  assert.equal(greeting('  Leon  '), 'Hello, Leon!');
  assert.equal(greeting('李'), 'Hello, 李!');
});
test('uses a fallback for blank names', () => {
  assert.equal(greeting(''), 'Hello, world!');
  assert.equal(greeting('  \n\t'), 'Hello, world!');
});
test('escapes HTML, quotes and ampersands', () => {
  assert.equal(escapeHtml('<script>"x" & \'y\'</script>'), '&lt;script&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/script&gt;');
});

test('defaults omitted and undefined names', () => {
  assert.equal(greeting(), 'Hello, world!');
  assert.equal(greeting(undefined), 'Hello, world!');
});
for (const value of [null, 5, [], {}]) {
  test(`rejects invalid name ${JSON.stringify(value)} with TypeError`, () => {
    assert.throws(() => greeting(/** @type {any} */ (value)), TypeError);
  });
}
