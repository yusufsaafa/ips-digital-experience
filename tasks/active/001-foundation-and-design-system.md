# Task 001 — Foundation and Design System

## Objective

Prepare a clean, production-safe foundation for the IPS Business Router redesign. Do not build the final homepage or business finder yet.

## Context

Read these documents before changing code:

- `docs/product/ips-business-router-v1.md`
- `docs/engineering/business-data-model.md`

The new branch starts from `main`. Previous cinematic hero work must not be copied into this implementation.

## Deliverables

1. Inspect the existing Next.js project and preserve only reusable base configuration.
2. Create a small global design-token system for:
   - background and surface colors
   - text colors
   - one restrained accent color
   - spacing scale
   - container widths
   - border radii
   - shadows
   - transition easing
3. Establish global typography and body defaults.
4. Create a reusable `SiteContainer` component.
5. Create a reusable accessible `ButtonLink` component with primary and secondary variants.
6. Create a reusable `SectionHeading` component.
7. Replace the current homepage with a temporary foundation preview showing:
   - typography hierarchy
   - button variants
   - surface/card sample
   - spacing/container behavior
8. Ensure the page has no sticky scroll, WebGL, observer-based reveal, or hidden content.

## Constraints

- Use TypeScript.
- Use CSS Modules or the project's existing styling approach consistently.
- Do not install a UI framework.
- Do not use Tailwind unless it already exists on `main`.
- Do not introduce Three.js or animation libraries.
- Do not add fabricated IPS content.
- Do not use gradients as the main design language.
- Keep the system calm, readable and corporate rather than cyber-industrial.
- Provide visible focus states.
- Respect `prefers-reduced-motion`.

## Required checks

Run and fix all failures:

```bash
pnpm lint
pnpm build
```

## Acceptance criteria

- The homepage renders correctly in a standard desktop viewport and a narrow mobile viewport.
- No content depends on JavaScript to become visible.
- Components are reusable and typed.
- Global tokens are documented with concise comments.
- No code from the cinematic hero branch is introduced.
- Both required checks succeed.

## Completion report

When complete, report:

- files created or changed
- design-token decisions
- lint result
- build result
- any assumptions or unresolved questions
