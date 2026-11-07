# Issue 8 design

Add the exact visible paragraph `<p>Automated workflow onboarding verified.</p>`
after the existing paragraph inside the generated page's main element. Preserve
the greeting, language, charset, viewport, and health payload. Build outputs stay
gitignored and consist only of index.html and health.json.

The new Node regression test invokes the real build, inspects the generated HTML,
requires exactly one occurrence of the onboarding text and its paragraph inside
main, verifies existing content and metadata, parses the health payload, and
checks the exact output file list. Existing greeting tests remain unchanged.
Mutation checks will verify that missing, duplicate, and misplaced paragraphs
are rejected.

The independent native worktree supplied by Hub was clean and already based on
origin/main at f3ebf7e3d0445d288b3ec7827eee1e05c4536b7e. Both git ls-remote
and the GitHub main branch API returned that exact SHA. The separate
setup/pin-preview-tool checkout is not a base for this change.

The planning claim already existed; the supplied owner successfully checkpointed
implementing. Reclaiming would incorrectly be a duplicate claim. Hub owns the
independent review, exact-commit CI, preview verification, and approval stages.
This developer handoff leaves a draft PR unmerged.
