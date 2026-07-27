# IPS Business Router v1

## Product purpose

The Integrated Polymer Solutions corporate website is a group-level gateway. Its primary job is not to behave like a single-product catalogue. It must help visitors understand the IPS group and route them to the most relevant specialist business.

The redesign must answer three questions quickly:

1. What is IPS?
2. Which capability or industry matches the visitor's need?
3. Which IPS business should the visitor visit or contact?

## Core user journeys

### Journey A — capability-led

A visitor knows the problem or solution category but does not know the IPS business name.

Example:

- Visitor selects `EMI / RFI Shielding`.
- The interface returns matching IPS businesses.
- The visitor reviews short summaries and opens the appropriate company website.

### Journey B — industry-led

A visitor starts from an application environment.

Example:

- Visitor selects `Medical`.
- The interface shows the relevant capabilities and businesses.
- The visitor continues to a specialist company or group contact form.

### Journey C — business-led

A visitor already knows the company name.

Example:

- Visitor opens the full IPS business directory.
- They search or scan company cards.
- They follow an external `Visit company` link.

### Journey D — guided routing

A visitor cannot decide which company is relevant.

Example:

- They select an industry and capability.
- They enter a short application description.
- The site recommends businesses or offers a group-level contact route.

## Information architecture

- `/` — group homepage and routing gateway
- `/capabilities` — capability directory
- `/industries` — industry directory
- `/businesses` — all IPS businesses
- `/businesses/[slug]` — group-level summary and external company link
- `/about` — IPS group overview
- `/contact` — group-level routing form

## Homepage structure

1. Header
2. Clear group-level hero
3. Business finder
4. Capability explorer
5. Industry explorer
6. IPS business directory preview
7. Why IPS group
8. Guided routing CTA
9. Group contact
10. Footer

## Navigation

- Capabilities
- Industries
- Our Businesses
- About IPS
- Contact
- Primary CTA: Find a Business

## Content principles

- Explain the group before showing specialist detail.
- Avoid implying that IPS produces only seals or one product category.
- Use plain language first and technical language second.
- Keep company summaries concise and scannable.
- Never invent certifications, locations, customer names, metrics or capabilities.
- External links must be visibly marked and open the correct company website.

## Design direction

Use Mircate as a clarity and hierarchy reference, not as a visual copy.

Required qualities:

- generous spacing
- clean typography
- strong content hierarchy
- modular cards
- balanced light and dark sections
- restrained color palette
- subtle motion that never blocks navigation
- no long sticky-scroll hero
- no HUD or cyber-industrial interface language
- no hidden content dependent on IntersectionObserver

## Functional requirements

- Filter businesses by capability.
- Filter businesses by industry.
- Search businesses by name or keyword.
- Preserve a single typed data source for all filters and cards.
- Support keyboard navigation and visible focus states.
- Be responsive from mobile through large desktop.
- Work in current Safari, Chrome and Firefox.
- Render useful content without JavaScript-dependent reveal effects.

## Non-goals for v1

- WebGL hero
- long scroll-controlled animation
- CMS integration
- backend lead routing
- user accounts
- fabricated performance metrics

## Definition of done

- A new visitor understands IPS as a group within the first viewport.
- A visitor can reach a relevant company in three interactions or fewer.
- All business cards come from one typed data model.
- `pnpm lint` succeeds.
- `pnpm build` succeeds.
- No section can become an empty black area due to animation or observer state.
