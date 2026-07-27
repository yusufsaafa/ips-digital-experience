import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { SiteContainer } from "@/components/site-container";
import {
  assertValidIpsRegistry,
  getBusinessesByCapability,
  getBusinessesByIndustry,
  ipsBusinesses,
} from "@/domain/ips";
import styles from "./page.module.css";

export default function Home() {
  assertValidIpsRegistry();

  const shieldingBusinesses = getBusinessesByCapability("emi-rfi-shielding");
  const aerospaceBusinesses = getBusinessesByIndustry("aerospace");

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="foundation-title">
        <SiteContainer className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Foundation preview</p>
            <h1 id="foundation-title">
              A calm base for the IPS Business Router redesign.
            </h1>
            <p>
              This temporary page verifies typography, spacing, containers,
              surfaces, and calls to action before product-specific sections are
              built.
            </p>
            <div className={styles.actions} aria-label="Button variants">
              <ButtonLink href="#preview">Primary action</ButtonLink>
              <ButtonLink href="#surface" variant="secondary">
                Secondary action
              </ButtonLink>
            </div>
          </div>
          <div className={styles.tokenPanel} aria-label="Design token sample">
            <span>Background</span>
            <span>Surface</span>
            <span>Accent</span>
          </div>
        </SiteContainer>
      </section>

      <section id="preview" className={styles.preview}>
        <SiteContainer>
          <SectionHeading
            eyebrow="Typography"
            title="Readable hierarchy for routing workflows."
            description="Headings, body copy, and labels are sized to support scanning on desktop and mobile without relying on animated reveals."
          />

          <div className={styles.typeGrid}>
            <article>
              <p className={styles.sampleLabel}>Heading sample</p>
              <h3>Section titles stay direct and balanced.</h3>
            </article>
            <article>
              <p className={styles.sampleLabel}>Body sample</p>
              <p>
                Body text uses generous line height and restrained contrast so
                future directory cards, filters, and routing copy remain easy to
                compare.
              </p>
            </article>
          </div>
        </SiteContainer>
      </section>

      <section id="surface" className={styles.surfaceSection}>
        <SiteContainer className={styles.surfaceGrid}>
          <SectionHeading
            eyebrow="Surfaces"
            title="Reusable cards with stable spacing."
            description="The system favors modest radius, light borders, and clear focus states over decorative effects."
          />

          <article className={styles.card}>
            <p className={styles.sampleLabel}>Card sample</p>
            <h3>Surface module</h3>
            <p>
              This card previews the shared background, border, radius, shadow,
              and spacing tokens intended for future finder and directory UI.
            </p>
            <ButtonLink href="#foundation-title" variant="secondary">
              Back to top
            </ButtonLink>
          </article>
        </SiteContainer>
      </section>

      <section className={styles.registrySection}>
        <SiteContainer>
          <SectionHeading
            eyebrow="Registry"
            title="Business data registry preview."
            description="This temporary section proves the typed IPS registry and exact-slug query helpers are wired into the foundation page."
          />

          <div className={styles.registryGrid}>
            <article>
              <p className={styles.sampleLabel}>Total businesses</p>
              <strong>{ipsBusinesses.length}</strong>
            </article>

            <article>
              <p className={styles.sampleLabel}>Business names</p>
              <ul>
                {ipsBusinesses.map((business) => (
                  <li key={business.slug}>{business.name}</li>
                ))}
              </ul>
            </article>

            <article>
              <p className={styles.sampleLabel}>Capability query</p>
              <h3>EMI / RFI Shielding</h3>
              <ul>
                {shieldingBusinesses.map((business) => (
                  <li key={business.slug}>{business.name}</li>
                ))}
              </ul>
            </article>

            <article>
              <p className={styles.sampleLabel}>Industry query</p>
              <h3>Aerospace</h3>
              <ul>
                {aerospaceBusinesses.map((business) => (
                  <li key={business.slug}>{business.name}</li>
                ))}
              </ul>
            </article>
          </div>
        </SiteContainer>
      </section>
    </main>
  );
}
