import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import {
  getBusinessesByIndustry,
  getCapabilityBySlug,
  ipsIndustries,
} from "@/domain/ips";
import type {
  BusinessSlug,
  CapabilitySlug,
  IndustrySlug,
} from "@/domain/ips";
import { IndustryRouterClient } from "./industry-router-client";
import styles from "./industry-router.module.css";

type IndustryRouterBusiness = {
  capabilities: readonly string[];
  name: string;
  slug: BusinessSlug;
  summary: string;
  websiteUrl: string;
};

export type RouterIndustry = {
  businessCount: number;
  businesses: readonly IndustryRouterBusiness[];
  description: string;
  name: string;
  slug: IndustrySlug;
};

function resolveCapabilityNames(capabilitySlugs: readonly CapabilitySlug[]) {
  return capabilitySlugs
    .map((slug) => getCapabilityBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

export function IndustryRouter() {
  const industries: readonly RouterIndustry[] = ipsIndustries.map((industry) => {
    const businesses = getBusinessesByIndustry(industry.slug);

    return {
      businessCount: businesses.length,
      businesses: businesses.map((business) => ({
        capabilities: resolveCapabilityNames(business.capabilities),
        name: business.name,
        slug: business.slug,
        summary: business.summary,
        websiteUrl: business.websiteUrl,
      })),
      description: industry.description,
      name: industry.name,
      slug: industry.slug,
    };
  });

  return (
    <section
      id="industries"
      className={styles.industries}
      aria-labelledby="industries-title"
    >
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title={
              <span id="industries-title">
                Start with your market. Find the businesses built for it.
              </span>
            }
            description="Choose an application environment to see the IPS businesses and specialized capabilities aligned with that market."
          />
        </Reveal>

        <IndustryRouterClient industries={industries} />
      </SiteContainer>
    </section>
  );
}
