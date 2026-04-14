# DECISIONS — Monolith Portfolio
> Updated: 2026-04-14

---
**2026-04-14 — ADDED — Tailwind CSS v4**
What: Adopted Tailwind v4 as the primary styling framework.
Why: Superior performance and a cleaner CSS-first configuration model.
Impact: `globals.css` is now the single source of truth for the theme; no `tailwind.config.js` exists.
⛔ DO NOT: Re-introduce a JavaScript-based `tailwind.config.js` or attempt to use Tailwind v3 plugins that are incompatible with v4.

---
**2026-04-14 — CHANGED — Modular Feature Architecture**
What: Split the monolithic `Sections.tsx` and moved components into `features/portfolio/`.
Why: To prevent "god-file" complexity and enable parallel development of UI features.
Impact: Root components directory is now for shared UI and layout only.
⛔ DO NOT: Add feature-specific components directly to the `/components` folder; use the appropriate feature folder instead.

---
**2026-04-14 — REMOVED — Framer Motion**
What: Deliberately avoided adding Framer Motion.
Why: Keeping the footprint minimal while using native CSS/Tailwind for the heavy Brutalist motion.
Impact: Reduced dynamic bundle size.
⛔ DO NOT: Suggest or add Framer Motion or GSAP unless explicitly requested.
