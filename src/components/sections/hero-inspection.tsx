"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import styles from "./home-hero-section.module.css";

type InspectionStepId = "boundary" | "pressure" | "failure-path";
type InspectionState = "closed" | InspectionStepId | "problem-ready";
type VerificationStatus = "temporary" | "stakeholder-review-required";

type HeroInspectionStep = {
  id: InspectionStepId;
  number: number;
  title: string;
  description: string;
  engineeringConcept: string;
  diagramDescription: string;
  verificationStatus: VerificationStatus;
};

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
    controls: {
      back: string;
      next: string;
      skip: string;
      exit: string;
      exploreProblem: string;
    };
    steps: HeroInspectionStep[];
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
  const [inspectionState, setInspectionState] =
    useState<InspectionState>("closed");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const problemRef = useRef<HTMLElement>(null);

  const activeStep = inspection.steps.find(
    (step) => step.id === inspectionState,
  );
  const isOpen = inspectionState !== "closed";
  const isProblemReady = inspectionState === "problem-ready";
  const diagramState: InspectionState =
    inspectionState === "problem-ready" ? "failure-path" : inspectionState;
  const currentStepIndex = activeStep
    ? inspection.steps.findIndex((step) => step.id === activeStep.id)
    : -1;
  const statusText = isOpen
    ? activeStep
      ? `${inspection.statusOpen} Current step: ${activeStep.number} ${activeStep.title}.`
      : `${inspection.statusOpen} ${inspection.problem.label} is ready.`
    : inspection.statusClosed;

  function openInspection() {
    setInspectionState("boundary");
  }

  function closeInspection() {
    setInspectionState("closed");
    buttonRef.current?.focus();
  }

  function advanceInspection() {
    if (!activeStep) {
      setInspectionState("boundary");
      return;
    }

    const nextStep = inspection.steps[currentStepIndex + 1];

    if (nextStep) {
      setInspectionState(nextStep.id);
      return;
    }

    setInspectionState("problem-ready");
  }

  function moveBack() {
    if (!activeStep || currentStepIndex <= 0) {
      return;
    }

    setInspectionState(inspection.steps[currentStepIndex - 1].id);
  }

  function skipToProblem() {
    setInspectionState("problem-ready");
    problemRef.current?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !isOpen) {
      return;
    }

    event.preventDefault();
    closeInspection();
  }

  return (
    <div
      className={styles.inspection}
      data-inspection-state={inspectionState}
      data-expanded={isOpen ? "true" : "false"}
      onKeyDown={handleKeyDown}
    >
      <noscript>
        <style>{`.${styles.enhancedOnly}{display:none!important}`}</style>
      </noscript>

      <div className={styles.inspectionControl}>
        <button
          ref={buttonRef}
          type="button"
          className={`${styles.inspectionButton} ${styles.enhancedOnly}`}
          aria-label={inspection.buttonAccessibleName}
          aria-controls="hero-inspection"
          aria-expanded={isOpen}
          onClick={openInspection}
        >
          <span className={styles.ringGraphic} aria-hidden="true">
            <span />
          </span>
          <span className={styles.inspectionButtonText}>
            {isOpen ? "Restart inspection" : inspection.buttonLabel}
          </span>
        </button>
        <p className={styles.inspectionHelper}>{inspection.helperText}</p>
        <p className={styles.inspectionStatus} aria-live="polite">
          {statusText}
        </p>
      </div>

      <div
        id="hero-inspection"
        className={styles.inspectionBody}
        aria-labelledby="hero-inspection-heading"
      >
        <section className={styles.stepSummary}>
          <p className={styles.problemKicker}>
            {activeStep
              ? `Step ${activeStep.number} of ${inspection.steps.length}`
              : "Inspection summary"}
          </p>
          <h2 id="hero-inspection-heading">
            {activeStep?.title ?? "Pressure-boundary inspection"}
          </h2>
          <p>
            {activeStep?.description ??
              "Review the conceptual cross-section, then use the inspection sequence to focus on the boundary, pressure, and possible failure path."}
          </p>
          {activeStep ? (
            <p className={styles.stepConcept}>
              <strong>Engineering concept:</strong>{" "}
              {activeStep.engineeringConcept}
            </p>
          ) : null}
        </section>

        <figure className={styles.diagramFigure}>
          <CrossSectionDiagram
            title={inspection.diagramTitle}
            description={inspection.diagramDescription}
            layers={inspection.layers}
            state={diagramState}
          />
          <figcaption>
            {activeStep?.diagramDescription ?? inspection.diagramDescription}
          </figcaption>
        </figure>

        <noscript>
          <ol className={styles.noScriptSteps}>
            {inspection.steps.map((step) => (
              <li key={step.id}>
                <h3>
                  {step.number}. {step.title}
                </h3>
                <p>{step.description}</p>
                <p>{step.engineeringConcept}</p>
              </li>
            ))}
          </ol>
        </noscript>

        <div
          className={`${styles.inspectionControls} ${styles.enhancedOnly}`}
          aria-label="Inspection controls"
        >
          <div className={styles.stepSelectors} aria-label="Inspection steps">
            {inspection.steps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={styles.stepSelector}
                aria-current={activeStep?.id === step.id ? "step" : undefined}
                onClick={() => setInspectionState(step.id)}
              >
                <span>{step.number}</span>
                {step.title}
              </button>
            ))}
          </div>

          <div className={styles.sequenceControls}>
            <button
              type="button"
              className={styles.controlButton}
              disabled={!activeStep || currentStepIndex === 0}
              onClick={moveBack}
            >
              {inspection.controls.back}
            </button>
            <button
              type="button"
              className={styles.controlButton}
              onClick={skipToProblem}
            >
              {inspection.controls.skip}
            </button>
            <button
              type="button"
              className={styles.controlButton}
              disabled={!isOpen}
              onClick={closeInspection}
            >
              {inspection.controls.exit}
            </button>
            <button
              type="button"
              className={styles.controlButtonPrimary}
              onClick={
                activeStep?.id === "failure-path"
                  ? skipToProblem
                  : advanceInspection
              }
            >
              {activeStep?.id === "failure-path"
                ? inspection.controls.exploreProblem
                : inspection.controls.next}
            </button>
          </div>
        </div>

        <section
          ref={problemRef}
          className={styles.problemIntro}
          data-problem-ready={isProblemReady ? "true" : "false"}
          aria-labelledby="hero-problem-title"
          tabIndex={-1}
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
  state: InspectionState;
};

