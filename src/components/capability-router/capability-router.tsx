import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import {
  getBusinessesByCapability,
  getCapabilityBySlug,
  getIndustryBySlug,
  ipsCapabilities,
} from "@/domain/ips";
import type {
  BusinessSlug,
  CapabilitySlug,
  IndustrySlug,
} from "@/domain/ips";
import { CapabilityRouterClient } from "./capability-router-client";
import styles from "./capability-router.module.css";

type RouterBusiness = {
  capabilities: readonly string[];
  industries: readonly string[];
  name: string;
  slug: BusinessSlug;
  summary: string;
  websiteUrl: string;
};

export type RouterCapability = {
  businessCount: number;
  businesses: readonly RouterBusiness[];
  description: string;
  name: string;
  slug: CapabilitySlug;
};

function resolveIndustryNames(industrySlugs: readonly IndustrySlug[]) {
  return industrySlugs
    .map((slug) => getIndustryBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

function resolveCapabilityNames(capabilitySlugs: readonly CapabilitySlug[]) {
  return capabilitySlugs
    .map((slug) => getCapabilityBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

export function CapabilityRouter() {
  const capabilities: readonly RouterCapability[] = ipsCapabilities.map(
    (capability) => {
      const businesses = getBusinessesByCapability(capability.slug);

      return {
        businessCount: businesses.length,
        businesses: businesses.map((business) => ({
          capabilities: resolveCapabilityNames(business.capabilities),
          industries: resolveIndustryNames(business.industries),
          name: business.name,
          slug: business.slug,
          summary: business.summary,
          websiteUrl: business.websiteUrl,
        })),
        description: capability.description,
        name: capability.name,
        slug: capability.slug,
      };
    },
  );

  return (
    <section
      id="capabilities"
      className={styles.capabilities}
      aria-labelledby="capabilities-title"
    >
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <span id="capabilities-title">
                Start with the challenge. Find the specialist.
              </span>
            }
            description="Explore the engineering and manufacturing capabilities across the IPS group, then continue to the businesses best aligned with your application."
          />
        </Reveal>

        <CapabilityRouterClient capabilities={capabilities} />
      </SiteContainer>
    </section>
  );
}
