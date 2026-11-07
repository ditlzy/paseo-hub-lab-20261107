# Issue 8 observed verification

Node: v24.13.1

Base SHA: f3ebf7e3d0445d288b3ec7827eee1e05c4536b7e. Commands invoked through subprocess argv arrays, without shell interpolation.

## Dependency installation

Argv: `["npm", "ci", "--ignore-scripts"]`; exit code: 0.

```text

added 83 packages in 334ms

17 packages are looking for funding
  run `npm fund` for details
```

## Initial check: failed lint, repaired

Argv: `["npm", "run", "check"]`; exit code: 1.

```text

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


/Users/leon/.paseo/worktrees/3w1anybe/hub-7c98cf7c-3c6c-59d8-983d-a9c6495d17c1/test/build-output.test.js
   9:34  error  'URL' is not defined  no-undef
  12:33  error  'URL' is not defined  no-undef
  25:46  error  'URL' is not defined  no-undef
  27:36  error  'URL' is not defined  no-undef

✖ 4 problems (4 errors, 0 warnings)
```

## Final full check: passed

Argv: `["npm", "run", "check"]`; exit code: 0.

```text

> paseo-hub-lab-20261107@0.1.0 check
> npm run typecheck && npm run lint && npm test && npm run build


> paseo-hub-lab-20261107@0.1.0 typecheck
> tsc --noEmit


> paseo-hub-lab-20261107@0.1.0 lint
> eslint src test scripts


> paseo-hub-lab-20261107@0.1.0 test
> node --test test/*.test.js

✔ build preserves accessible page content and health with one onboarding paragraph in main (21.800375ms)
✔ trims names and preserves Unicode (0.297416ms)
✔ uses a fallback for blank names (0.047417ms)
✔ escapes HTML, quotes and ampersands (0.075542ms)
ℹ tests 4
ℹ suites 0
ℹ pass 4
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 53.143834

> paseo-hub-lab-20261107@0.1.0 build
> node scripts/build.js
```

The initial lint failure was repaired by explicitly importing URL from node:url. No configuration or test bypass was used.

## Mutation checks

Each temporary variant modifies only scripts/build.js, invokes the real build through the regression test, and must fail. The source was restored byte-for-byte in a finally block.

### missing

Argv: `["node", "--test", "test/build-output.test.js"]`; observed exit code: 1 (expected rejection).

```text
✖ build preserves accessible page content and health with one onboarding paragraph in main (25.34375ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 59.613791

✖ failing tests:

test at test/build-output.test.js:8:1
✖ build preserves accessible page content and health with one onboarding paragraph in main (25.34375ms)
  AssertionError [ERR_ASSERTION]: onboarding text must occur exactly once
  
  0 !== 1
  
      at TestContext.<anonymous> (file:///Users/leon/.paseo/worktrees/3w1anybe/hub-7c98cf7c-3c6c-59d8-983d-a9c6495d17c1/test/build-output.test.js:14:10)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1103:25)
      at Test.start (node:internal/test_runner/test:1000:17)
      at startSubtestAfterBootstrap (node:internal/test_runner/harness:358:17) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: 0,
    expected: 1,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

### duplicated

Argv: `["node", "--test", "test/build-output.test.js"]`; observed exit code: 1 (expected rejection).

```text
✖ build preserves accessible page content and health with one onboarding paragraph in main (22.519ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 54.279083

✖ failing tests:

test at test/build-output.test.js:8:1
✖ build preserves accessible page content and health with one onboarding paragraph in main (22.519ms)
  AssertionError [ERR_ASSERTION]: onboarding text must occur exactly once
  
  2 !== 1
  
      at TestContext.<anonymous> (file:///Users/leon/.paseo/worktrees/3w1anybe/hub-7c98cf7c-3c6c-59d8-983d-a9c6495d17c1/test/build-output.test.js:14:10)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1103:25)
      at Test.start (node:internal/test_runner/test:1000:17)
      at startSubtestAfterBootstrap (node:internal/test_runner/harness:358:17) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: 2,
    expected: 1,
    operator: 'strictEqual',
    diff: 'simple'
  }
```

### outside-main

Argv: `["node", "--test", "test/build-output.test.js"]`; observed exit code: 1 (expected rejection).

```text
✖ build preserves accessible page content and health with one onboarding paragraph in main (25.935ms)
ℹ tests 1
ℹ suites 0
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 59.018792

✖ failing tests:

test at test/build-output.test.js:8:1
✖ build preserves accessible page content and health with one onboarding paragraph in main (25.935ms)
  AssertionError [ERR_ASSERTION]: onboarding paragraph must be inside main
      at TestContext.<anonymous> (file:///Users/leon/.paseo/worktrees/3w1anybe/hub-7c98cf7c-3c6c-59d8-983d-a9c6495d17c1/test/build-output.test.js:18:10)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1103:25)
      at Test.start (node:internal/test_runner/test:1000:17)
      at startSubtestAfterBootstrap (node:internal/test_runner/harness:358:17) {
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: '==',
    diff: 'simple'
  }
```

## Restored implementation

Argv: `["node", "--test", "test/build-output.test.js"]`; exit code: 0.

```text
✔ build preserves accessible page content and health with one onboarding paragraph in main (22.163833ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 54.02425
```

dist contains exactly health.json and index.html. The regression test parses and deep-compares health, checks the preserved metadata/content, and enforces one exact onboarding paragraph in main. Existing greeting tests remain unchanged.

The final pushed SHA and these command exit codes are recorded in the draft PR body. Independent review, exact-commit CI, and preview checks are Hub-owned subsequent stages and have not been claimed as passed here.
