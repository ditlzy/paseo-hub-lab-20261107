/** @param {string} name */
export function greeting(name) {
  const trimmed = name.trim();
  return `Hello, ${trimmed || 'world'}!`;
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
