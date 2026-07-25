"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";
import motion from "./CinematicHeroOpening.module.css";
import system from "./CinematicHeroSystem.module.css";
import failure from "./CinematicHeroFailure.module.css";
import solution from "./CinematicHeroSolution.module.css";
import transition from "./CinematicHeroTransition.module.css";
import capabilityStyles from "./CinematicHeroCapabilities.module.css";
import scrollStyles from "./CinematicHeroScroll.module.css";

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

const sceneLabels = ["Approach", "Unlock", "Enter", "Inspect", "Failure", "Resolve", "Release"] as const;

export function CinematicHero() {
  const trackRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  const [sceneStep, setSceneStep] = useState<SceneStep>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const scene = sceneRef.current;
    if (!track || !scene) return;

    let frame = 0;

    const updateTimeline = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -bounds.top / distance));
      const nextStep = Math.min(6, Math.floor(progress * 7)) as SceneStep;

      setScrollProgress(progress);
      setSceneStep((current) => (current === nextStep ? current : nextStep));
      scene.style.setProperty("--scroll-progress", progress.toFixed(4));
      scene.style.setProperty("--scene-progress", ((progress * 7) % 1).toFixed(4));
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const scene = sceneRef.current;
    if (!scene || sceneStep >= 2) return;

    const bounds = scene.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    scene.style.setProperty("--pointer-x", `${x}px`);
    scene.style.setProperty("--pointer-y", `${y}px`);
    scene.style.setProperty("--tilt-x", `${((y / bounds.height) - 0.5) * -1.2}deg`);
    scene.style.setProperty("--tilt-y", `${((x / bounds.width) - 0.5) * 1.2}deg`);
  }

  function handlePointerLeave() {
    const scene = sceneRef.current;
    if (!scene) return;
    scene.style.setProperty("--pointer-x", "50%");
    scene.style.setProperty("--pointer-y", "48%");
    scene.style.setProperty("--tilt-x", "0deg");
    scene.style.setProperty("--tilt-y", "0deg");
  }

  const isApproached = sceneStep >= 1;
  const isOpening = sceneStep >= 2;
  const isInside = sceneStep >= 3;
  const isFailing = sceneStep === 4;
  const isResolved = sceneStep >= 5;
  const isReleased = sceneStep === 6;
  const selectedCapability = capabilities[activeCapability];

  return (
    <section ref={trackRef} className={scrollStyles.track} aria-label="IPS cinematic engineering journey">
      <main
        ref={sceneRef}
        data-scene-step={sceneStep}
        className={`${scrollStyles.stickyScene} ${styles.scene} ${motion.scene} ${system.scene} ${failure.scene} ${solution.scene} ${transition.scene} ${isApproached ? styles.approached : ""} ${isOpening ? motion.opening : ""} ${isInside ? system.inside : ""} ${isFailing ? failure.failing : ""} ${isResolved ? solution.resolved : ""} ${isReleased ? transition.released : ""}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        aria-label={`IPS cinematic engineering experience. Scene ${sceneStep + 1} of 7.`}
      >
        <div className={scrollStyles.ambientMotion} aria-hidden="true" />
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

        <div className={`${styles.hatch} ${motion.hatch} ${system.hatch}`} aria-hidden="true">
          <span className={`${styles.hatchShadow} ${motion.hatchShadow}`} />
          <span className={`${styles.outerRing} ${motion.outerRing}`}>
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
          <span className={`${styles.openLabel} ${motion.openLabel}`}>{isOpening ? "Port unlocked" : "Inspection boundary"}</span>
        </div>

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
            <span>{isReleased ? "Continue into IPS engineering capabilities." : isResolved ? "The intervention restores contact and containment." : isFailing ? "The smallest uncontrolled path becomes the system failure." : "Follow the interface from condition to cause."}</span>
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

            <article id="capability-inspection" className={capabilityStyles.inspectionPanel} data-mode={selectedCapability.mode} role="tabpanel" aria-live="polite">
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
                  <div><span>IPS INTERVENTION</span><p>{selectedCapability.intervention}</p></div>
                  <div><span>ENGINEERED RESULT</span><p>{selectedCapability.result}</p></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <div className={scrollStyles.progressRail} aria-hidden="true">
          <div className={scrollStyles.progressCopy}>
            <span>{String(sceneStep + 1).padStart(2, "0")} / 07</span>
            <strong>{sceneLabels[sceneStep]}</strong>
          </div>
          <div className={scrollStyles.progressLine}><i /></div>
        </div>

        <div className={`${styles.scrollHint} ${motion.scrollHint} ${system.scrollHint} ${transition.scrollHint}`} aria-hidden="true">
          <span />
          {isReleased ? "Continue through IPS" : "Scroll to inspect"}
        </div>
      </main>
    </section>
  );
}
