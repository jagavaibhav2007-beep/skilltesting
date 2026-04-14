# MEMORY
> Stack: Next.js + TS + Tailwind v4
> 2026-04-14

## Rules
- **Structure**: Feature-based (`features/`). Named exports only.
- **Imports**: Absolute aliases (`@/`, `@features/`, `@config/`).
- **Aesthetic**: Brutalist (High-contrast, bold type, glassmorphism).

## Constraints
- **Animation**: Native CSS/Tailwind only. No Framer Motion.
- **Data**: Centralized in `config/constants.ts`. High-end typography uses object-based titles `{first, second}` to support dual-tone rendering.
- **Legacy**: `temp_backup/` excluded from build.
- **Layout**: Sticky stacking pattern for Services (`ServiceStack`). Uses `65vh` cards with `flex-justify-between` for optimal balance.
