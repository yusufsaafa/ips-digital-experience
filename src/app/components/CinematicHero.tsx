"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CinematicHero.module.css";

export function CinematicHero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [isApproached, setIsApproached] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    function handleWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < 8) return;

      event.preventDefault();
      setIsApproached(event.deltaY > 0);
    }

    scene.addEventListener("wheel", handleWheel, { passive: false });
    return () => scene.removeEventListener("wheel", handleWheel);
  }, []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const scene = sceneRef.current;
    if (!scene) return;

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

  return (
    <main
      ref={sceneRef}
      className={`${styles.scene} ${isApproached ? styles.approached : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.surface} aria-hidden="true" />
      <div className={styles.scratches} aria-hidden="true" />
      <div className={styles.pointerLight} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <section className={styles.content} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>Integrated Polymer Solutions</p>
        <h1 id="hero-title">
          <span className={styles.titleLine}>See what</span>
          <span className={styles.titleLine}>can fail</span>
          <span className={`${styles.titleLine} ${styles.mutedLine}`}>below the surface.</span>
        </h1>
      </section>

      <button
        className={styles.hatch}
        type="button"
        aria-label="Open inspection port"
        onClick={() => setIsApproached(true)}
      >
        <span className={styles.hatchShadow} aria-hidden="true" />
        <span className={styles.outerRing} aria-hidden="true">
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              className={styles.bolt}
              key={index}
              style={{ "--bolt-index": index } as React.CSSProperties}
            />
          ))}
          <span className={styles.innerRing}>
            <span className={styles.aperture} />
            <span className={styles.scanLine} />
          </span>
        </span>
        <span className={styles.openLabel}>Open inspection</span>
      </button>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
        {isApproached ? "Scroll up to withdraw" : "Scroll to approach"}
      </div>
    </main>
  );
}
