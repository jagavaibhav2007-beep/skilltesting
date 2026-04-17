# Codebase Refactoring Plan

## Objective
Refactor the codebase to align with established patterns documented in `mem/`, improve type safety, remove dead code, and resolve missing or hardcoded references to typography and contact constants.

## Key Files & Context
- `config/constants.ts`: The central source of truth for data and styling constants.
- `features/portfolio/components/Capabilities.tsx`: Uses missing typography constants.
- `features/portfolio/components/CTA.tsx`: Uses missing typography constants.
- `features/portfolio/components/Hero.tsx`: Uses a hardcoded icon instead of the reusable `ScrollIndicator` component.
- `features/portfolio/components/ServiceStack.tsx`: Contains dead code (`ICON_MAP`) and unsafe type casting (`as unknown as string[]`).
- `components/layout/Footer.tsx`: Contains a hardcoded LinkedIn link.
- `components/layout/Navbar.tsx`: Imports `CONTACT` but does not use it.

## Implementation Steps

1.  **Update `config/constants.ts`**:
    *   Add `SUB_HEADING: "typo-sub"` and `SUB_HEADING_SMALL: "typo-sub"` to the `TYPOGRAPHY` object.
    *   Add `LINKEDIN: "https://linkedin.com/company/devhub"` to the `CONTACT` object.
    *   Append `as const` to all exported objects (`IMAGES`, `SIZES`, `CONTACT`, `TYPOGRAPHY`, `STYLES`, `SERVICE_STACK_OFFSETS`, `CAPABILITIES`, `HERO_DATA`, `CTA_DATA`, `CAPABILITIES_DATA`, `WINDOW_CONTROL_OPACITIES`) to enforce strict literal types.

2.  **Refactor `features/portfolio/components/Capabilities.tsx`**:
    *   Ensure the destructured imports from `@config/constants` align with the newly typed `as const` objects. No logic changes needed as the missing classes are now defined in step 1.

3.  **Refactor `features/portfolio/components/CTA.tsx`**:
    *   Same as `Capabilities.tsx`, ensure imports align. No logic changes needed.

4.  **Refactor `features/portfolio/components/Hero.tsx`**:
    *   Remove the `ArrowDown` import from `lucide-react`.
    *   Import the `ScrollIndicator` component from `@/components/ui/ScrollIndicator`.
    *   Replace `<div className="mt-12"><ArrowDown className="w-10 h-10 animate-bounce text-black" /></div>` with `<ScrollIndicator />`.

5.  **Refactor `features/portfolio/components/ServiceStack.tsx`**:
    *   Remove the unused `ICON_MAP` object and the unused `lucide-react` imports (`Layers`, `Database`, `Cloud`, `Sparkles`).
    *   Update the `ServiceCard` props to accept `tags: readonly string[]` instead of `string[]` to align with the `as const` definition in `constants.ts`.
    *   Remove the unsafe type cast `<ServiceCard key={s.id} {...s} tags={s.tags as unknown as string[]} />` and replace it with `<ServiceCard key={s.id} {...s} />`.

6.  **Refactor `components/layout/Footer.tsx`**:
    *   Replace the hardcoded `href="#"` for the LinkedIn link with `href={CONTACT.LINKEDIN}`.

7.  **Refactor `components/layout/Navbar.tsx`**:
    *   Remove the unused `CONTACT` import.

## Verification & Testing
1.  Run `npm run lint` to verify that ESLint reports no issues and type casting errors are resolved.
2.  Run `npm run build` to verify the Next.js build succeeds without type errors.
3.  Manually inspect the UI in the browser (via `npm run dev`) to ensure that typography for the "Capabilities" and "CTA" sections renders correctly using the `typo-sub` styles.
4.  Verify that the `ScrollIndicator` in the `Hero` section renders and animates correctly.
5.  Verify that the Footer links map to the correct URLs.