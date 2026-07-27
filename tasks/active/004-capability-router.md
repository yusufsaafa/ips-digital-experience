# Task 004 — Capability Router

## Objective
Replace the temporary `#capabilities` foundation preview with a production-quality capability router driven entirely by the typed IPS registry.

The section must help a visitor quickly understand what IPS can solve and identify the specialist businesses connected to each capability.

## Product intent
IPS is a group-level routing layer, not a single manufacturer. The capability section should make the portfolio legible without pretending every business provides every service.

The experience should feel editorial, composed, and technically credible—not like a SaaS dashboard, filter panel, or generic card grid.

## Required data sources
Use only:

- `src/domain/ips/capabilities.ts`
- `src/domain/ips/businesses.ts`
- existing typed query helpers

Do not duplicate capability names, descriptions, business assignments, or counts in component-local data.

## Required implementation

### 1. Replace the temporary capability preview
Remove the current typography/foundation sample under `id="capabilities"` and replace it with a real section.

Recommended section copy:

- Eyebrow: `Capabilities`
- Heading: `Start with the challenge. Find the specialist.`
- Supporting copy: `Explore the engineering and manufacturing capabilities across the IPS group, then continue to the businesses best aligned with your application.`

Minor copy refinement is allowed, but preserve this meaning and tone.

### 2. Capability navigation
Render all 9 capability groups from the registry.

The interface must:

- present every capability clearly
- show the capability name and concise description
- show the number of matching businesses derived from registry queries
- allow users to select a capability
- default to the first capability
- use semantic buttons for selection
- expose the selected state with `aria-pressed` or an equivalent accessible pattern
- support full keyboard operation without custom arrow-key behavior unless implementing a true ARIA tab pattern correctly

Keep only the interactive router boundary as a client component. The homepage and data registry must remain server-first.

### 3. Selected capability result
For the selected capability, show the matching IPS businesses from the registry.

Each matching business entry must include:

- business name
- short summary
- relevant industry labels resolved from the industry registry, not raw slugs
- external official website link

External links must:

- open in a new tab
- use `rel="noreferrer"`
- provide clear accessible text indicating the destination is the business website

Do not invent logos, locations, imagery, certifications, metrics, or capabilities.

### 4. Visual direction
Use a composed split-layout or editorial index/result structure.

Desired feel:

- capability list/index on one side
- selected capability context and businesses on the other
- restrained borders and separators
- strong typography and spacing
- clear selection state
- responsive single-column flow on smaller screens

Avoid:

- pill clouds
- horizontally scrolling chips
- dashboard tabs
- excessive boxed cards
- glassmorphism
- icon libraries
- decorative gradients
- large shadows
- carousels
- accordions that hide all capability descriptions

### 5. Motion
Use the existing `Reveal` component for the section introduction and business results where appropriate.

Selection changes may use a subtle CSS opacity/translate transition, but:

- do not add an animation library
- do not use blur, scale, bounce, rotation, or spring motion
- do not delay interaction
- respect `prefers-reduced-motion`

Do not create another IntersectionObserver implementation.

### 6. Component structure
Create focused components under a suitable folder, for example:

```text
src/components/capability-router/
  capability-router.tsx
  capability-router.module.css
  index.ts
```

Additional small files are allowed when they clearly improve separation.

Do not place the entire interactive implementation directly in `page.tsx`.

### 7. Temporary sections
Keep the current hero, global header, business registry preview, industries placeholder, about placeholder, and contact placeholder unchanged except for adjustments strictly required to integrate the capability router.

Do not build the Industry Router or Business Directory in this task.

## Accessibility requirements

- Selection controls must have visible keyboard focus.
- Selected capability must be programmatically identifiable.
- Business lists must use appropriate list/article semantics.
- Color alone must not indicate selection.
- Heading order must remain valid.
- Content must remain usable with JavaScript disabled where reasonably possible; at minimum, the first capability and its matched businesses must be server-rendered or present in the initial HTML.
- Reduced-motion users must not receive entrance or selection animation.

## Responsive requirements
Validate at minimum:

- 1440 × 900
- 1280 × 800
- 768 × 1024
- 390 × 844
- 320 × 568

There must be no horizontal overflow. Capability labels, descriptions, business links, and industry labels must remain readable at 320 px.

## Constraints

- No new dependencies.
- Do not alter registry facts or taxonomy assignments.
- Do not add routes yet.
- Do not add images or fabricated assets.
- Do not replace the existing design tokens.
- Preserve server components by default.

## Acceptance criteria

- The temporary typography capability preview is gone.
- All 9 capabilities are rendered from registry data.
- Selecting a capability updates the matching business result.
- Matching businesses are produced from the existing query/data layer.
- Industry names are resolved from the industry registry.
- Official business links are correct and accessible.
- The component works at all required viewport sizes.
- Existing reveal behavior is reused rather than duplicated.
- `pnpm lint` passes.
- `pnpm build` passes.

## Completion report
Report:

- files changed
- component/server-client structure
- selection accessibility pattern
- default selected capability
- capability-to-business counts
- external-link behavior
- responsive checks
- reduced-motion behavior
- lint/build results
- assumptions
