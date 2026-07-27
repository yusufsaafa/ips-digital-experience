import styles from "./ModernHome.module.css";

const capabilities = [
  {
    index: "01",
    title: "Sealing systems",
    copy: "Seals, gaskets and O-rings engineered around pressure, movement and operating media.",
    meta: "STATIC / DYNAMIC / HIGH PRESSURE",
  },
  {
    index: "02",
    title: "Engineered elastomers",
    copy: "Application-specific compounds developed for thermal, chemical and mechanical exposure.",
    meta: "ELASTOMERS / RUBBER-METAL / HOSE",
  },
  {
    index: "03",
    title: "Thermal & EMI protection",
    copy: "Materials and components that protect critical systems from heat and electromagnetic interference.",
    meta: "THERMAL / EMI / ABLATIVE",
  },
  {
    index: "04",
    title: "Custom polymer components",
    copy: "Prototype-to-production components designed when catalogue parts cannot meet the application.",
    meta: "DESIGN / VALIDATION / PRODUCTION",
  },
] as const;

const industries = ["Aerospace", "Defense", "Medical", "Semiconductor", "Energy", "Industrial"];

const reasons = [
  {
    title: "Application-specific engineering",
    copy: "We begin with the real load case, environment and interface—not a catalogue part number.",
  },
  {
    title: "Material expertise",
    copy: "Elastomers, thermoplastics and composites are selected around the complete operating envelope.",
  },
  {
    title: "Prototype to production",
    copy: "Design, validation and manufacturing are connected so solutions can move into production cleanly.",
  },
  {
    title: "Critical-environment reliability",
    copy: "Components are engineered for pressure, temperature, chemicals, movement and long duty cycles.",
  },
] as const;

export function ModernHome() {
  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <a className={styles.brand} href="#top" aria-label="IPS home">
          <span className={styles.brandMark}>IPS</span>
          <small>Integrated Polymer Solutions</small>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#industries">Industries</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className={styles.navCta} href="#contact">Start a technical brief</a>
      </header>

      <section id="top" className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Engineered polymer solutions</p>
          <h1>
            Performance where
            <span>systems are most critical.</span>
          </h1>
          <p className={styles.heroText}>
            IPS designs and manufactures seals, gaskets, engineered elastomers and custom polymer components for demanding applications.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#capabilities">Explore capabilities</a>
            <a className={styles.secondaryButton} href="#contact">Discuss an application</a>
          </div>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.productStack}>
            <div className={`${styles.productRing} ${styles.ringRear}`} />
            <div className={`${styles.productRing} ${styles.sealRing}`} />
            <div className={`${styles.productRing} ${styles.ringFront}`} />
            <div className={styles.productCore} />
          </div>
          <div className={styles.visualLabel}>
            <span>01</span>
            <p>Sealing and polymer interfaces</p>
          </div>
        </div>
      </section>

      <section id="industries" className={styles.industryStrip}>
        <p>Engineered for critical industries</p>
        <div>
          {industries.map((industry) => <span key={industry}>{industry}</span>)}
        </div>
      </section>

      <section className={styles.whySection}>
        <div className={styles.sectionIntro}>
          <p>Why IPS</p>
          <h2>Complex operating conditions. Clear engineering decisions.</h2>
          <span>
            We connect material science, component geometry and manufacturing around the actual application.
          </span>
        </div>

        <div className={styles.reasonGrid}>
          {reasons.map((reason, index) => (
            <article key={reason.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{reason.title}</h3>
              <p>{reason.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className={styles.capabilitiesSection}>
        <div className={styles.sectionIntroLight}>
          <p>Capabilities</p>
          <h2>One partner across the polymer component lifecycle.</h2>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((capability) => (
            <article key={capability.index}>
              <div className={styles.capabilityTop}>
                <span>{capability.index}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
              <small>{capability.meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="approach" className={styles.approachSection}>
        <div className={styles.approachVisual} aria-hidden="true">
          <div className={styles.interfaceDiagram}>
            <i /><i /><i /><i />
          </div>
        </div>

        <div className={styles.approachCopy}>
          <p>How we work</p>
          <h2>From operating condition to production-ready component.</h2>
          <ol>
            <li><span>01</span><div><strong>Understand the application</strong><p>Load, temperature, motion, media and failure evidence.</p></div></li>
            <li><span>02</span><div><strong>Engineer the interface</strong><p>Material, geometry and manufacturing route developed together.</p></div></li>
            <li><span>03</span><div><strong>Validate performance</strong><p>Confirm the design against the real operating envelope.</p></div></li>
            <li><span>04</span><div><strong>Move into production</strong><p>Controlled manufacturing with quality requirements built in.</p></div></li>
          </ol>
        </div>
      </section>

      <section className={styles.caseSection}>
        <div>
          <p>Application story</p>
          <h2>The visible failure is rarely the original problem.</h2>
        </div>
        <div className={styles.caseFlow}>
          <article><span>Challenge</span><p>A polymer interface loses contact under combined temperature and pressure.</p></article>
          <article><span>Intervention</span><p>Geometry and compound response are redesigned as one connected system.</p></article>
          <article><span>Result</span><p>Stable containment across the full operating cycle.</p></article>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <p>Start a technical conversation</p>
        <h2>Have a component, failure or application challenge?</h2>
        <span>Share the operating conditions. IPS will help define the right next engineering step.</span>
        <a href="mailto:engineering@integratedpolymersolutions.com">Start a technical brief</a>
      </section>

      <footer className={styles.footer}>
        <div><strong>IPS</strong><span>Integrated Polymer Solutions</span></div>
        <p>Advanced polymer solutions for critical applications.</p>
      </footer>
    </main>
  );
}
