import { ButtonLink } from "@/components/button-link";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { SiteContainer } from "@/components/site-container";
import {
  assertValidIpsRegistry,
  getBusinessesByCapability,
  getBusinessesByIndustry,
  ipsBusinesses,
  ipsCapabilities,
  ipsIndustries,
} from "@/domain/ips";
import styles from "./page.module.css";

export default function Home() {
  assertValidIpsRegistry();

  const shieldingBusinesses = getBusinessesByCapability("emi-rfi-shielding");
  const aerospaceBusinesses = getBusinessesByIndustry("aerospace");
  const registryCounts = {
    businesses: ipsBusinesses.length,
    capabilities: ipsCapabilities.length,
    industries: ipsIndustries.length,
  };

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <SiteContainer className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Integrated Polymer Solutions</p>
              <h1 id="hero-title">
                Specialized businesses. One path to the right solution.
              </h1>
              <p>
                IPS connects customers with specialized engineering and
                manufacturing businesses serving demanding aerospace, defense,
                medical, industrial, and commercial markets.
              </p>
              <div className={styles.actions} aria-label="Hero actions">
                <ButtonLink href="#businesses">Find a Business</ButtonLink>
                <ButtonLink href="#capabilities" variant="secondary">
                  Explore Capabilities
                </ButtonLink>
              </div>
              <p className={styles.proofLine}>
                {registryCounts.businesses} specialized businesses;{" "}
                {registryCounts.capabilities} capability groups;{" "}
                {registryCounts.industries} markets served
              </p>
            </div>

            <div className={styles.heroSignal} aria-label="Registry overview">
              <div className={styles.signalPlane} aria-hidden="true" />
              <div className={styles.signalContent}>
                <p className={styles.sampleLabel}>Group routing signal</p>
                <dl>
                  <div>
                    <dt>{registryCounts.businesses}</dt>
                    <dd>Specialized businesses</dd>
                  </div>
                  <div>
                    <dt>{registryCounts.capabilities}</dt>
                    <dd>Capability groups</dd>
                  </div>
                  <div>
                    <dt>{registryCounts.industries}</dt>
                    <dd>Markets served</dd>
                  </div>
                </dl>
              </div>
            </div>
          </SiteContainer>
        </section>

        <section id="capabilities" className={styles.preview}>
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
                  future directory cards, filters, and routing copy remain easy
                  to compare.
                </p>
              </article>
            </div>
          </SiteContainer>
        </section>

        <section id="industries" className={styles.surfaceSection}>
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
                This card previews the shared background, border, radius,
                shadow, and spacing tokens intended for future finder and
                directory UI.
              </p>
              <ButtonLink href="#hero-title" variant="secondary">
                Back to top
              </ButtonLink>
            </article>
          </SiteContainer>
        </section>

        <section id="businesses" className={styles.registrySection}>
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

        <section className={styles.anchorSection}>
          <SiteContainer className={styles.anchorGrid}>
            <article id="about">
              <p className={styles.sampleLabel}>About IPS</p>
              <h2>Group overview placeholder</h2>
              <p>
                This anchor reserves the future group overview section without
                building the full page content in this task.
              </p>
            </article>

            <article id="contact">
              <p className={styles.sampleLabel}>Contact</p>
              <h2>Routing contact placeholder</h2>
              <p>
                This anchor reserves the future contact route without adding a
                form or backend workflow.
              </p>
            </article>
          </SiteContainer>
        </section>
      </main>
    </>
  );
}
