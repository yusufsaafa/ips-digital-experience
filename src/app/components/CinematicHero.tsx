"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";
import motion from "./CinematicHeroOpening.module.css";
import system from "./CinematicHeroSystem.module.css";
import failure from "./CinematicHeroFailure.module.css";
import solution from "./CinematicHeroSolution.module.css";
import transition from "./CinematicHeroTransition.module.css";
import capabilityStyles from "./CinematicHeroCapabilities.module.css";
import controlStyles from "./CinematicHeroControls.module.css";

type SceneStep = 0 | 1 | 2 | 3 | 4 | 5 | 6;

type Capability = {
  index: string;
  title: string;
  copy: string;
  meta: string;
  problem: string;
  intervention: string;
  result: string;
  metricLabel: string;
  metricValue: string;
  mode: "seal" | "material" | "failure" | "custom";
};

const capabilities: Capability[] = [
  {
    index: "01",
    title: "Sealing Systems",
    copy: "Pressure-boundary sealing engineered around contact, compression and operating load.",
    meta: "STATIC / DYNAMIC / HIGH PRESSURE",
    problem: "Leakage begins when contact pressure falls below the operating differential.",
    intervention: "Geometry, squeeze and material response are tuned as one pressure-control system.",
    result: "Stable contact maintained across the full duty cycle.",
    metricLabel: "CONTROL VARIABLE",
    metricValue: "CONTACT PRESSURE",
    mode: "seal",
  },
  {
    index: "02",
    title: "Polymer Engineering",
    copy: "Material selection and geometry developed for chemical, thermal and mechanical reality.",
    meta: "ELASTOMERS / THERMOPLASTICS / COMPOSITES",
    problem: "A compatible material can still fail when heat, media and deformation act together.",
    intervention: "Compound behaviour is mapped against temperature, exposure and mechanical strain.",
    result: "Material response aligned with the real operating envelope.",
    metricLabel: "CONTROL VARIABLE",
    metricValue: "MATERIAL RESPONSE",
    mode: "material",
  },
  {
    index: "03",
    title: "Failure Analysis",
    copy: "Trace the path from visible damage back to the interface condition that caused it.",
    meta: "ROOT CAUSE / VALIDATION / REMEDIATION",
    problem: "Visible damage is usually the final symptom, not the original failure condition.",
    intervention: "Fracture, wear and leakage paths are reconstructed back to their initiating interface.",
    result: "Corrective action targets the cause instead of replacing the symptom.",
    metricLabel: "CONTROL VARIABLE",
    metricValue: "ROOT CAUSE",
    mode: "failure",
  },
  {
    index: "04",
    title: "Custom Components",
    copy: "Application-specific polymer components designed when catalogue parts are not enough.",
    meta: "DESIGN / PROTOTYPE / PRODUCTION",
    problem: "Standard components force compromises when the surrounding system is non-standard.",
    intervention: "The component is designed from the load case, interface and manufacturing route outward.",
    result: "A production-ready part shaped around the actual system constraint.",
    metricLabel: "CONTROL VARIABLE",
    metricValue: "SYSTEM FIT",
    mode: "custom",
  },
];

const forwardLocks: Partial<Record<SceneStep, number>> = {
  2: 4100,
  3: 3200,
  4: 2800,
  5: 2500,
};

