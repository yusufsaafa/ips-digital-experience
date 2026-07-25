"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import styles from "./home-hero-section.module.css";

type HeroInspectionProps = {
  inspection: {
    buttonLabel: string;
    buttonAccessibleName: string;
    helperText: string;
    statusClosed: string;
    statusOpen: string;
    diagramTitle: string;
    diagramDescription: string;
    layers: string[];
    problem: {
      label: string;
      body: string;
      verificationNote: string;
      links: Array<{
        label: string;
        href: string;
      }>;
    };
  };
};

export function HeroInspection({ inspection }: HeroInspectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !isExpanded) {
      return;
    }

    setIsExpanded(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      className={styles.inspection}
      data-expanded={isExpanded ? "true" : "false"}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.inspectionControl}>
        <button
          ref={buttonRef}
          type="button"
          className={styles.inspectionButton}
          aria-label={inspection.buttonAccessibleName}
          aria-controls="hero-inspection"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((current) => !current)}
        >
          <span className={styles.ringGraphic} aria-hidden="true">
            <span />
          </span>
          <span className={styles.inspectionButtonText}>
            {inspection.buttonLabel}
          </span>
        </button>
        <p className={styles.inspectionHelper}>{inspection.helperText}</p>
        <p className={styles.inspectionStatus} aria-live="polite">
          {isExpanded ? inspection.statusOpen : inspection.statusClosed}
        </p>
      </div>

      <div
        id="hero-inspection"
        className={styles.inspectionBody}
        aria-labelledby="hero-inspection-title"
      >
        <figure className={styles.diagramFigure}>
          <CrossSectionDiagram
            title={inspection.diagramTitle}
            description={inspection.diagramDescription}
            layers={inspection.layers}
          />
          <figcaption>{inspection.diagramDescription}</figcaption>
        </figure>

        <section
          className={styles.problemIntro}
          aria-labelledby="hero-problem-title"
        >
          <p className={styles.problemKicker}>Problem introduction</p>
          <h2 id="hero-problem-title">{inspection.problem.label}</h2>
          <p>{inspection.problem.body}</p>
          <p className={styles.verificationNote}>
            {inspection.problem.verificationNote}
          </p>
          <ul className={styles.problemLinks} aria-label="Related homepage paths">
            {inspection.problem.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

type CrossSectionDiagramProps = {
  title: string;
  description: string;
  layers: string[];
};

function CrossSectionDiagram({
  title,
  description,
  layers,
}: CrossSectionDiagramProps) {
  const [
    outerEnvironment,
    rigidHousing,
    interfaceBoundary,
    sealingElement,
    pressureRegion,
    leakagePath,
    protectedRegion,
  ] = layers;

  return (
    <svg
      className={styles.diagram}
      viewBox="0 0 760 440"
      role="img"
      aria-labelledby="hero-inspection-title hero-inspection-description"
    >
      <title id="hero-inspection-title">{title}</title>
      <desc id="hero-inspection-description">{description}</desc>
      <defs>
        <pattern
          id="hero-pressure-pattern"
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <path d="M0 12 12 0" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <marker
          id="hero-arrow"
          markerHeight="8"
          markerWidth="8"
          orient="auto"
          refX="7"
          refY="4"
        >
          <path d="M0 0 8 4 0 8Z" fill="currentColor" />
        </marker>
      </defs>

      <rect
        className={styles.diagramOuter}
        x="28"
        y="34"
        width="704"
        height="372"
        rx="18"
      />
      <path
        className={styles.diagramHousing}
        d="M98 94H660V346H98Z"
      />
      <path
        className={styles.diagramProtected}
        d="M442 132H628V308H442Z"
      />
      <path
        className={styles.diagramPressure}
        d="M132 132H318V308H132Z"
      />
      <path
        className={styles.diagramSeal}
        d="M326 112H432V328H326Z"
      />
      <path
        className={styles.diagramInterface}
        d="M326 112V328M432 112V328"
      />
      <path
        className={styles.diagramLeak}
        d="M284 258C338 236 382 236 438 258C474 272 508 272 548 254"
      />
      <path
        className={styles.diagramPressureArrow}
        d="M192 220H306"
        markerEnd="url(#hero-arrow)"
      />
      <path
        className={styles.diagramPressureArrow}
        d="M226 176H306"
        markerEnd="url(#hero-arrow)"
      />
      <path
        className={styles.diagramPressureArrow}
        d="M226 264H306"
        markerEnd="url(#hero-arrow)"
      />

      <g className={styles.diagramLabels}>
        <text x="54" y="68">{outerEnvironment}</text>
        <text x="112" y="116">{rigidHousing}</text>
        <text x="142" y="154">{pressureRegion}</text>
        <text x="334" y="102">{sealingElement}</text>
        <text x="456" y="154">{protectedRegion}</text>
        <text x="344" y="356">{interfaceBoundary}</text>
        <text x="444" y="244">{leakagePath}</text>
      </g>
    </svg>
  );
}
