# Task 006: Business Directory

## Goal

Replace the temporary IPS Businesses placeholder with a premium editorial directory that answers: "What companies actually make up the IPS Group?"

## Requirements

- Render every IPS operating company from the typed registry.
- Preserve registry order.
- Keep the homepage server-first.
- Do not add dependencies, client state, observers, business detail pages, fake metrics, or placeholder content.
- Show each business name, one-sentence summary, capability tags, industry tags, and an external official website CTA.
- Use `Visit [Business Name]` for each CTA with `target="_blank"`, `rel="noreferrer"`, and an accessible label noting that it opens in a new tab.
- Reuse the existing `Reveal` component without changing its implementation.
- Maintain semantic section and article structure, readable responsive layouts, visible focus states, and no horizontal overflow.

## Validation

- `pnpm lint`
- `pnpm build`
- Manual review for registry coverage, order, official links, desktop/tablet/mobile layout, reduced-motion support, hydration warnings, and console errors.
