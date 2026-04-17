# PATTERNS
> 2026-04-17

- **Component Migration**: Move from flat `components/` to `src/features/[domain]/components/` for domain-specific logic. 
- **Sub-Component Extraction**: Atomic breakdown of "God components" into functional children (e.g., `ServiceStack` -> `ServiceCard`).
- **Navigation Mapping**: Centralized object `NAV_LINKS` mapped to unique section IDs across the app.

> 2026-04-14

- **Styling**: Tailwind v4 via `globals.css` @theme. Use `tracking-monolith` (-0.04em).
- **Structure**: `features/[domain]/{api,components,hooks,types}/index.ts`.
- **Data**: All copy and magic values in `config/constants.ts`.
- **Exports**: Named only. No feature defaults.
- **Layout**: Individual Navbar/Footer components in `components/layout/`.
- **Depth**: Color stacking (Dark Zinc -> Light Zinc -> White) for layered sticky sections.
- **Typing**: Use `readonly` props when consuming `as const` data from `config/constants.ts` to avoid casts.
- **UI Components**: Small, reusable layout triggers (like `ScrollIndicator`) belong in `components/ui/`.
