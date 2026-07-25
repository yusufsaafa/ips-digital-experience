"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";
import motion from "./CinematicHeroOpening.module.css";

type SceneStep = 0 | 1 | 2;

export function CinematicHero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [sceneStep, setSceneStep] = useState<SceneStep>(0);
  const lastWheelAt = useRef(0);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    function handleWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < 8) return;

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelAt.current < 900) return;
      lastWheelAt.current = now;

      setSceneStep((current) => {
        if (event.deltaY > 0) return Math.min(2, current + 1) as SceneStep;
        return Math.max(0, current - 1) as SceneStep;
      });
    }

    scene.addEventListener("wheel", handleWheel, { passive: false });
    return () => scene.removeEventListener("wheel", handleWheel);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const scene = sceneRef.current;
    if (!scene || sceneStep === 2) return;

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
    setSceneStep((current) => Math.min(2, current + 1) as SceneStep);
  }

  const isApproached = sceneStep >= 1;
  const isOpening = sceneStep === 2;

  return (
    <main
      ref={sceneRef}
      data-scene-step={sceneStep}
      className={`${styles.scene} ${motion.scene} ${isApproached ? styles.approached : ""} ${isOpening ? motion.opening : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={`${styles.surface} ${motion.surface}`} aria-hidden="true" />
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
        className={`${styles.hatch} ${motion.hatch}`}
        type="button"
        aria-label={isOpening ? "Inspection port open" : "Open inspection port"}
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

      <div className={`${styles.scrollHint} ${motion.scrollHint}`} aria-hidden="true">
        <span />
        {sceneStep === 0 && "Scroll to approach"}
        {sceneStep === 1 && "Scroll to unlock"}
        {sceneStep === 2 && "Entering system"}
      </div>
    </main>
  );
}
