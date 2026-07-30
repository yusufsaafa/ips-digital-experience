import { ButtonLink } from "@/components/button-link";
import { BusinessDirectory } from "@/components/business-directory";
import { CapabilityRouter } from "@/components/capability-router";
import { HeroImageSequence } from "@/components/hero-image-sequence";
import { IndustryRouter } from "@/components/industry-router";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteContainer } from "@/components/site-container";
import {
  assertValidIpsRegistry,
  heroVisualSequence,
  ipsBusinesses,
  ipsCapabilities,
  ipsIndustries,
} from "@/domain/ips";
import styles from "./page.module.css";

export default function Home() {
  assertValidIpsRegistry();

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
            <Reveal className={styles.heroCopy} variant="hero">
              <p className={styles.eyebrow}>Integrated Polymer Solutions</p>
              <h1 id="hero-title">
                Specialized businesses. One path to the right solution.
              </h1>
              <p>
                IPS connects complex applications with the specialized
                businesses built to solve them.
              </p>
              <div className={styles.actions} aria-label="Hero actions">
                <ButtonLink href="#businesses">Find a Business</ButtonLink>
              </div>
            </Reveal>

            <Reveal
              className={styles.heroSignal}
              aria-label="IPS group overview"
              delay={80}
              variant="hero"
            >
              <HeroImageSequence visuals={heroVisualSequence} />
              <div className={styles.signalContent}>
                <p className={styles.eyebrow}>The IPS Group</p>
                <dl>
                  <div>
                    <dt>{registryCounts.businesses}</dt>
                    <dd>Businesses</dd>
                  </div>
                  <div>
                    <dt>{registryCounts.capabilities}</dt>
                    <dd>Capabilities</dd>
                  </div>
                  <div>
                    <dt>{registryCounts.industries}</dt>
                    <dd>Markets</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            <Reveal
              className={styles.identityBand}
              delay={120}
              aria-label="IPS operating businesses"
            >
              <p>Operating businesses</p>
              <div className={styles.marqueeViewport}>
                <div className={styles.marqueeTrack}>
                  <ul className={styles.marqueeGroup}>
                    {ipsBusinesses.map((business) => (
                      <li key={business.slug}>
                        {business.shortName ?? business.name}
                      </li>
                    ))}
                  </ul>
                  <ul className={styles.marqueeGroup} aria-hidden="true">
                    {ipsBusinesses.map((business) => (
                      <li key={`${business.slug}-duplicate`}>
                        {business.shortName ?? business.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </SiteContainer>
        </section>

        <CapabilityRouter />

        <IndustryRouter />

        <BusinessDirectory />

        <Reveal as="section" className={styles.anchorSection}>
          <SiteContainer className={styles.anchorGrid}>
            <Reveal as="article" id="about">
              <p className={styles.sampleLabel}>About IPS</p>
              <h2>Group overview</h2>
            </Reveal>

            <Reveal as="article" id="contact" delay={100} variant="card">
              <p className={styles.sampleLabel}>Contact</p>
              <h2>Talk with IPS</h2>
            </Reveal>
          </SiteContainer>
        </Reveal>
      </main>
    </>
  );
}
