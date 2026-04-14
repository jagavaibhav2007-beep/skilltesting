# GOTCHAS — Monolith Portfolio
> Updated: 2026-04-14

## Next.js
- `port conflict` — On Windows, Next.js processes can lock Port 3000 even after the terminal is closed. Fix: kill process by PID.
- `turbopack build` — Sometimes requires `tsconfig.json` changes to take effect immediately. Restart dev server.

## Lucide React
- `ArrowDown` — `ArrowDownward` does not exist in standard lucide. Use `ArrowDown`.

## Tailwind v4
- `@theme` — Custom CSS variables must be explicitly mapped to theme tokens to be usable via `font-sans` or `tracking-monolith`.
