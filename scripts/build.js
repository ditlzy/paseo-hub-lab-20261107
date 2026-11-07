import { mkdir, writeFile } from 'node:fs/promises';
import { greeting, escapeHtml } from '../src/greeting.js';

await mkdir('dist', { recursive: true });
await writeFile('dist/index.html', `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Paseo Hub Lab</title><main><h1>${escapeHtml(greeting('Paseo Hub'))}</h1><p>${escapeHtml(greeting())}</p><p>Isolated workflow verification project.</p></main></html>`);
await writeFile('dist/health.json', JSON.stringify({ ok: true, project: 'paseo-hub-lab-20261107' }) + '\n');
