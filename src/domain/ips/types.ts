export type BusinessSlug =
  | "abba-roller"
  | "akrofire"
  | "icon-aerospace-technology"
  | "irp-medical"
  | "mast-technologies"
  | "northern-engineering-sheffield"
  | "oldham-seals"
  | "rmb-products"
  | "rubbercraft"
  | "spira-manufacturing"
  | "swift-textile-metalizing";

export type CapabilitySlug =
  | "sealing-and-containment"
  | "fire-and-thermal-protection"
  | "emi-rfi-shielding"
  | "medical-elastomers"
  | "rollers-and-surface-engineering"
  | "advanced-thermoplastics-and-linings"
  | "conductive-fabrics"
  | "custom-polymer-components"
  | "rf-microwave-absorbing-materials";

export type IndustrySlug =
  | "aerospace"
  | "defense"
  | "space"
  | "medical"
  | "semiconductor"
  | "marine"
  | "energy-and-power"
  | "oil-and-gas"
  | "advanced-industrial"
  | "commercial";

export type IpsBusiness = {
  name: string;
  shortName?: string;
  slug: BusinessSlug;
  websiteUrl: string;
  summary: string;
  capabilities: readonly CapabilitySlug[];
  industries: readonly IndustrySlug[];
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
