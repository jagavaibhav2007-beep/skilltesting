# Monolith Portfolio: Next.js Migration Plan

This document serves as the roadmap for converting the existing `monolith-homepage.html` design into a production-ready Next.js application.

## Core Objective
Replicate the **Brutalist/Monolith** aesthetic from the HTML source while leveraging React's component-based architecture for better maintainability and performance.

### Design Tokens (to be ported)
- **Primary Color:** `#000000`
- **Background:** `#f8f9fb`
- **Font:** `Plus Jakarta Sans`
- **Tracking:** `monolith` (-0.04em)
- **Glassmorphism:** 24px blur with 20% white opacity.

## Implementation Steps

### Phase 1: Environment Setup
- [ ] Initialize Next.js in the current directory.
- [ ] Configuration of `tailwind.config.ts` with custom themes.
- [ ] Global CSS setup in `app/globals.css`.

### Phase 2: Component Extraction
We will extract components directly from the structure of `monolith-homepage.html`:
1. **Layout**: Header (Navbar) and Footer.
2. **Hero Section**: The `Fullstack` watermark and interactive code block.
3. **Services Section**: The "Stacking Cards" logic using CSS `sticky`.
4. **Capabilities Section**: The technology grid.
5. **CTA Section**: The global project inquiry block.

### Phase 3: Interactivity & Polish
- [ ] Framer Motion for scroll reveals (matching the premium feel).
- [ ] Responsive testing for mobile/tablet.
- [ ] Deployment-ready optimization.

## File Mapping
| HTML Section | React Component |
| :--- | :--- |
| `nav` | `components/Navbar.tsx` |
| `Hero Section` | `components/sections/Hero.tsx` |
| `Stacking Card` | `components/sections/ServiceStack.tsx` |
| `Capabilities` | `components/sections/Capabilities.tsx` |
| `CTA Section` | `components/sections/ContactCTA.tsx` |
| `footer` | `components/Footer.tsx` |
