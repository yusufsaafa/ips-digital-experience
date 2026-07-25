"use client";

import { useMemo, useState } from "react";
import styles from "./TechnicalRequestSection.module.css";

const systems = ["Pressure boundary", "Rotating equipment", "Process line", "Custom assembly"];
const environments = ["High pressure", "Thermal cycling", "Chemical exposure", "Dynamic motion"];
const symptoms = ["Leakage", "Wear", "Deformation", "Unknown failure"];
const outcomes = ["Containment", "Longer service life", "Root-cause clarity", "New component design"];

export function TechnicalRequestSection() {
  const [system, setSystem] = useState(systems[0]);
  const [environment, setEnvironment] = useState(environments[0]);
  const [symptom, setSymptom] = useState(symptoms[0]);
  const [outcome, setOutcome] = useState(outcomes[0]);
  const [detail, setDetail] = useState("");

  const brief = useMemo(
    () => [
      "IPS TECHNICAL REQUEST",
      "",
      `System: ${system}`,
      `Operating condition: ${environment}`,
      `Observed issue: ${symptom}`,
      `Target outcome: ${outcome}`,
      `Additional context: ${detail || "Not provided"}`,
    ].join("\n"),
    [detail, environment, outcome, symptom, system],
  );

  const mailto = `mailto:engineering@ips.example?subject=${encodeURIComponent(`Technical request / ${system}`)}&body=${encodeURIComponent(brief)}`;

  return (
    <section className={styles.section} aria-labelledby="technical-request-title">
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <p>IPS / START A TECHNICAL BRIEF</p>
        <h2 id="technical-request-title">Bring us the operating condition—not just the part number.</h2>
        <span>
          Define the system, load and observed failure. The generated brief gives an engineering conversation a useful starting point.
        </span>
      </header>

      <div className={styles.workspace}>
        <form className={styles.form} onSubmit={(event) => event.preventDefault()}>
          <ChoiceGroup label="01 / SYSTEM" options={systems} value={system} onChange={setSystem} />
          <ChoiceGroup label="02 / OPERATING CONDITION" options={environments} value={environment} onChange={setEnvironment} />
          <ChoiceGroup label="03 / OBSERVED ISSUE" options={symptoms} value={symptom} onChange={setSymptom} />
          <ChoiceGroup label="04 / TARGET OUTCOME" options={outcomes} value={outcome} onChange={setOutcome} />

          <label className={styles.detailField}>
            <span>05 / ADDITIONAL CONTEXT</span>
            <textarea
              value={detail}
              onChange={(event) => setDetail(event.target.value)}
              placeholder="Pressure, temperature, media, movement, dimensions or what changed before failure..."
              rows={5}
            />
          </label>
        </form>

        <aside className={styles.output} aria-live="polite">
          <div className={styles.outputHeader}>
            <span>GENERATED ENGINEERING BRIEF</span>
            <i>READY</i>
          </div>

          <div className={styles.signal} aria-hidden="true">
            <div className={styles.signalCore} />
            <div className={styles.signalOrbit} />
            <div className={styles.signalScan} />
          </div>

          <dl>
            <div><dt>SYSTEM</dt><dd>{system}</dd></div>
            <div><dt>LOAD CASE</dt><dd>{environment}</dd></div>
            <div><dt>FAILURE SIGNAL</dt><dd>{symptom}</dd></div>
            <div><dt>DESIRED CONTROL</dt><dd>{outcome}</dd></div>
          </dl>

          <a className={styles.submit} href={mailto}>
            <span>START TECHNICAL CONVERSATION</span>
            <b aria-hidden="true">↗</b>
          </a>
          <p className={styles.note}>Replace the placeholder engineering address before production launch.</p>
        </aside>
      </div>

      <footer className={styles.footer}>
        <span>INTEGRATED POLYMER SOLUTIONS</span>
        <strong>ENGINEER THE INTERFACE.</strong>
        <span>PRESSURE / MATERIAL / MOTION / CONTAINMENT</span>
      </footer>
    </section>
  );
}

type ChoiceGroupProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function ChoiceGroup({ label, options, value, onChange }: ChoiceGroupProps) {
  return (
    <fieldset className={styles.choiceGroup}>
      <legend>{label}</legend>
      <div>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={value === option ? styles.active : ""}
            aria-pressed={value === option}
            onClick={() => onChange(option)}
          >
            <i aria-hidden="true" />
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
