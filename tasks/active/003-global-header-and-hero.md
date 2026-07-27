# Task 003 — Global Header and IPS Hero

## Objective
Replace the temporary foundation hero with the first production-facing section of the IPS Business Router: a responsive global header and a restrained, confident homepage hero that makes the site's routing purpose immediately clear.

IPS is not a product catalog and the hero must not present IPS as one operating company that manufactures everything. It should introduce IPS as a group of specialized businesses and move visitors toward the right company.

## Read first

- `docs/product/ips-business-router-v1.md`
- `docs/engineering/business-data-model.md`
- Existing components and tokens created in Task 001
- Registry exports under `src/domain/ips`

## Branch

Create this branch from the latest `origin/redesign/ips-business-router`:

`codex/global-header-hero`

## Deliverables

### 1. Global site header

Create reusable header components under a clear location such as `src/components/site-header/`.

Desktop navigation:

- Capabilities → `#capabilities`
- Industries → `#industries`
- Our Businesses → `#businesses`
- About IPS → `#about`
- Contact → `#contact`

Primary header CTA:

- Label: `Find a Business`
- Link: `#businesses`

Requirements:

- Use an accessible semantic `<header>` and `<nav>`.
- Include a text-based IPS wordmark for now. Do not invent or redraw a corporate logo.
- Header should feel established, engineered, and calm—not like a startup SaaS navbar.
- Desktop navigation must remain visually balanced at common widths.
- Add an accessible mobile menu for narrow screens.
- Mobile menu must work without third-party UI libraries.
- Menu button must expose correct `aria-expanded`, `aria-controls`, and an accessible label.
- Close the mobile menu after a navigation item is selected.
- Keyboard focus must remain visible.
- Sticky positioning is allowed, but avoid heavy glassmorphism, exaggerated blur, floating-pill navigation, or decorative animation.

### 2. Production hero

Replace only the temporary foundation hero at the top of `src/app/page.tsx`. Keep the remaining foundation and registry preview sections below it for now unless minor spacing adjustments are required.

Use this information hierarchy:

Eyebrow:

`Integrated Polymer Solutions`

Headline direction:

`Specialized businesses. One path to the right solution.`

Supporting copy direction:

Explain in one concise paragraph that IPS connects customers with specialized engineering and manufacturing businesses serving demanding markets. The wording may be refined, but it must remain factual, direct, and non-promotional.

Primary CTA:

- `Find a Business`
- Link to `#businesses`

Secondary CTA:

- `Explore Capabilities`
- Link to `#capabilities`

Add a concise proof line using registry-backed facts, for example:

- `11 specialized businesses`
- `9 capability groups`
- `10 markets served`

Derive these counts from the registry arrays rather than hard-coding them in multiple places.

### 3. Hero visual treatment

The hero needs visual authority without using fake industrial renders or AI-looking decorative machinery.

Allowed:

- Typography-led layout
- Refined grid composition
- Restrained geometric or material-inspired CSS treatment
- Subtle lines, planes, or layered surfaces
- A factual registry-derived business/capability signal

Do not use:

- WebGL or canvas
- Stock photography
- Generated imagery
- Fake product photography
- Giant gradient blobs
- Glowing neon effects
- Animated particles
- Scroll-jacking
- Typewriter text
- Continuous decorative motion
- Generic dashboard cards

The hero should still feel complete when all motion is disabled.

### 4. Section anchors

Ensure the current temporary sections provide stable IDs for header navigation where possible:

- `capabilities`
- `industries`
- `businesses`
- `about`
- `contact`

Because the real sections are not all built yet, lightweight temporary anchor targets are acceptable. Do not build the full routers or footer in this task.

### 5. Component quality

- Reuse `SiteContainer`, `ButtonLink`, and established design tokens.
- Extend `ButtonLink` only when necessary; avoid breaking its current API.
- Keep server components by default.
- Isolate only the mobile navigation interaction into a client component.
- Avoid a monolithic `page.tsx`.
- Do not add external dependencies.
- Do not change registry facts or taxonomy assignments.

## Responsive acceptance criteria

Check at minimum:

- 1440 × 900
- 1280 × 800
- 768 × 1024
- 390 × 844
- 320 × 568

At all sizes:

- No horizontal overflow.
- Headline remains readable and does not produce awkward one-word orphan lines where reasonably avoidable.
- Header controls remain reachable.
- Mobile menu does not obscure or trap the page after navigation.
- CTAs meet practical touch-target sizing.
- Hero does not depend on viewport-height tricks that clip content on small screens.

## Accessibility

- One `<h1>` on the page.
- Logical heading order.
- Semantic navigation labels.
- Visible focus states.
- Mobile menu works by keyboard.
- Respect `prefers-reduced-motion`.
- Decorative elements must be hidden from assistive technology.

## Verification

Run:

```bash
pnpm lint
pnpm build
```

Perform browser sanity checks at the required widths.

## Report on completion

Provide:

1. Files changed
2. Header component structure
3. Mobile-menu behavior
4. Final hero copy
5. Registry-derived counts used
6. Responsive checks
7. `pnpm lint` and `pnpm build` results
8. Any assumptions

## Out of scope

- Final capability router
- Final industry router
- Full business directory
- Business-detail routes
- Footer implementation
- Contact form
- Logo design
- Photography or asset sourcing
- Large animation systems
