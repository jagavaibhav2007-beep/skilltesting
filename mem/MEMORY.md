# MEMORY
> Stack: Next.js + TS + Tailwind v4
> 2026-04-14

## Rules
- **Structure**: Feature-based (`features/`). Named exports only.
- **Imports**: Absolute aliases (`@/`, `@features/`, `@config/`).
- **Aesthetic**: Brutalist (High-contrast, bold type, glassmorphism).

## Constraints
- **Animation**: Native CSS/Tailwind only. No Framer Motion.
- **Data**: Centralized in `config/constants.ts`. No hardcoded JSX strings.
- **Legacy**: `temp_backup/` excluded from build.
- **Layout**: No monolithic `Layout.tsx` proxy. Use direct modular imports.
