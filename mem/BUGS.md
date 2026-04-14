# BUGS
> 2026-04-14

**2026-04-14 — ReferenceError: React**
Bug: `React.Fragment` used without `import React`.
Fix: Added `import React`.
⛔ NEVER: Use `React.*` without explicit import.

**2026-04-14 — ReferenceError: CONSTANTS**
Bug: `CONTACT` used in Navbar/Footer without import.
Fix: Added missing import.
⛔ NEVER: Use `config/constants.ts` values without explicit top-level import.

**2026-04-14 — Legacy Type Collision**
Bug: `tsconfig` scanned `temp_backup/`.
Fix: Excluded `temp_backup`.
⛔ NEVER: Include legacy backups in `tsconfig` scope.

**2026-04-14 — Icon Import Failure**
Bug: Guessed `ArrowDownward` instead of `ArrowDown`.
Fix: Fixed component name.
⛔ NEVER: Guess Lucide export names.

**2026-04-14 — React Child Object Error**
Bug: Attempted to render `{ first, second }` title object directly as a React child.
Fix: Explicitly destructured and rendered `title.first` and `title.second` in `ServiceCard`.
⛔ NEVER: Pass complex objects to JSX nodes that expect strings/elements.

**2026-04-14 — Structural Overlap & Imbalance**
Bug: Large `h-[85vh]` cards with high padding caused text to overlap on scroll.
Fix: Simplified to `h-[65vh]` with `flex justify-between` and increased vertical container spacing.
⛔ NEVER: Use overly large sticky heights without considering content collision.
