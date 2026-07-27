# Task 002 — IPS Business Data Registry

## Objective

Create the typed, centralized data layer that will power the IPS business router, business directory, capability filtering, industry filtering, and future business detail pages.

This task is data and validation work only. Do not redesign the homepage and do not build the interactive finder yet.

## Read before editing

- `docs/product/ips-business-router-v1.md`
- `docs/engineering/business-data-model.md`
- Existing foundation components and design tokens from Task 001

## Source of truth

Use the current public IPS group website as the content source:

- `https://www.integratedpolymersolutions.com/`

The current site lists these IPS businesses:

1. ABBA Roller
2. AkroFire
3. Icon Aerospace Technology
4. IRP Medical
5. MAST Technologies
6. Northern Engineering Sheffield (NES)
7. Oldham Seals
8. RMB Products
9. Rubbercraft
10. Spira Manufacturing
11. Swift Textile Metalizing (STM)

Do not invent business claims, certifications, locations, statistics, capabilities, industries, or URLs. When a value cannot be verified from the current IPS site or the linked official business site, represent it explicitly as unavailable or omit the optional field.

## Required implementation

### 1. Domain types

Create a domain module under a clear path such as:

```text
src/domain/ips/
```

Define and export types for:

```ts
export type BusinessSlug = string;
export type CapabilitySlug = string;
export type IndustrySlug = string;

export type IpsBusiness = {
  name: string;
  shortName?: string;
  slug: BusinessSlug;
  websiteUrl?: string;
  summary: string;
  capabilities: CapabilitySlug[];
  industries: IndustrySlug[];
  locationLabel?: string;
  logoPath?: string;
  featuredImagePath?: string;
};

export type IpsCapability = {
  slug: CapabilitySlug;
  name: string;
  description: string;
};

export type IpsIndustry = {
  slug: IndustrySlug;
  name: string;
  description: string;
};
```

You may refine these definitions when there is a clear reason, but keep the model simple, serializable, and independent of React.

### 2. Canonical registries

Create three readonly registries:

- `ipsBusinesses`
- `ipsCapabilities`
- `ipsIndustries`

Use stable kebab-case slugs.

Initial capability taxonomy should remain concise and useful for routing. Prefer approximately 7–10 broad capabilities rather than dozens of product-level tags. A reasonable starting set is:

- sealing-and-containment
- fire-and-thermal-protection
- emi-rfi-shielding
- medical-elastomers
- rollers-and-surface-engineering
- advanced-thermoplastics-and-linings
- conductive-fabrics
- custom-polymer-components
- rf-microwave-absorbing-materials

Only keep categories that can be supported by at least one verified business description.

Initial industry taxonomy should remain similarly concise. Consider:

- aerospace
- defense
- space
- medical
- semiconductor
- marine
- energy-and-power
- oil-and-gas
- advanced-industrial
- commercial

Do not attach an industry to a business unless the source content supports it.

### 3. Verified business summaries and URLs

Write concise summaries suitable for cards. Each summary should explain the business specialization in one or two sentences, without copying long paragraphs verbatim.

Known official links exposed by the IPS site include:

- ABBA Roller — `https://www.abbaroller.com/`
- AkroFire — `https://www.akrofire.com/`
- Icon Aerospace Technology — `https://www.iconaerotech.com/`
- IRP Medical — `https://www.irpmedical.com/`
- MAST Technologies — `https://www.masttechnologies.com/`
- Northern Engineering Sheffield — `https://www.nes-ips.com/`
- Oldham Seals — `https://www.oldhamseals.co.uk/`
- Rubbercraft — `https://www.rubbercraft.com/`
- Spira Manufacturing — `https://www.spira-emi.com/`
- Swift Textile Metalizing — `https://www.swift-textile.com/`

The current IPS homepage does not expose an RMB Products outbound URL in its parsed content. Verify it from an official source before adding one. Otherwise leave `websiteUrl` undefined and add a brief code comment explaining that verification is pending.

### 4. Query helpers

Add pure, framework-independent helpers such as:

```ts
getBusinessBySlug(slug)
getBusinessesByCapability(capabilitySlug)
getBusinessesByIndustry(industrySlug)
getCapabilityBySlug(slug)
getIndustryBySlug(slug)
```

Requirements:

- Unknown slugs return `undefined` or an empty array as appropriate.
- Helpers must not mutate registry data.
- Matching should use exact canonical slugs, not fuzzy matching.

### 5. Data integrity validation

Add a lightweight validation module or test file that checks:

- all business slugs are unique;
- all capability slugs are unique;
- all industry slugs are unique;
- every capability referenced by a business exists;
- every industry referenced by a business exists;
- every defined capability is used by at least one business;
- every defined industry is used by at least one business;
- external URLs, when present, use `https://`;
- summaries are non-empty.

Use the project's existing test tooling if available. Do not add a heavy testing framework solely for this task. A small Node/TypeScript validation script executed during the task is acceptable if no test runner exists.

### 6. Temporary data preview

Add a minimal temporary section to the foundation preview page that proves the registry works:

- display the total number of businesses;
- display all business names;
- show one capability query result;
- show one industry query result.

Keep this visually simple and reuse the Task 001 components. This is not the final directory UI.

## File organization

A suggested structure is:

```text
src/domain/ips/types.ts
src/domain/ips/capabilities.ts
src/domain/ips/industries.ts
src/domain/ips/businesses.ts
src/domain/ips/queries.ts
src/domain/ips/index.ts
```

Alternative organization is acceptable when equally clear.

## Explicit exclusions

Do not:

- build the final business finder;
- add client-side state management;
- add search or fuzzy matching;
- create business detail pages;
- download or fabricate logos;
- add placeholder stock photography;
- add WebGL, 3D, scroll-jacking, or animation libraries;
- redesign the navigation or hero;
- introduce a CMS or database;
- copy code from the abandoned cinematic branch.

## Acceptance criteria

- All 11 businesses are represented once.
- Registry content is traceable to official IPS or official business sources.
- Capability and industry references are internally valid.
- Pure query helpers work for valid and invalid slugs.
- The preview demonstrates actual registry queries.
- No React imports exist in the domain data modules.
- No unnecessary runtime dependency is added.
- `pnpm lint` passes.
- `pnpm build` passes.
- Desktop and mobile preview have no horizontal overflow.

## Completion report

Report:

1. branch name;
2. files changed;
3. final capability taxonomy;
4. final industry taxonomy;
5. any fields deliberately left unverified;
6. validation method used;
7. `pnpm lint` and `pnpm build` results.
