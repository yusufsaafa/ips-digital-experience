"use client";

import { useState } from "react";
import styles from "./EngineeringProcessSection.module.css";

const stages = [
  {
    index: "01",
    title: "Observe",
    label: "FIELD EVIDENCE",
    copy: "Capture the real operating condition before assumptions become design inputs.",
    inputs: ["Failure surface", "Duty cycle", "Media exposure"],
    output: "VERIFIED CONDITION",
  },
  {
    index: "02",
    title: "Model",
    label: "SYSTEM BEHAVIOUR",
    copy: "Translate pressure, motion, heat and contact into a controllable interface model.",
    inputs: ["Load path", "Contact state", "Material response"],
    output: "ROOT-CAUSE MODEL",
  },
  {
    index: "03",
    title: "Engineer",
    label: "CONTROL STRATEGY",
    copy: "Develop geometry, material and manufacturing route as one connected solution.",
    inputs: ["Seal geometry", "Compound choice", "Production method"],
    output: "ENGINEERED DESIGN",
  },
  {
    index: "04",
    title: "Validate",
    label: "DUTY CONFIRMATION",
    copy: "Test the intervention against the condition that caused the original failure.",
    inputs: ["Pressure cycle", "Thermal range", "Acceptance criteria"],
    output: "RELEASED CONTROL",
  },
] as const;

export function EngineeringProcessSection() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <section className={styles.section} aria-labelledby="engineering-process-title">
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <p>IPS / ENGINEERING PROCESS</p>
        <h2 id="engineering-process-title">Evidence first. Control by design.</h2>
        <span>
          Each phase removes uncertainty before the component reaches production.
        </span>
      </header>

      <div className={styles.workspace}>
        <div className={styles.stageList} role="tablist" aria-label="Engineering process stages">
          {stages.map((item, index) => {
            const isActive = index === activeStage;
            return (
              <button
                key={item.index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="process-stage-panel"
                className={isActive ? styles.active : ""}
                onMouseEnter={() => setActiveStage(index)}
                onFocus={() => setActiveStage(index)}
                onClick={() => setActiveStage(index)}
              >
                <span>{item.index}</span>
                <strong>{item.title}</strong>
                <i aria-hidden="true" />
              </button>
            );
          })}
        </div>

        <article id="process-stage-panel" className={styles.panel} role="tabpanel" aria-live="polite">
          <div className={styles.panelHeader}>
            <span>{stage.index} / {stage.label}</span>
            <strong>{stage.output}</strong>
          </div>

          <div className={styles.diagram} aria-hidden="true" data-stage={activeStage}>
            <div className={styles.source}><i /><span>INPUT</span></div>
            <div className={styles.transfer}><i /><i /><i /></div>
            <div className={styles.core}><span>{stage.index}</span><b /></div>
            <div className={styles.transfer}><i /><i /><i /></div>
            <div className={styles.result}><i /><span>CONTROL</span></div>
          </div>

          <div className={styles.copy}>
            <div>
              <p>{stage.label}</p>
              <h3>{stage.title}</h3>
              <span>{stage.copy}</span>
            </div>
            <ul>
              {stage.inputs.map((input) => <li key={input}>{input}</li>)}
            </ul>
          </div>
        </article>
      </div>

      <div className={styles.rail} aria-hidden="true">
        <span>UNCERTAINTY</span><i /><span>EVIDENCE</span><i /><span>CONTROL</span>
      </div>
    </section>
  );
}
