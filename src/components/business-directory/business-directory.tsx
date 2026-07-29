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
  capabilities: TagSummary;
  industries: TagSummary;
  name: string;
  slug: BusinessSlug;
  summary: string;
  websiteUrl: string;
};

type TagSummary = {
  hiddenCount: number;
  visible: readonly string[];
};

function summarizeTags(tags: readonly string[]): TagSummary {
  return {
    hiddenCount: Math.max(tags.length - 2, 0),
    visible: tags.slice(0, 2),
  };
}

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
      capabilities: summarizeTags(resolveCapabilityNames(business.capabilities)),
      industries: summarizeTags(resolveIndustryNames(business.industries)),
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
              <span id="businesses-title">The IPS businesses.</span>
            }
            description="Specialized operating companies across engineering and manufacturing domains."
          />
        </Reveal>

        <div className={styles.businessList}>
          {businesses.map((business) => (
            <Reveal
              as="article"
              className={styles.business}
              key={business.slug}
              variant="card"
            >
              <div className={styles.identity}>
                <div className={styles.copy}>
                  <h3>{business.name}</h3>
                  <p>{business.summary}</p>
                </div>
              </div>

              <div className={styles.details}>
                <div className={styles.tagGroup}>
                  <p>Capabilities</p>
                  <ul aria-label={`${business.name} capabilities`}>
                    {business.capabilities.visible.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                    {business.capabilities.hiddenCount > 0 ? (
                      <li
                        className={styles.overflowTag}
                        aria-label={`${business.capabilities.hiddenCount} more capabilities`}
                      >
                        +{business.capabilities.hiddenCount}
                      </li>
                    ) : null}
                  </ul>
                </div>

                <div className={styles.tagGroup}>
                  <p>Industries</p>
                  <ul aria-label={`${business.name} industries`}>
                    {business.industries.visible.map((industry) => (
                      <li key={industry}>{industry}</li>
                    ))}
                    {business.industries.hiddenCount > 0 ? (
                      <li
                        className={styles.overflowTag}
                        aria-label={`${business.industries.hiddenCount} more industries`}
                      >
                        +{business.industries.hiddenCount}
                      </li>
                    ) : null}
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
