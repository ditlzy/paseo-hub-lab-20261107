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

test('supports Chinese names and preserves trimmed Unicode in both locales', () => {
  assert.equal(greeting('Leon', 'zh'), '你好，Leon！');
  assert.equal(greeting('  李  ', 'zh'), '你好，李！');
  assert.equal(greeting('  李  ', 'en'), 'Hello, 李!');
  assert.equal(greeting('Leon', 'en'), 'Hello, Leon!');
});
test('falls back to English for unsupported locales', () => {
  for (const locale of ['fr', '', 'constructor', '__proto__']) {
    assert.equal(greeting('Leon', locale), 'Hello, Leon!');
    assert.equal(greeting(' ', locale), 'Hello, world!');
  }
});

test('uses the Chinese fallback for blank and whitespace-only names', () => {
  assert.equal(greeting('', 'zh'), '你好，世界！');
  assert.equal(greeting('  \n\t', 'zh'), '你好，世界！');
});
