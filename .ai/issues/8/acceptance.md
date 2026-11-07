# Issue 8 acceptance

- Built index.html contains exactly one exact onboarding paragraph inside main.
- Language en, UTF-8 charset, responsive viewport, greeting, and original paragraph remain.
- Regression test rejects a missing, duplicated, or misplaced onboarding paragraph.
- Existing greeting tests are unchanged; health parses to the original exact object.
- dist contains exactly index.html and health.json; generated files are not committed.
- Node 24 runs npm ci --ignore-scripts followed by npm run check successfully;
  observed outputs and exit codes are in test-results.md.
- Diff is limited to scripts/build.js, test/build-output.test.js, and .ai/issues/8/.
- Base is verified main SHA f3ebf7e3d0445d288b3ec7827eee1e05c4536b7e;
  remote branch is ai/issue-8, PR uses Refs #8, and remains draft and unmerged.
- Independent review of the exact pushed SHA, exact-commit CI, and healthy preview
  when PREVIEW_ENABLED is true are subsequent Hub gates, not developer approvals.
