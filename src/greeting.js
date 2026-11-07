/**
 * @param {string} name
 * @param {string} [locale]
 */
export function greeting(name, locale = 'en') {
  const trimmed = name.trim();
  const messages = {
    en: { prefix: 'Hello, ', fallback: 'world', suffix: '!' },
    zh: { prefix: '你好，', fallback: 'world', suffix: '！' },
  };
  const key = Object.hasOwn(messages, locale) ? locale : 'en';
  const message = messages[/** @type {keyof typeof messages} */ (key)];
  return `${message.prefix}${trimmed || message.fallback}${message.suffix}`;
}

/** @param {string} value */
export function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const escaped = /** @type {Record<string, string>} */ ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    });
    return escaped[character];
  });
}
