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
