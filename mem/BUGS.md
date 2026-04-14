# BUGS — Monolith Portfolio
> Updated: 2026-04-14

---
**2026-04-14 — Legacy Type Collision**
File: `tsconfig.json:L34`
Severity: HIGH
Bug: The TypeScript compiler was checking `temp_backup/` files, causing failures in the main build due to missing mock data in legacy files.
Solution: Addeed `temp_backup` to the `exclude` list in `tsconfig.json`.
⛔ NEVER: Include the `temp_backup/` or individual legacy files in the `tsconfig.json` include pattern; always explicitly exclude them.

---
**2026-04-14 — Icon Import Failure**
File: `features/portfolio/components/Hero.tsx:L2`
Severity: MEDIUM
Bug: Attempted to import a non-existent icon name `ArrowDownward`.
Solution: Replaced with the valid `ArrowDown`.
⛔ NEVER: Guess icon names for Lucide; always verify the valid export names in the library docs or search.

---
**2026-04-14 — Font Mapping Gap**
File: `app/globals.css:L14`
Severity: LOW
Bug: The Next.js Font variable was defined but the Tailwind theme wasn't inheriting it.
Solution: Mapped `--font-plus-jakarta-sans` to `--font-sans` within the `@theme` block.
⛔ NEVER: Assume local font variables will automatically pass through to Tailwind v4 theme tokens without explicit mapping in `globals.css`.
