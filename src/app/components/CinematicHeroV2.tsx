"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./CinematicHeroV2.module.css";

const chapters = [
  {
    title: "Failure rarely begins where you can see it.",
    copy: "Critical polymer interfaces fail quietly—before the system shows a visible symptom.",
  },
  {
    title: "Move closer to the boundary.",
    copy: "Pressure, motion and material response meet inside a space measured in fractions of a millimetre.",
  },
  {
    title: "The interface carries the system.",
    copy: "Housing, seal and media behave as one connected mechanical condition.",
  },
  {
    title: "A small loss becomes a failure path.",
    copy: "When contact pressure falls, the system creates an escape route for the load it was meant to contain.",
  },
  {
    title: "Control returns through engineering.",
    copy: "Geometry, material and compression are tuned together until containment becomes stable again.",
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

      const vars: CSSProperties = {
        "--progress": next,
        "--approach": range(next, 0.08, 0.34),
        "--open": range(next, 0.3, 0.58),
        "--failure": range(next, 0.55, 0.78),
        "--resolve": range(next, 0.76, 0.96),
      } as CSSProperties;

      Object.entries(vars).forEach(([key, value]) => {
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
    <section ref={trackRef} className={styles.track} aria-label="IPS engineering film">
      <div ref={sceneRef} className={styles.scene}>
        <div className={styles.lightField} aria-hidden="true" />
        <div className={styles.filmGrain} aria-hidden="true" />

        <header className={styles.copy} aria-live="polite">
          <p>Integrated Polymer Solutions</p>
          <h1>{chapter.title}</h1>
          <span>{chapter.copy}</span>
        </header>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.shadow} />
          <div className={styles.assembly}>
            <div className={`${styles.layer} ${styles.housingBack}`} />
            <div className={`${styles.layer} ${styles.sealBack}`} />
            <div className={`${styles.layer} ${styles.media}`}>
              <i className={styles.pressureGlow} />
            </div>
            <div className={`${styles.layer} ${styles.sealFront}`}>
              <i className={styles.breach} />
            </div>
            <div className={`${styles.layer} ${styles.housingFront}`}>
              {Array.from({ length: 8 }).map((_, index) => (
                <i key={index} style={{ "--index": index } as CSSProperties} />
              ))}
            </div>
            <div className={styles.core} />
            <div className={styles.repairPulse} />
          </div>
        </div>

        <div className={styles.caption} aria-hidden="true">
          <span>{String(chapterIndex + 1).padStart(2, "0")}</span>
          <i><b style={{ transform: `scaleX(${progress})` }} /></i>
          <small>{progress < 0.98 ? "Scroll to move through the system" : "Continue to IPS capabilities"}</small>
        </div>
      </div>
    </section>
  );
}
