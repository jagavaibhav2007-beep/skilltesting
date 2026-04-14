# PATTERNS
> 2026-04-14

- **Styling**: Tailwind v4 via `globals.css` @theme. Use `tracking-monolith` (-0.04em).
- **Structure**: `features/[domain]/{api,components,hooks,types}/index.ts`.
- **Data**: All copy and magic values in `config/constants.ts`.
- **Exports**: Named only. No feature defaults.
- **Layout**: Individual Navbar/Footer components in `components/layout/`.
