# _archive

Frozen reference material that is **not** wired into the live sites.

- Design handoffs from HappySimple kept here for visual reference and to
  show provenance of patterns now living in `packages/ui/` and
  `apps/*/public/`.
- Anything in this folder is intentionally not imported by `apps/proto` or
  `apps/endo`. If you find yourself needing to import from here, that's a
  sign the asset or component should be promoted into `packages/ui` or the
  relevant app's `public/` folder first.
- Safe to delete entire subfolders here once you're confident the
  migration is done — they exist in git history regardless.
