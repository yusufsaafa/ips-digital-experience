"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";
import motion from "./CinematicHeroOpening.module.css";
import system from "./CinematicHeroSystem.module.css";
import failure from "./CinematicHeroFailure.module.css";
import solution from "./CinematicHeroSolution.module.css";

type SceneStep = 0 | 1 | 2 | 3 | 4 | 5;

export function CinematicHero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [sceneStep, setSceneStep] = useState<SceneStep>(0);
  const sceneStepRef = useRef<SceneStep>(0);
  const stepEnteredAt = useRef(Date.now());
  const lastWheelAt = useRef(0);

  function changeStep(next: SceneStep) {
    sceneStepRef.current = next;
    stepEnteredAt.current = Date.now();
    setSceneStep(next);
  }

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    function handleWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < 8) return;
      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelAt.current < 900) return;

      const current = sceneStepRef.current;
      if (current === 2 && event.deltaY > 0 && now - stepEnteredAt.current < 4100) return;
      if (current === 3 && event.deltaY > 0 && now - stepEnteredAt.current < 3200) return;
      if (current === 4 && event.deltaY > 0 && now - stepEnteredAt.current < 2800) return;

      lastWheelAt.current = now;
      const next = event.deltaY > 0
        ? Math.min(5, current + 1)
        : Math.max(0, current - 1);

      changeStep(next as SceneStep);
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

  function advanceScene() {
    const current = sceneStepRef.current;
    const elapsed = Date.now() - stepEnteredAt.current;
    if (current === 2 && elapsed < 4100) return;
    if (current === 3 && elapsed < 3200) return;
    if (current === 4 && elapsed < 2800) return;
    changeStep(Math.min(5, current + 1) as SceneStep);
  }

  const isApproached = sceneStep >= 1;
  const isOpening = sceneStep >= 2;
  const isInside = sceneStep >= 3;
  const isFailing = sceneStep === 4;
  const isResolved = sceneStep === 5;

  return (
    <main
      ref={sceneRef}
      data-scene-step={sceneStep}
      className={`${styles.scene} ${motion.scene} ${system.scene} ${failure.scene} ${solution.scene} ${isApproached ? styles.approached : ""} ${isOpening ? motion.opening : ""} ${isInside ? system.inside : ""} ${isFailing ? failure.failing : ""} ${isResolved ? solution.resolved : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
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
            <span
              className={`${styles.bolt} ${motion.bolt}`}
              key={index}
              style={{ "--bolt-index": index } as React.CSSProperties}
            />
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
        <span className={`${styles.openLabel} ${motion.openLabel}`}>
          {isOpening ? "Port unlocked" : "Open inspection"}
        </span>
      </button>

      <section className={`${system.systemWorld} ${failure.systemWorld} ${solution.systemWorld}`} aria-label="Engineering cross-section">
        <div className={system.systemHeader}>
          <span>IPS / SYSTEM INSPECTION 01</span>
          <span>{isResolved ? "BOUNDARY STABILIZED" : isFailing ? "FAILURE TRACE ACTIVE" : "PRESSURE BOUNDARY"}</span>
        </div>

        <div className={`${system.crossSection} ${failure.crossSection} ${solution.crossSection}`} aria-hidden="true">
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

        <div className={`${system.systemCopy} ${failure.systemCopy} ${solution.systemCopy}`}>
          <p>{isResolved ? "03 / ENGINEERED CONTROL" : isFailing ? "02 / FAILURE PROPAGATION" : "01 / BOUNDARY CONDITION"}</p>
          <h2>{isResolved ? "A seal is not a part. It is a controlled interface." : isFailing ? "Pressure finds the smallest path out." : "Every critical failure begins at an interface."}</h2>
          <span>{isResolved ? "Scroll to continue through the IPS system." : isFailing ? "Scroll to engineer the seal." : "Scroll to trace the pressure path."}</span>
        </div>

        <div className={`${failure.alert} ${solution.alert}`} aria-hidden="true">
          <span>{isResolved ? "IPS SEAL RESPONSE" : "INTERFACE BREACH"}</span>
          <strong>{isResolved ? "ΔP CONTAINED / LOAD BALANCED" : "ΔP ESCAPE PATH DETECTED"}</strong>
        </div>

        <div className={solution.statusRail} aria-hidden="true">
          <span>CONTACT</span><i />
          <span>COMPRESSION</span><i />
          <span>CONTAINMENT</span><i />
        </div>
      </section>

      <div className={`${styles.scrollHint} ${motion.scrollHint} ${system.scrollHint}`} aria-hidden="true">
        <span />
        {sceneStep === 0 && "Scroll to approach"}
        {sceneStep === 1 && "Scroll to unlock"}
        {sceneStep === 2 && "Wait for release, then enter"}
        {sceneStep === 3 && "Scroll to trace failure"}
        {sceneStep === 4 && "Scroll to engineer the seal"}
        {sceneStep === 5 && "Boundary stabilized"}
      </div>
    </main>
  );
}
