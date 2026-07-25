"use client";

import { useState } from "react";
import styles from "./IndustriesSection.module.css";

type IndustryMode = "energy" | "mobility" | "process" | "advanced";

type Industry = {
  index: string;
  title: string;
  eyebrow: string;
  copy: string;
  load: string;
  environment: string;
  consequence: string;
  focus: string;
  mode: IndustryMode;
};

const industries: Industry[] = [
  {
    index: "01",
    title: "Energy & Pressure Systems",
    eyebrow: "HIGH ΔP / CYCLIC LOAD",
    copy: "Sealing interfaces for equipment where pressure retention, media compatibility and service life must remain predictable together.",
    load: "Pressure cycling",
    environment: "Aggressive media",
    consequence: "Loss of containment",
    focus: "CONTACT STABILITY",
    mode: "energy",
  },
  {
    index: "02",
    title: "Mobility & Transportation",
    eyebrow: "MOTION / TEMPERATURE / WEAR",
    copy: "Polymer systems developed around repeated movement, thermal variation and compact packaging constraints.",
    load: "Dynamic motion",
    environment: "Thermal cycling",
    consequence: "Wear propagation",
    focus: "DYNAMIC RESPONSE",
    mode: "mobility",
  },
  {
    index: "03",
    title: "Process & Manufacturing",
    eyebrow: "CHEMICAL / CLEANING / UPTIME",
    copy: "Components and interfaces designed for production environments where compatibility, repeatability and maintenance windows define value.",
    load: "Continuous duty",
    environment: "Chemical exposure",
    consequence: "Unplanned downtime",
    focus: "PROCESS RELIABILITY",
    mode: "process",
  },
  {
    index: "04",
    title: "Advanced Equipment",
    eyebrow: "CUSTOM GEOMETRY / TIGHT TOLERANCE",
    copy: "Application-specific polymer solutions for machinery whose interface conditions cannot be solved with catalogue components.",
    load: "Multi-axis load",
    environment: "Constrained envelope",
    consequence: "System mismatch",
    focus: "APPLICATION FIT",
    mode: "advanced",
  },
];

export function IndustriesSection() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const selected = industries[activeIndustry];

  return (
    <section className={styles.section} aria-labelledby="industries-title">
      <div className={styles.gridBackdrop} aria-hidden="true" />

      <header className={styles.header}>
        <p>IPS / APPLICATION ENVIRONMENTS</p>
        <h2 id="industries-title">Different industries. The same critical boundary.</h2>
        <span>
          The geometry changes. The media changes. The consequence changes. The interface still has to remain controlled.
        </span>
      </header>

      <div className={styles.workspace}>
        <nav className={styles.industryList} aria-label="Application environments" role="tablist">
          {industries.map((industry, index) => {
            const isActive = index === activeIndustry;

            return (
              <button
                key={industry.index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="industry-system-view"
                className={`${styles.industryButton} ${isActive ? styles.active : ""}`}
                onMouseEnter={() => setActiveIndustry(index)}
                onFocus={() => setActiveIndustry(index)}
                onClick={() => setActiveIndustry(index)}
              >
                <span className={styles.index}>{industry.index}</span>
                <span className={styles.buttonCopy}>
                  <strong>{industry.title}</strong>
                  <small>{industry.eyebrow}</small>
                </span>
                <i aria-hidden="true" />
              </button>
            );
          })}
        </nav>

        <article
          id="industry-system-view"
          className={styles.systemView}
          data-mode={selected.mode}
          role="tabpanel"
          aria-live="polite"
        >
          <div className={styles.systemHeader}>
            <span>APPLICATION MODEL / {selected.index}</span>
            <strong>{selected.focus}</strong>
          </div>

          <div className={styles.visual} aria-hidden="true">
            <div className={styles.machineFrame} />
            <div className={styles.primaryBody} />
            <div className={styles.interfaceRing} />
            <div className={styles.polymerElement} />
            <div className={styles.loadField} />
            <div className={styles.motionPath} />
            <div className={styles.target}><i /></div>
            <div className={styles.scan} />
            <span className={styles.labelA}>LOAD INPUT</span>
            <span className={styles.labelB}>CONTROLLED INTERFACE</span>
            <span className={styles.labelC}>SYSTEM OUTPUT</span>
          </div>

          <div className={styles.detail}>
            <p>{selected.eyebrow}</p>
            <h3>{selected.title}</h3>
            <span>{selected.copy}</span>

            <dl>
              <div>
                <dt>PRIMARY LOAD</dt>
                <dd>{selected.load}</dd>
              </div>
              <div>
                <dt>ENVIRONMENT</dt>
                <dd>{selected.environment}</dd>
              </div>
              <div>
                <dt>FAILURE CONSEQUENCE</dt>
                <dd>{selected.consequence}</dd>
              </div>
            </dl>
          </div>
        </article>
      </div>

      <footer className={styles.footer}>
        <span>05 / APPLICATION CONTEXT</span>
        <p>IPS begins with the real load case—not a catalogue assumption.</p>
      </footer>
    </section>
  );
}
