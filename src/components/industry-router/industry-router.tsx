import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import { getBusinessesByIndustry, ipsIndustries } from "@/domain/ips";
import type { BusinessSlug, IndustrySlug } from "@/domain/ips";
import { IndustryRouterClient } from "./industry-router-client";
import styles from "./industry-router.module.css";

type IndustryRouterBusiness = {
  name: string;
  slug: BusinessSlug;
  websiteUrl: string;
};

export type RouterIndustry = {
  businessCount: number;
  businesses: readonly IndustryRouterBusiness[];
  name: string;
  slug: IndustrySlug;
};

export function IndustryRouter() {
  const industries: readonly RouterIndustry[] = ipsIndustries.map((industry) => {
    const businesses = getBusinessesByIndustry(industry.slug);

    return {
      businessCount: businesses.length,
      businesses: businesses.map((business) => ({
        name: business.name,
        slug: business.slug,
        websiteUrl: business.websiteUrl,
      })),
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
            title={<span id="industries-title">Find expertise by industry.</span>}
          />
        </Reveal>

        <IndustryRouterClient industries={industries} />
      </SiteContainer>
    </section>
  );
}
