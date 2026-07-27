# IPS Business Data Model

## Goal

All routing, filtering, cards and business detail pages must use one typed source of truth.

## Type definitions

```ts
export type CapabilityId =
  | "sealing-containment"
  | "fire-thermal-protection"
  | "emi-rfi-shielding"
  | "medical-elastomers"
  | "rollers-surface-engineering"
  | "advanced-thermoplastics"
  | "conductive-fabrics"
  | "custom-polymer-components";

export type IndustryId =
  | "aerospace"
  | "defense"
  | "space"
  | "medical"
  | "semiconductor"
  | "marine"
  | "energy"
  | "advanced-industrial";

export type IpsBusiness = {
  id: string;
  slug: string;
  name: string;
  websiteUrl: string;
  shortSummary: string;
  longSummary?: string;
  capabilities: CapabilityId[];
  industries: IndustryId[];
  keywords: string[];
  logoPath?: string;
  imagePath?: string;
  featured?: boolean;
};

export type Capability = {
  id: CapabilityId;
  name: string;
  summary: string;
};

export type Industry = {
  id: IndustryId;
  name: string;
  summary: string;
};
```

## Suggested file structure

```text
src/
  data/
    ips-businesses.ts
    capabilities.ts
    industries.ts
  lib/
    business-routing.ts
  types/
    ips.ts
```

## Routing helpers

```ts
getBusinessesByCapability(capabilityId)
getBusinessesByIndustry(industryId)
searchBusinesses(query)
getBusinessBySlug(slug)
getRecommendedBusinesses({ capabilityId, industryId })
```

## Data rules

- Use stable lowercase kebab-case IDs.
- Do not duplicate summaries inside components.
- Do not hardcode business names inside filter logic.
- Treat company websites as external links.
- Validate every website URL before publishing.
- Use only confirmed company capabilities and industries.
- Unknown values remain omitted rather than guessed.

## Initial content status

The first implementation may use a clearly marked provisional dataset collected from the current IPS corporate website. Every record must include a source note in code comments until verified.
