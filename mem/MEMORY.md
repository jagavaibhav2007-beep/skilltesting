# MEMORY
> Stack: Next.js + TS + Tailwind v4
> Last Refactor: 2026-04-17 (7-Pass Protocol Applied)

## Rules
- **Structure**: Feature-based (`src/features/`). Named exports only.
- **Imports**: Absolute aliases (`@/`, `@features/`, `@config/`).
- **Aesthetic**: Brutalist (High-contrast, bold type, glassmorphism).

## Constraints
- **Architecture**: All source code strictly resides in `src/`.
- **Scaling**: Strict TS rules (No implicit returns, exact optional types).
- **Navigation**: Managed via `NAV_LINKS` object mapping to section IDs.
- **Animation**: Native CSS/Tailwind only.
- **Data**: Centralized in `src/config/constants.ts`. High-end typography uses object-based titles `{first, second}`.

## Layout
- **Sticky Stacking**: `ServiceStack` uses `h-[65vh]` cards with `justify-between`.
- **Root**: `src/app/layout.tsx` manages viewport and global fonts.
