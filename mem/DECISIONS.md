# DECISIONS
> 2026-04-14

**2026-04-14 — ADDED — Centralized Data**
Why: Decouple copy from logic for scaling.
Impact: All text moves to `config/constants.ts`.
⛔ DO NOT: Hardcode business copy in JSX.

**2026-04-14 — REMOVED — Layout.tsx Proxy**
Why: Avoid "god-file" coupling. 
Impact: Individual Navbar/Footer imports.
⛔ DO NOT: Use layout wrappers as simple component proxies.

**2026-04-14 — ADDED — Tailwind CSS v4**
Why: CSS-first config + performance.
Impact: No `tailwind.config.js`.
⛔ DO NOT: Add v3 plugins or JS-based theme config.

**2026-04-14 — CHANGED — Feature Architecture**
Why: Modular scalability.
Impact: Split logic into `features/portfolio/`.
⛔ DO NOT: Mix feature components in root `/components`.
