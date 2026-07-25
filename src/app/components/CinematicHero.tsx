"use client";

import { useRef } from "react";
import styles from "./CinematicHero.module.css";

export function CinematicHero() {
  const sceneRef = useRef<HTMLElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const scene = sceneRef.current;
    if (!scene) return;

    const bounds = scene.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    scene.style.setProperty("--pointer-x", `${x}px`);
    scene.style.setProperty("--pointer-y", `${y}px`);
    scene.style.setProperty("--tilt-x", `${((y / bounds.height) - 0.5) * -3}deg`);
    scene.style.setProperty("--tilt-y", `${((x / bounds.width) - 0.5) * 3}deg`);
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
      className={styles.scene}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.surface} aria-hidden="true" />
      <div className={styles.pointerLight} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />

      <section className={styles.content} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>Integrated Polymer Solutions</p>
        <h1 id="hero-title">
          See what can fail
          <span>below the surface.</span>
        </h1>
      </section>

      <button className={styles.hatch} type="button" aria-label="Open inspection port">
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
        <span className={styles.inspectLabel}>Inspect</span>
      </button>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
        Move to inspect
      </div>
    </main>
  );
}
