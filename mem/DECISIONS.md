# DECISIONS
> 2026-04-17

**2026-04-17 — ADDED — src/ Root Migration**
Why: Standardize project structure for industry standards and easier CI/CD integration.
Impact: All source code moved to `src/`. `tsconfig` path aliases updated.
↳ DO NOT: Use root-level folders for source code (except for config/meta files).

**2026-04-17 — ADDED — Scaling Guardrails**
Why: Prevent runtime errors and enforce strict typing as the codebase grows.
Impact: Enabled `exactOptionalPropertyTypes` and `noImplicitReturns` in `tsconfig`.
↳ DO NOT: Relax TypeScript strictness for quick fixes.

**2026-04-17 — CHANGED — God Component Splitting**
Why: Improve readability and unit-testability of the portfolio sections.
Impact: `ServiceCard` moved to a standalone component.
↳ DO NOT: Colocate complex sub-components in the same file as the parent list.

> 2026-04-14

**2026-04-14 — ADDED — Centralized Data**
Why: Decouple copy from logic for scaling.
Impact: All text moves to `config/constants.ts`.
↳ DO NOT: Hardcode business copy in JSX.

**2026-04-14 — REMOVED — Layout.tsx Proxy**
Why: Avoid "god-file" coupling. 
Impact: Individual Navbar/Footer imports.
↳ DO NOT: Use layout wrappers as simple component proxies.

**2026-04-14 — ADDED — Tailwind CSS v4**
Why: CSS-first config + performance.
Impact: No `tailwind.config.js`.
↳ DO NOT: Add v3 plugins or JS-based theme config.

**2026-04-14 — CHANGED — Feature Architecture**
Why: Modular scalability.
Impact: Split logic into `features/portfolio/`.
↳ DO NOT: Mix feature components in root `/components`.
