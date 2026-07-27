# Task 005 — Industry Router

## Objective
Replace the temporary homepage `#industries` preview with a production-quality Industry Router driven entirely by the typed IPS registry.

The Industry Router helps visitors begin from their market or application environment, understand which IPS businesses serve that market, and continue directly to the relevant official company websites.

## Requirements
- Use the typed IPS registry as the only data source.
- Keep the homepage server-first.
- Isolate only interactive industry selection into a focused client component.
- Reuse existing layout components, design tokens, and `Reveal`.
- Do not add dependencies.
- Do not create another IntersectionObserver or animation system.
- Do not modify registry facts or taxonomy.
- Do not create business detail routes.
- Replace only the temporary industry section.
- Preserve the completed Capability Router behavior.

## Component Structure
Create:

```text
src/components/industry-router/
  industry-router.tsx
  industry-router-client.tsx
  industry-router.module.css
  index.ts
```

The server component derives all display data from the registry and prepares serializable props. The client component owns only selected industry state and result switching.

## Acceptance Criteria
- All registry industries render in registry order.
- Default selection is the first registry industry.
- Selecting an industry updates matched businesses.
- Business counts and matched businesses are derived from query helpers.
- Business results show company name, summary, relevant capabilities, and official website CTA.
- No internal business detail links or placeholder CTAs are shown.
- Official links open in a new tab with `rel="noreferrer"` and accessible new-tab labels.
- Buttons use native semantics with `aria-pressed` and visible focus.
- Result switching uses subtle opacity/vertical motion and respects reduced motion.
- Responsive layouts work from mobile through large desktop with no horizontal overflow.
- `pnpm lint` passes.
- `pnpm build` passes.
