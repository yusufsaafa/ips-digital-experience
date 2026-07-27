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
