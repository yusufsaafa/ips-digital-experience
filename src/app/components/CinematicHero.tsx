"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";
import motion from "./CinematicHeroOpening.module.css";
import system from "./CinematicHeroSystem.module.css";

type SceneStep = 0 | 1 | 2 | 3;

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

      // Let the mechanical sequence finish before the camera can enter.
      if (current === 2 && event.deltaY > 0 && now - stepEnteredAt.current < 4100) {
        return;
      }

      lastWheelAt.current = now;
      const next = event.deltaY > 0
        ? Math.min(3, current + 1)
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
    if (current === 2 && Date.now() - stepEnteredAt.current < 4100) return;
    changeStep(Math.min(3, current + 1) as SceneStep);
  }

  const isApproached = sceneStep >= 1;
  const isOpening = sceneStep >= 2;
  const isInside = sceneStep === 3;

  return (
    <main
      ref={sceneRef}
      data-scene-step={sceneStep}
      className={`${styles.scene} ${motion.scene} ${system.scene} ${isApproached ? styles.approached : ""} ${isOpening ? motion.opening : ""} ${isInside ? system.inside : ""}`}
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

      <section className={system.systemWorld} aria-label="Engineering cross-section">
        <div className={system.systemHeader}>
          <span>IPS / SYSTEM INSPECTION 01</span>
          <span>PRESSURE BOUNDARY</span>
        </div>

        <div className={system.crossSection} aria-hidden="true">
          <div className={`${system.materialLayer} ${system.housing}`}>
            <span>OUTER HOUSING</span>
          </div>
          <div className={`${system.materialLayer} ${system.seal}`}>
            <span>POLYMER SEAL</span>
          </div>
          <div className={`${system.materialLayer} ${system.interface}`}>
            <span>CRITICAL INTERFACE</span>
          </div>
          <div className={`${system.materialLayer} ${system.pressure}`}>
            <span>PRESSURIZED MEDIA</span>
          </div>
          <div className={system.pressureWave} />
          <div className={system.inspectionLine} />
          <div className={system.targetMarker}><i /></div>
        </div>

        <div className={system.systemCopy}>
          <p>01 / BOUNDARY CONDITION</p>
          <h2>Every critical failure begins at an interface.</h2>
          <span>Scroll to trace the pressure path.</span>
        </div>
      </section>

      <div className={`${styles.scrollHint} ${motion.scrollHint} ${system.scrollHint}`} aria-hidden="true">
        <span />
        {sceneStep === 0 && "Scroll to approach"}
        {sceneStep === 1 && "Scroll to unlock"}
        {sceneStep === 2 && "Wait for release, then enter"}
        {sceneStep === 3 && "Inside pressure boundary"}
      </div>
    </main>
  );
}
