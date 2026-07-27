"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { PolymerAssemblyScene } from "./PolymerAssemblyScene";
import styles from "./CinematicHero3D.module.css";

const chapters = [
  {
    kicker: "Advanced polymer engineering",
    title: "Performance begins at the interface.",
    copy: "IPS designs and manufactures seals, gaskets and engineered polymer components for demanding systems.",
  },
  {
    kicker: "Inside the assembly",
    title: "A seal carries the system around it.",
    copy: "Pressure, temperature, movement and media exposure meet inside one narrow contact zone.",
  },
  {
    kicker: "Failure condition",
    title: "A small loss of contact creates a path.",
    copy: "The visible leak is the last symptom. The failure begins where geometry and material response separate.",
  },
  {
    kicker: "Engineered control",
    title: "Containment returns through design.",
    copy: "IPS tunes geometry, compression and compound behaviour as one connected interface.",
  },
] as const;

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

export function CinematicHero3D() {
  const trackRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = track.getBoundingClientRect();
      const distance = Math.max(1, track.offsetHeight - window.innerHeight);
      setProgress(clamp(-bounds.top / distance));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
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
    <section ref={trackRef} className={styles.track} aria-label="IPS 3D polymer engineering experience">
      <div className={styles.sticky}>
        <div className={styles.canvasWrap} aria-hidden="true">
          <Canvas
            dpr={[1, 1.6]}
            camera={{ position: [0.5, 1.2, 8.2], fov: 34, near: 0.1, far: 100 }}
            gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
            shadows
          >
            <color attach="background" args={["#080909"]} />
            <fog attach="fog" args={["#080909", 8, 15]} />
            <Suspense fallback={null}>
              <PolymerAssemblyScene progress={progress} />
            </Suspense>
          </Canvas>
        </div>

        <div className={styles.atmosphere} aria-hidden="true" />

        <header key={chapterIndex} className={styles.copy}>
          <p>{chapter.kicker}</p>
          <h1>{chapter.title}</h1>
          <span>{chapter.copy}</span>
        </header>

        <footer className={styles.progress} aria-hidden="true">
          <span>{String(chapterIndex + 1).padStart(2, "0")} / 04</span>
          <i><b style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }} /></i>
          <small>{progress < 0.98 ? "Scroll to inspect the interface" : "Continue to IPS capabilities"}</small>
        </footer>
      </div>
    </section>
  );
}
