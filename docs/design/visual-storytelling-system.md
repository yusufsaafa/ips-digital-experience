# Visual Storytelling System

## Image Hierarchy

Hero imagery is the largest visual moment and should show a real IPS-connected product or material detail. Capability imagery is secondary and appears only when a verified image maps to the selected capability. Business identity is represented with a restrained typeset band unless consistent official logos are approved later.

## Crop Rules And Aspect Ratios

- Hero: use a stable editorial crop near `4 / 3`, with the primary product kept visible at desktop and mobile sizes.
- Capability: use a compact technical crop near `16 / 10`, sized with explicit image dimensions to avoid layout shift.
- Directory: preserve the text-first directory structure; do not add large image cards.
- Logos: use only when official logo files are consistent and approved; otherwise use typeset names.

## Responsive Behavior

Images stack below hero copy on smaller screens. Capability visuals remain attached to the selected result content and disappear only when no verified mapping exists. Mobile crops must keep the product or material visible and must not cause horizontal overflow.

## Image Treatment

Use restrained borders, neutral surfaces, and consistent object-fit behavior. Avoid decorative overlays, glass effects, noisy collages, heavy shadows, and generic corporate dark-blue treatments.

## Captions And Attribution

Use short captions when an image needs context. Captions identify the visible object and the operating business, for example: `Aerodynamic airframe seal — Rubbercraft`. Do not infer confidential applications, performance claims, customers, or specifications.

## Accessibility Rules

Meaningful images need accurate alt text describing the visible object. Captions provide business/context without replacing alt text. Decorative structural treatments use `aria-hidden` or empty alt text. Identity bands built from duplicated marquee content must hide duplicates from assistive technology; this implementation uses a static single list.

## Fallback Behavior

If no verified image exists for a capability or industry, render the clean text-based layout without a placeholder. If an image fails to load, adjacent headings, summaries, counts, and CTAs remain sufficient to understand the page.

## Rejected Generic Imagery Patterns

- Aircraft, ships, soldiers, hospitals, offices, cityscapes, generic factories, and generic engineers.
- Abstract AI-generated machinery or polymer textures.
- End-market photos mapped only by visual resemblance.
- Decorative lab imagery without a confirmed product, process, or business connection.
