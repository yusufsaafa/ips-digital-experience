import { ipsBusinesses } from "./businesses";
import { ipsCapabilities } from "./capabilities";
import { ipsIndustries } from "./industries";
import type { BusinessSlug, CapabilitySlug, IndustrySlug } from "./types";

export function getBusinessBySlug(slug: BusinessSlug) {
  return ipsBusinesses.find((business) => business.slug === slug);
}

export function getBusinessesByCapability(capabilitySlug: CapabilitySlug) {
  return ipsBusinesses.filter((business) =>
    (business.capabilities as readonly CapabilitySlug[]).includes(capabilitySlug),
  );
}

export function getBusinessesByIndustry(industrySlug: IndustrySlug) {
  return ipsBusinesses.filter((business) =>
    (business.industries as readonly IndustrySlug[]).includes(industrySlug),
  );
}

export function getCapabilityBySlug(slug: CapabilitySlug) {
  return ipsCapabilities.find((capability) => capability.slug === slug);
}

export function getIndustryBySlug(slug: IndustrySlug) {
  return ipsIndustries.find((industry) => industry.slug === slug);
}