export function CinematicHero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [sceneStep, setSceneStep] = useState<SceneStep>(0);
  const [activeCapability, setActiveCapability] = useState(0);
  const sceneStepRef = useRef<SceneStep>(0);
  const stepEnteredAt = useRef(Date.now());
  const lastWheelAt = useRef(0);
  const touchStartY = useRef<number | null>(null);
  const lastTouchAt = useRef(0);

  function changeStep(next: SceneStep) {
    sceneStepRef.current = next;
    stepEnteredAt.current = Date.now();
    setSceneStep(next);
  }

  function moveScene(direction: 1 | -1, options?: { bypassLock?: boolean }) {
    const current = sceneStepRef.current;
    const elapsed = Date.now() - stepEnteredAt.current;

    if (direction > 0) {
      if (current === 6) return false;
      const lock = forwardLocks[current] ?? 0;
      if (!options?.bypassLock && elapsed < lock) return false;
    }

    if (direction < 0 && current === 0) return false;

    const next = direction > 0 ? Math.min(6, current + 1) : Math.max(0, current - 1);
    changeStep(next as SceneStep);
    return true;
  }

  function skipExperience() {
    changeStep(6);
    window.requestAnimationFrame(() => {
      document.getElementById("industries")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    function handleWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < 8) return;

      const current = sceneStepRef.current;
      if (current === 6 && event.deltaY > 0) return;
      if (current === 6 && event.deltaY < 0 && window.scrollY > 8) return;

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelAt.current < 900) return;

      const moved = moveScene(event.deltaY > 0 ? 1 : -1);
      if (moved) lastWheelAt.current = now;
    }

    scene.addEventListener("wheel", handleWheel, { passive: false });
    return () => scene.removeEventListener("wheel", handleWheel);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const scene = sceneRef.current;
    if (!scene || sceneStep >= 2) return;

    const bounds = scene.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    scene.style.setProperty("--pointer-x", `${x}px`);
    scene.style.setProperty("--pointer-y", `${y}px`);
    scene.style.setProperty("--tilt-x", `${((y / bounds.height) - 0.5) * -2.2}deg`);
    scene.style.setProperty("--tilt-y", `${((x / bounds.width) - 0.5) * 2.2}deg`);
  }

  function handlePointerLeave() {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.style.setProperty("--pointer-x", "50%");
    scene.style.setProperty("--pointer-y", "48%");
    scene.style.setProperty("--tilt-x", "0deg");
    scene.style.setProperty("--tilt-y", "0deg");
  }

  function handleTouchStart(event: React.TouchEvent<HTMLElement>) {
    touchStartY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLElement>) {
    const startY = touchStartY.current;
    const endY = event.changedTouches[0]?.clientY;
    touchStartY.current = null;

    if (startY === null || endY === undefined) return;
    const delta = startY - endY;
    if (Math.abs(delta) < 42) return;

    const now = Date.now();
    if (now - lastTouchAt.current < 650) return;

    const moved = moveScene(delta > 0 ? 1 : -1);
    if (moved) lastTouchAt.current = now;
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    const isForward = event.key === "ArrowDown" || event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ";
    const isBackward = event.key === "ArrowUp" || event.key === "ArrowLeft" || event.key === "PageUp";

    if (!isForward && !isBackward) return;
    if (isForward && sceneStepRef.current === 6) return;

    event.preventDefault();
    moveScene(isForward ? 1 : -1);
  }

  function advanceScene() {
    moveScene(1);
  }

  const isApproached = sceneStep >= 1;
  const isOpening = sceneStep >= 2;
  const isInside = sceneStep >= 3;
  const isFailing = sceneStep === 4;
  const isResolved = sceneStep >= 5;
  const isReleased = sceneStep === 6;
  const selectedCapability = capabilities[activeCapability];

  return (
    <main
      ref={sceneRef}
      data-scene-step={sceneStep}
      className={`${styles.scene} ${motion.scene} ${system.scene} ${failure.scene} ${solution.scene} ${transition.scene} ${isApproached ? styles.approached : ""} ${isOpening ? motion.opening : ""} ${isInside ? system.inside : ""} ${isFailing ? failure.failing : ""} ${isResolved ? solution.resolved : ""} ${isReleased ? transition.released : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`IPS cinematic engineering experience. Scene ${sceneStep + 1} of 7.`}
    >
      <div className={`${styles.surface} ${motion.surface} ${system.surface}`} aria-hidden="true" />
      <div className={styles.scratches} aria-hidden="true" />
      <div className={styles.pointerLight} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={motion.chamberGlow} aria-hidden="true" />

      <section className={`${styles.content} ${motion.content}`} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>Integrated Polymer Solutions</p>
        <h1 id="hero-title">
          <span className={styles.titleLine}>See what</span>
          <span className={styles.titleLine}>can fail</span>
          <span className={`${styles.titleLine} ${styles.mutedLine}`}>below the surface.</span>
        </h1>
      </section>

      <button
        className={`${styles.hatch} ${motion.hatch} ${system.hatch}`}
        type="button"
        aria-label={isInside ? "Engineering system entered" : isOpening ? "Inspection port open" : "Open inspection port"}
        onClick={advanceScene}
      >
        <span className={`${styles.hatchShadow} ${motion.hatchShadow}`} aria-hidden="true" />
        <span className={`${styles.outerRing} ${motion.outerRing}`} aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span className={`${styles.bolt} ${motion.bolt}`} key={index} style={{ "--bolt-index": index } as React.CSSProperties} />
          ))}
          <span className={motion.depthWell}>
            <span className={motion.depthRing} />
            <span className={motion.depthRing} />
            <span className={motion.depthRing} />
            <span className={motion.coreLight} />
          </span>
          <span className={`${styles.innerRing} ${motion.innerRing}`}>
            <span className={`${styles.aperture} ${motion.aperture}`} />
            <span className={styles.scanLine} />
          </span>
        </span>
        <span className={`${styles.openLabel} ${motion.openLabel}`}>{isOpening ? "Port unlocked" : "Open inspection"}</span>
      </button>

      <section className={`${system.systemWorld} ${failure.systemWorld} ${solution.systemWorld} ${transition.systemWorld}`} aria-label="Engineering cross-section">
        <div className={system.systemHeader}>
          <span>IPS / SYSTEM INSPECTION 01</span>
          <span>{isReleased ? "ENGINEERING CAPABILITIES" : isResolved ? "BOUNDARY STABILIZED" : isFailing ? "FAILURE TRACE ACTIVE" : "PRESSURE BOUNDARY"}</span>
        </div>

        <div className={`${system.crossSection} ${failure.crossSection} ${solution.crossSection} ${transition.crossSection}`} aria-hidden="true">
          <div className={`${system.materialLayer} ${system.housing}`}><span>OUTER HOUSING</span></div>
          <div className={`${system.materialLayer} ${system.seal} ${failure.seal} ${solution.seal}`}><span>POLYMER SEAL</span></div>
          <div className={`${system.materialLayer} ${system.interface} ${failure.interface} ${solution.interface}`}><span>ENGINEERED INTERFACE</span></div>
          <div className={`${system.materialLayer} ${system.pressure} ${failure.pressure} ${solution.pressure}`}><span>PRESSURIZED MEDIA</span></div>
          <div className={`${system.pressureWave} ${solution.pressureWave}`} />
          <div className={system.inspectionLine} />
          <div className={`${system.targetMarker} ${failure.targetMarker} ${solution.targetMarker}`}><i /></div>
          <svg className={`${failure.failureTrace} ${solution.failureTrace}`} viewBox="0 0 800 620" preserveAspectRatio="none">
            <path className={`${failure.traceGlow} ${solution.traceGlow}`} d="M400 520 C390 470 430 430 398 380 C365 330 430 292 401 248 C382 219 409 198 400 170" />
            <path className={`${failure.traceCore} ${solution.traceCore}`} d="M400 520 C390 470 430 430 398 380 C365 330 430 292 401 248 C382 219 409 198 400 170" />
          </svg>
          <div className={`${failure.breachPoint} ${solution.breachPoint}`} />
          <div className={`${failure.escapePlume} ${solution.escapePlume}`} />
          <div className={solution.repairPulse} />
          <div className={solution.compressionBand} />
        </div>

        <div className={`${system.systemCopy} ${failure.systemCopy} ${solution.systemCopy} ${transition.systemCopy}`}>
          <p>{isReleased ? "04 / INTEGRATED CAPABILITY" : isResolved ? "03 / ENGINEERED CONTROL" : isFailing ? "02 / FAILURE PROPAGATION" : "01 / BOUNDARY CONDITION"}</p>
          <h2>{isReleased ? "Engineering the interface changes the whole system." : isResolved ? "A seal is not a part. It is a controlled interface." : isFailing ? "Pressure finds the smallest path out." : "Every critical failure begins at an interface."}</h2>
          <span>{isReleased ? "Continue into IPS engineering capabilities." : isResolved ? "Scroll to continue through the IPS system." : isFailing ? "Scroll to engineer the seal." : "Scroll to trace the pressure path."}</span>
        </div>

        <div className={`${failure.alert} ${solution.alert} ${transition.alert}`} aria-hidden="true">
          <span>{isReleased ? "SYSTEM MODEL COMPLETE" : isResolved ? "IPS SEAL RESPONSE" : "INTERFACE BREACH"}</span>
          <strong>{isReleased ? "FROM FAILURE TO ENGINEERED CONTROL" : isResolved ? "ΔP CONTAINED / LOAD BALANCED" : "ΔP ESCAPE PATH DETECTED"}</strong>
        </div>

        <div className={`${solution.statusRail} ${transition.statusRail}`} aria-hidden="true">
          <span>CONTACT</span><i />
          <span>COMPRESSION</span><i />
          <span>CONTAINMENT</span><i />
        </div>
      </section>

      <section className={transition.capabilities} aria-labelledby="capabilities-title">
        <header className={transition.capabilitiesHeader}>
          <p>IPS / ENGINEERING CAPABILITIES</p>
          <h2 id="capabilities-title">We engineer what happens at the boundary.</h2>
          <span>From investigation through production, each discipline resolves a different part of the same system.</span>
        </header>

        <div className={capabilityStyles.capabilityWorkspace}>
          <div className={transition.capabilityGrid} role="tablist" aria-label="Engineering capabilities">
            {capabilities.map((capability, index) => {
              const isActive = index === activeCapability;
              return (
                <button
                  className={`${transition.capabilityCard} ${capabilityStyles.capabilityButton} ${isActive ? capabilityStyles.activeCapability : ""}`}
                  key={capability.index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="capability-inspection"
                  onMouseEnter={() => setActiveCapability(index)}
                  onFocus={() => setActiveCapability(index)}
                  onClick={() => setActiveCapability(index)}
                >
                  <div className={transition.cardIndex}>{capability.index}</div>
                  <div className={transition.cardSignal} aria-hidden="true"><i /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <span>{capability.meta}</span>
                </button>
              );
            })}
          </div>

          <article
            id="capability-inspection"
            className={capabilityStyles.inspectionPanel}
            data-mode={selectedCapability.mode}
            role="tabpanel"
            aria-live="polite"
          >
            <div className={capabilityStyles.inspectionHeader}>
              <span>MODULE {selectedCapability.index} / ACTIVE INSPECTION</span>
              <strong>{selectedCapability.metricLabel}: {selectedCapability.metricValue}</strong>
            </div>

            <div className={capabilityStyles.inspectionBody}>
              <div className={capabilityStyles.diagram} aria-hidden="true">
                <div className={capabilityStyles.diagramHousing} />
                <div className={capabilityStyles.diagramCore} />
                <div className={capabilityStyles.diagramInterface} />
                <div className={capabilityStyles.diagramLoad} />
                <div className={capabilityStyles.diagramTarget}><i /></div>
                <div className={capabilityStyles.diagramScan} />
              </div>

              <div className={capabilityStyles.inspectionCopy}>
                <p>PROBLEM CONDITION</p>
                <h3>{selectedCapability.problem}</h3>
                <div>
                  <span>IPS INTERVENTION</span>
                  <p>{selectedCapability.intervention}</p>
                </div>
                <div>
                  <span>ENGINEERED RESULT</span>
                  <p>{selectedCapability.result}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <div className={controlStyles.controls} aria-label="Cinematic scene controls">
        <button className={controlStyles.controlButton} type="button" onClick={() => moveScene(-1)} disabled={sceneStep === 0} aria-label="Previous scene">↑</button>
        <span className={controlStyles.stepStatus} aria-live="polite">{String(sceneStep + 1).padStart(2, "0")} / 07</span>
        <button className={controlStyles.controlButton} type="button" onClick={() => moveScene(1)} disabled={sceneStep === 6} aria-label="Next scene">↓</button>
        <button className={controlStyles.skipButton} type="button" onClick={skipExperience}>Skip experience</button>
      </div>

      {!isReleased && <div className={controlStyles.touchInstruction} aria-hidden="true">Swipe to inspect</div>}

      <div className={`${styles.scrollHint} ${motion.scrollHint} ${system.scrollHint} ${transition.scrollHint}`} aria-hidden="true">
        <span />
        {sceneStep === 0 && "Scroll to approach"}
        {sceneStep === 1 && "Scroll to unlock"}
        {sceneStep === 2 && "Wait for release, then enter"}
        {sceneStep === 3 && "Scroll to trace failure"}
        {sceneStep === 4 && "Scroll to engineer the seal"}
        {sceneStep === 5 && "Scroll to reveal capabilities"}
        {sceneStep === 6 && "Continue through IPS"}
      </div>
    </main>
  );
}
