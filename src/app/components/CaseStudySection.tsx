"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CaseStudySection.module.css";

type CasePhase = {
  id: "symptom" | "cause" | "response" | "validation";
  index: string;
  label: string;
  title: string;
  copy: string;
  signal: string;
};

const phases: CasePhase[] = [
  {
    id: "symptom",
    index: "01",
    label: "Observed symptom",
    title: "Intermittent leakage under pressure cycling.",
    copy: "The assembly remained dry at steady state, but repeated load transitions opened a temporary escape path at the sealing interface.",
    signal: "TRANSIENT LEAK PATH",
  },
  {
    id: "cause",
    index: "02",
    label: "Root cause",
    title: "Contact pressure collapsed during thermal movement.",
    copy: "The original geometry treated temperature and pressure as separate conditions. In operation, their combined movement reduced local compression below the containment threshold.",
    signal: "LOCAL CONTACT LOSS",
  },
  {
    id: "response",
    index: "03",
    label: "IPS intervention",
    title: "The interface was re-engineered as a load system.",
    copy: "Seal profile, material response and installation squeeze were redesigned together so movement increased support instead of creating an opening.",
    signal: "CONTROLLED COMPRESSION",
  },
  {
    id: "validation",
    index: "04",
    label: "Validation result",
    title: "Containment remained stable through the duty cycle.",
    copy: "The revised interface maintained continuous contact through pressure and temperature transitions in the representative validation model.",
    signal: "BOUNDARY STABILIZED",
  },
];

export function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const selectedPhase = phases[activePhase];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ""}`}
      aria-labelledby="case-study-title"
    >
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <p>IPS / REPRESENTATIVE ENGINEERING CASE</p>
        <h2 id="case-study-title">A leak is the end of the story. We start at the beginning.</h2>
        <span>
          This anonymized system model shows how IPS moves from field symptom to engineered control.
        </span>
      </header>

      <div className={styles.workspace}>
        <nav className={styles.phaseRail} aria-label="Case study phases">
          {phases.map((phase, index) => {
            const isActive = index === activePhase;
            return (
              <button
                key={phase.id}
                type="button"
                className={`${styles.phaseButton} ${isActive ? styles.activePhase : ""}`}
                aria-current={isActive ? "step" : undefined}
                onMouseEnter={() => setActivePhase(index)}
                onFocus={() => setActivePhase(index)}
                onClick={() => setActivePhase(index)}
              >
                <span>{phase.index}</span>
                <strong>{phase.label}</strong>
                <i aria-hidden="true" />
              </button>
            );
          })}
        </nav>

        <article className={styles.casePanel} data-phase={selectedPhase.id} aria-live="polite">
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.machineShell} />
            <div className={styles.pressureCore} />
            <div className={styles.sealProfile} />
            <div className={styles.contactBand} />
            <div className={styles.thermalShift} />
            <div className={styles.leakTrace} />
            <div className={styles.controlPulse} />
            <div className={styles.target}><i /></div>
            <div className={styles.scanLine} />
            <div className={styles.visualLabel}>CASE 24-A / INTERFACE MODEL</div>
          </div>

          <div className={styles.caseCopy}>
            <div className={styles.caseMeta}>
              <span>PHASE {selectedPhase.index}</span>
              <strong>{selectedPhase.signal}</strong>
            </div>
            <p>{selectedPhase.label}</p>
            <h3>{selectedPhase.title}</h3>
            <div className={styles.copyLine} />
            <span>{selectedPhase.copy}</span>
          </div>
        </article>
      </div>

      <footer className={styles.outcomeStrip}>
        <div><span>FIELD INPUT</span><strong>Pressure-cycle leakage</strong></div>
        <i aria-hidden="true" />
        <div><span>ENGINEERING CONTROL</span><strong>Contact pressure continuity</strong></div>
        <i aria-hidden="true" />
        <div><span>VALIDATION FOCUS</span><strong>Full duty-cycle containment</strong></div>
      </footer>
    </section>
  );
}
