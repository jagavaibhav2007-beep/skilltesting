# PATTERNS — Monolith Portfolio
> Updated: 2026-04-14

## Styling
- Tailwind v4 only via `@theme` variables in `globals.css`.
- Standardized buttons use the `<Button />` component in `components/ui`.
- Hero tracking is always `tracking-monolith` (-0.04em).

## File Structure
- New feature → `features/[name]/{components,api,hooks,types}/index.ts`.
- Shared UI → `components/ui/`.
- Global Layout → `components/layout/`.

## Component Exports
- Named exports only. No default exports from features or sections.
- Barrel exports in `index.ts` represent the feature's public API.

## Code Style
- Use guard clauses to flatten logic.
- Extract any asset URL or magic number to `config/constants.ts`.
