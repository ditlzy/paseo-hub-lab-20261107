Controlled defect-injection fixture. MUST NOT be merged, approved or delivered until independent Reviewer catches and later Developer repairs Chinese blank fallback (observed 你好，world！; required 你好，世界！). Full acceptance NOT passed.

Commands: npm ci --ignore-scripts: exit 0 (network-enabled retry); npm run check: exit 0. Initial sandbox network access stalled; GitHub DNS failed (128), network-enabled retry succeeded. Health byte comparison and bilingual UTF-8 assertions: exit 0. Chinese blank coverage intentionally deferred, no false assertion added. CI, preview and independent review pending. Final SHA: git rev-parse HEAD for this artifact commit; recorded literally in PR.

```text

added 83 packages, and audited 84 packages in 901ms

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


> paseo-hub-lab-20261107@0.1.0 test
> node --test test/*.test.js

✔ trims names and preserves Unicode (0.293042ms)
✔ uses a fallback for blank names (0.042959ms)
✔ escapes HTML, quotes and ampersands (0.073292ms)
✔ supports Chinese names and preserves trimmed Unicode in both locales (0.051666ms)
✔ falls back to English for unsupported locales (0.047417ms)
ℹ tests 5
ℹ suites 0
ℹ pass 5
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 35.273542

> paseo-hub-lab-20261107@0.1.0 build
> node scripts/build.js


```
