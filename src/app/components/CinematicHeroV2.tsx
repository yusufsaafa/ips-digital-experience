"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./CinematicHeroV2.module.css";

const chapters = [
  {
    kicker: "Advanced polymer engineering",
    title: "Performance begins at the interface.",
    copy: "IPS designs and manufactures critical seals, gaskets and engineered polymer components for demanding systems.",
  },
  {
    kicker: "Inside the assembly",
    title: "A seal carries more than pressure.",
    copy: "Temperature, movement, media exposure and compression meet in a very small contact zone.",
  },
  {
    kicker: "Failure condition",
    title: "A fraction of lost contact creates a path.",
    copy: "The visible leak is only the final symptom. The failure begins where material response and geometry stop working together.",
  },
  {
    kicker: "Engineered control",
    title: "Geometry and material restore containment.",
    copy: "IPS tunes the complete interface so the component performs across the real operating envelope.",
  },
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function range(progress: number, start: number, end: number) {
  return clamp((progress - start) / (end - start));
}

export function CinematicHeroV2() {
  const trackRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    const scene = sceneRef.current;
    if (!track || !scene) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      const next = clamp(-bounds.top / distance);

      const variables = {
        "--progress": next,
        "--approach": range(next, 0.04, 0.3),
        "--separate": range(next, 0.24, 0.56),
        "--failure": range(next, 0.5, 0.74),
        "--resolve": range(next, 0.72, 0.96),
      } as CSSProperties;

      Object.entries(variables).forEach(([key, value]) => {
        scene.style.setProperty(key, String(value));
      });

      setProgress(next);
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const chapterIndex = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
  const chapter = chapters[chapterIndex];

  return (
    <section ref={trackRef} className={styles.track} aria-label="IPS polymer engineering journey">
      <div ref={sceneRef} className={styles.scene}>
        <div className={styles.lightField} aria-hidden="true" />
        <div className={styles.filmGrain} aria-hidden="true" />

        <header key={chapterIndex} className={styles.copy} aria-live="polite">
          <p>{chapter.kicker}</p>
          <h1>{chapter.title}</h1>
          <span>{chapter.copy}</span>
        </header>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.shadow} />
          <div className={styles.cutaway}>
            <div className={`${styles.ring} ${styles.housingRear}`} />
            <div className={`${styles.ring} ${styles.gasketRear}`} />
            <div className={`${styles.ring} ${styles.pressureZone}`}>
              <i className={styles.pressureField} />
            </div>
            <div className={`${styles.ring} ${styles.gasketFront}`}>
              <i className={styles.failurePath} />
            </div>
            <div className={`${styles.ring} ${styles.housingFront}`} />
            <div className={styles.contactBand} />
            <div className={styles.recoveryWave} />
          </div>
        </div>

        <footer className={styles.caption} aria-hidden="true">
          <span>{String(chapterIndex + 1).padStart(2, "0")} / 04</span>
          <i><b style={{ transform: `scaleX(${Math.max(0.025, progress)})` }} /></i>
          <small>{progress < 0.98 ? "Scroll to inspect the polymer interface" : "Continue to IPS capabilities"}</small>
        </footer>
      </div>
    </section>
  );
}
