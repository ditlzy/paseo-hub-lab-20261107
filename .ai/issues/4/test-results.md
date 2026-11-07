# Validation

Base verified through GitHub API: f3ebf7e3d0445d288b3ec7827eee1e05c4536b7e.

`npm ci --ignore-scripts && npm run check`: exit 0.

```text

added 83 packages in 679ms

17 packages are looking for funding
  run `npm fund` for details

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


> paseo-hub-lab-20261107@0.1.0 test
> node --test test/*.test.js

✔ trims names and preserves Unicode (0.333166ms)
✔ uses a fallback for blank names (0.046625ms)
✔ escapes HTML, quotes and ampersands (0.086417ms)
✔ defaults omitted and undefined names (0.032417ms)
✔ rejects invalid name null with TypeError (0.171875ms)
✔ rejects invalid name 5 with TypeError (0.036708ms)
✔ rejects invalid name [] with TypeError (0.047375ms)
✔ rejects invalid name {} with TypeError (0.043167ms)
ℹ tests 8
ℹ suites 0
ℹ pass 8
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 37.851458

> paseo-hub-lab-20261107@0.1.0 build
> node scripts/build.js

```

Python dist validation: exit 0; exactly index.html and health.json, regular files, no symlinks, total under 1MB; health bytes match expected JSON plus newline; both greetings present.

CI pending external verification. Preview not verifiable: Hub has not confirmed preview configuration. Final delivery SHA is recorded in the PR (a commit cannot contain its own SHA).
