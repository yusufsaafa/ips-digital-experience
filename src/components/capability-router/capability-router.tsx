import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import {
  capabilityVisuals,
  getBusinessesByCapability,
  ipsCapabilities,
} from "@/domain/ips";
import type { BusinessSlug, CapabilitySlug } from "@/domain/ips";
import type { IpsVisualAsset } from "@/domain/ips";
import { CapabilityRouterClient } from "./capability-router-client";
import styles from "./capability-router.module.css";

type RouterBusiness = {
  name: string;
  slug: BusinessSlug;
  websiteUrl: string;
};

export type RouterCapability = {
  businessCount: number;
  businesses: readonly RouterBusiness[];
  description: string;
  name: string;
  slug: CapabilitySlug;
  visual?: IpsVisualAsset;
};

export function CapabilityRouter() {
  const capabilities: readonly RouterCapability[] = ipsCapabilities.map(
    (capability) => {
      const businesses = getBusinessesByCapability(capability.slug);

      return {
        businessCount: businesses.length,
        businesses: businesses.map((business) => ({
          name: business.name,
          slug: business.slug,
          websiteUrl: business.websiteUrl,
        })),
        description: capability.description,
        name: capability.name,
        slug: capability.slug,
        visual: capabilityVisuals[capability.slug],
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
            title={<span id="capabilities-title">Find expertise by capability.</span>}
          />
        </Reveal>

        <CapabilityRouterClient capabilities={capabilities} />
      </SiteContainer>
    </section>
  );
}
