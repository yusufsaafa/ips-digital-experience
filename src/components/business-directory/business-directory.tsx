import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import {
  getCapabilityBySlug,
  getIndustryBySlug,
  ipsBusinesses,
} from "@/domain/ips";
import type {
  BusinessSlug,
  CapabilitySlug,
  IndustrySlug,
} from "@/domain/ips";
import styles from "./business-directory.module.css";

type DirectoryBusiness = {
  capabilities: readonly string[];
  industries: readonly string[];
  name: string;
  slug: BusinessSlug;
  summary: string;
  websiteUrl: string;
};

function resolveCapabilityNames(capabilitySlugs: readonly CapabilitySlug[]) {
  return capabilitySlugs
    .map((slug) => getCapabilityBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

function resolveIndustryNames(industrySlugs: readonly IndustrySlug[]) {
  return industrySlugs
    .map((slug) => getIndustryBySlug(slug)?.name)
    .filter((name): name is string => Boolean(name));
}

export function BusinessDirectory() {
  const businesses: readonly DirectoryBusiness[] = ipsBusinesses.map(
    (business) => ({
      capabilities: resolveCapabilityNames(business.capabilities),
      industries: resolveIndustryNames(business.industries),
      name: business.name,
      slug: business.slug,
      summary: business.summary,
      websiteUrl: business.websiteUrl,
    }),
  );

  return (
    <section
      id="businesses"
      className={styles.directory}
      aria-labelledby="businesses-title"
    >
      <SiteContainer>
        <Reveal>
          <SectionHeading
            eyebrow="IPS Businesses"
            title={
              <span id="businesses-title">
                The operating companies behind the IPS Group.
              </span>
            }
            description="IPS brings together specialized operating companies serving distinct engineering, manufacturing, polymer, elastomeric, shielding, thermal, and advanced-material domains."
          />
        </Reveal>

        <div className={styles.businessList}>
          {businesses.map((business, index) => (
            <Reveal
              as="article"
              className={styles.business}
              delay={Math.min(index * 100, 500)}
              key={business.slug}
              variant="card"
            >
              <div className={styles.identity}>
                <p className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className={styles.copy}>
                  <h3>{business.name}</h3>
                  <p>{business.summary}</p>
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.tagGroup}>
                  <p>Capabilities</p>
                  <ul aria-label={`${business.name} capabilities`}>
                    {business.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.tagGroup}>
                  <p>Industries</p>
                  <ul aria-label={`${business.name} industries`}>
                    {business.industries.map((industry) => (
                      <li key={industry}>{industry}</li>
                    ))}
                  </ul>
                </div>

                <a
                  className={styles.websiteLink}
                  href={business.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${business.name} website in a new tab`}
                >
                  Visit {business.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
