# MEMORY — Monolith Portfolio
> Stack: Next.js 16.2.3 App Router + TypeScript + Tailwind CSS v4 + Lucide React
> Updated: 2026-04-14

## Rules
1. Follow the feature-based folder architecture in `features/`.
2. Use named exports only for all components and utilities.
3. Use absolute imports (`@features/*`, `@config/*`) for cross-cutting concerns.
4. Maintain the "Monolith" Brutalist aesthetic: high-contrast, bold type, glassmorphism.

## Constraints
- No external animation libraries like Framer Motion; use native CSS transitions or Tailwind utilities.
- Deployment target remains local dev (Port 3000) until specified otherwise.
- Always use the centralized `config/constants.ts` for any global assets or magic values.
- Exclude `temp_backup/` from all build and type-checking processes.