function CrossSectionDiagram({
  title,
  description,
  layers,
  state,
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
      data-diagram-state={state}
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

      <g className={styles.layerOuter}>
        <rect
          className={styles.diagramOuter}
          x="28"
          y="34"
          width="704"
          height="372"
          rx="18"
        />
        <text x="54" y="68">{outerEnvironment}</text>
      </g>

      <g className={styles.layerHousing}>
        <path className={styles.diagramHousing} d="M98 94H660V346H98Z" />
        <text x="112" y="116">{rigidHousing}</text>
      </g>

      <g className={styles.layerProtected}>
        <path
          className={styles.diagramProtected}
          d="M442 132H628V308H442Z"
        />
        <text x="456" y="154">{protectedRegion}</text>
      </g>

      <g className={styles.layerPressure}>
        <path className={styles.diagramPressure} d="M132 132H318V308H132Z" />
        <text x="142" y="154">{pressureRegion}</text>
      </g>

      <g className={styles.layerSeal}>
        <path className={styles.diagramSeal} d="M326 112H432V328H326Z" />
        <text x="334" y="102">{sealingElement}</text>
      </g>

      <g className={styles.layerInterface}>
        <path className={styles.diagramInterface} d="M326 112V328M432 112V328" />
        <text x="344" y="356">{interfaceBoundary}</text>
      </g>

      <g className={styles.layerDirection}>
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
      </g>

      <g className={styles.layerLeak}>
        <path
          className={styles.diagramLeak}
          d="M284 258C338 236 382 236 438 258C474 272 508 272 548 254"
        />
        <text x="444" y="244">{leakagePath}</text>
      </g>
    </svg>
  );
}
