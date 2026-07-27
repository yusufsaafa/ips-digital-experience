import { ipsBusinesses } from "./businesses";
import { ipsCapabilities } from "./capabilities";
import { ipsIndustries } from "./industries";

type RegistryValidationResult = {
  errors: string[];
  valid: boolean;
};

function findDuplicateValues(values: readonly string[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    }

    seen.add(value);
  }

  return [...duplicates];
}

export function validateIpsRegistry(): RegistryValidationResult {
  const errors: string[] = [];
  const businessSlugs = ipsBusinesses.map((business) => business.slug);
  const capabilitySlugs = ipsCapabilities.map((capability) => capability.slug);
  const industrySlugs = ipsIndustries.map((industry) => industry.slug);
  const capabilitySet = new Set(capabilitySlugs);
  const industrySet = new Set(industrySlugs);
  const usedCapabilities = new Set<string>();
  const usedIndustries = new Set<string>();

  if (ipsBusinesses.length !== 11) {
    errors.push(`Expected 11 IPS businesses, found ${ipsBusinesses.length}`);
  }

  for (const duplicate of findDuplicateValues(businessSlugs)) {
    errors.push(`Duplicate business slug: ${duplicate}`);
  }

  for (const duplicate of findDuplicateValues(capabilitySlugs)) {
    errors.push(`Duplicate capability slug: ${duplicate}`);
  }

  for (const duplicate of findDuplicateValues(industrySlugs)) {
    errors.push(`Duplicate industry slug: ${duplicate}`);
  }

  for (const business of ipsBusinesses) {
    if (!business.name.trim()) {
      errors.push(`Business name is empty: ${business.slug}`);
    }

    if (!business.summary.trim()) {
      errors.push(`Business summary is empty: ${business.slug}`);
    }

    if (!business.websiteUrl.trim()) {
      errors.push(`Business URL is empty: ${business.slug}`);
    } else if (!business.websiteUrl.startsWith("https://")) {
      errors.push(`Business URL must use https: ${business.slug}`);
    }

    if (business.capabilities.length === 0) {
      errors.push(`Business has no capabilities: ${business.slug}`);
    }

    if (business.industries.length === 0) {
      errors.push(`Business has no industries: ${business.slug}`);
    }

    for (const capability of business.capabilities) {
      usedCapabilities.add(capability);

      if (!capabilitySet.has(capability)) {
        errors.push(
          `Unknown capability "${capability}" referenced by ${business.slug}`,
        );
      }
    }

    for (const industry of business.industries) {
      usedIndustries.add(industry);

      if (!industrySet.has(industry)) {
        errors.push(`Unknown industry "${industry}" referenced by ${business.slug}`);
      }
    }
  }

  for (const capability of ipsCapabilities) {
    if (!usedCapabilities.has(capability.slug)) {
      errors.push(`Unused capability slug: ${capability.slug}`);
    }
  }

  for (const industry of ipsIndustries) {
    if (!usedIndustries.has(industry.slug)) {
      errors.push(`Unused industry slug: ${industry.slug}`);
    }
  }

  return {
    errors,
    valid: errors.length === 0,
  };
}

export function assertValidIpsRegistry() {
  const result = validateIpsRegistry();

  if (!result.valid) {
    throw new Error(`IPS registry validation failed:\n${result.errors.join("\n")}`);
  }
}
