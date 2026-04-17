# BUGS
> 2026-04-17

**2026-04-17 — ReferenceError: LINKEDIN**
Bug: `CONTACT.LINKEDIN` used in Footer but missing from `config/constants.ts`.
Fix: Added missing constant.
↳ NEVER: Reference object properties in components without verifying existence in source config.

**2026-04-17 — Broken Navigation Hrefs**
Bug: Navbar links were all `href="#"` and sections lacked IDs.
Fix: Added `NAV_LINKS` object with hrefs and added matching IDs to `Hero`, `ServiceStack`, `Capabilities`, and `CTA`.
↳ NEVER: Use placeholder links in the final navigation structure.

**2026-04-17 — Type Inconsistency (ID)**
Bug: `ServiceCard` ID was string `"01"` in constants but component expected string, leading to messy `001` formatting when templated.
Fix: Changed IDs to numbers in `constants.ts` and updated `ServiceCardProps` accordingly.
↳ NEVER: Mix string-based numeric IDs with string templates that add prefixes.

**2026-04-17 — Build-Time Typography Errors**
Bug: `TYPOGRAPHY` object was missing several keys like `SECTION_HEADING` and `SUB_HEADING_SMALL` referenced in new components.
Fix: Standardized the `TYPOGRAPHY` constant to include all semantic heading keys.
↳ NEVER: Add new typography classes to components without registering them in the central theme configuration.

> 2026-04-14

**2026-04-14 — ReferenceError: React**
Bug: `React.Fragment` used without `import React`.
Fix: Added `import React`.
↳ NEVER: Use `React.*` without explicit import.

**2026-04-14 — ReferenceError: CONSTANTS**
Bug: `CONTACT` used in Navbar/Footer without import.
Fix: Added missing import.
↳ NEVER: Use `config/constants.ts` values without explicit top-level import.

**2026-04-14 — Legacy Type Collision**
Bug: `tsconfig` scanned `temp_backup/`.
Fix: Excluded `temp_backup`.
↳ NEVER: Include legacy backups in `tsconfig` scope.

**2026-04-14 — Icon Import Failure**
Bug: Guessed `ArrowDownward` instead of `ArrowDown`.
Fix: Fixed component name.
↳ NEVER: Guess Lucide export names.

**2026-04-14 — React Child Object Error**
Bug: Attempted to render `{ first, second }` title object directly as a React child.
Fix: Explicitly destructured and rendered `title.first` and `title.second` in `ServiceCard`.
↳ NEVER: Pass complex objects to JSX nodes that expect strings/elements.

**2026-04-14 — Structural Overlap & Imbalance**
Bug: Large `h-[85vh]` cards with high padding caused text to overlap on scroll.
Fix: Simplified to `h-[65vh]` with `flex justify-between` and increased vertical container spacing.
↳ NEVER: Use overly large sticky heights without considering content collision.

**2026-04-14 — Prop Type Mismatch (Refinement)**
Bug: Passing `as const` data from `constants.ts` to components expecting standard `string[]` or mutable objects required ugly `as unknown as string[]` casting.
Fix: Updated `ServiceCardProps` in `ServiceStack.tsx` to use `readonly` modifiers on `title` and `tags`, syncing types perfectly with the data source.
↳ NEVER: Use `as unknown` casts when a proper `readonly` interface can solve the contract mismatch.
