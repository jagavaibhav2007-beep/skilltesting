# GOTCHAS
> 2026-04-17

- **Path Aliases**: After `src/` migration, ensure `@/` always points to `./src/*`. 
- **Sticky Offsets**: Cards in `ServiceStack` use `top-[10%]`, `top-[15%]`, etc. If offsets are too close, earlier content may be hidden prematurely.
- **Type Syncing**: When using `as const` in `constants.ts`, component props MUST use `readonly` or literal types to avoid casting.

> 2026-04-14

- **Next.js**: Port 3000 locks on Windows (kill PID). Restart dev server for `tsconfig` updates.
- **Lucide**: Use `ArrowDown` (not `ArrowDownward`).
- **Tailwind v4**: Map CSS vars in `@theme` to use them as utility tokens.
