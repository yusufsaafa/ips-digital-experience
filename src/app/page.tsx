import { ButtonLink } from "@/components/button-link";
import { BusinessDirectory } from "@/components/business-directory";
import { CapabilityRouter } from "@/components/capability-router";
import { IndustryRouter } from "@/components/industry-router";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SiteContainer } from "@/components/site-container";
import {
  assertValidIpsRegistry,
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
            </Reveal>

            <Reveal
              className={styles.heroSignal}
              aria-label="IPS group overview"
              delay={80}
              variant="hero"
            >
              <div className={styles.signalPlane} aria-hidden="true" />
              <div className={styles.signalContent}>
                <p className={styles.eyebrow}>The IPS Group</p>
                <p>
                  A focused network of specialized engineering and
                  manufacturing businesses.
                </p>
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
              <h2>Group overview placeholder</h2>
              <p>
                This anchor reserves the future group overview section without
                building the full page content in this task.
              </p>
            </Reveal>

            <Reveal as="article" id="contact" delay={100} variant="card">
              <p className={styles.sampleLabel}>Contact</p>
              <h2>Routing contact placeholder</h2>
              <p>
                This anchor reserves the future contact route without adding a
                form or backend workflow.
              </p>
            </Reveal>
          </SiteContainer>
        </Reveal>
      </main>
    </>
  );
}
