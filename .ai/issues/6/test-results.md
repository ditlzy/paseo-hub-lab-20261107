# Test results

npm ci --ignore-scripts: exit 0
```

added 83 packages in 686ms

17 packages are looking for funding
  run `npm fund` for details
```

Initial npm run check: exit 1 (test imports missing; repaired)
```

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


/Users/leon/.paseo/worktrees/3w1anybe/hub-a23b0474-aea2-585e-b82c-e3defd14d528/test/build.test.js
   7:32  error  'URL' is not defined      no-undef
   9:20  error  'URL' is not defined      no-undef
  11:16  error  'process' is not defined  no-undef
  12:33  error  'URL' is not defined      no-undef
  23:48  error  'URL' is not defined      no-undef

✖ 5 problems (5 errors, 0 warnings)

```

Final npm run check: exit 0
```

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


> paseo-hub-lab-20261107@0.1.0 test
> node --test test/*.test.js

✔ build preserves page content and adds preview disclosure after main (23.803375ms)
✔ trims names and preserves Unicode (0.321541ms)
✔ uses a fallback for blank names (0.047125ms)
✔ escapes HTML, quotes and ampersands (0.08875ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 61.871625

> paseo-hub-lab-20261107@0.1.0 build
> node scripts/build.js

```
