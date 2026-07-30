"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";
import type { IpsVisualAsset } from "@/domain/ips";
import styles from "./hero-image-sequence.module.css";

const intervalMs = 15000;

type HeroImageSequenceProps = {
  visuals: readonly IpsVisualAsset[];
};

export function HeroImageSequence({ visuals }: HeroImageSequenceProps) {
  const labelId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const activeVisual = visuals[activeIndex];
  const previousVisual =
    previousIndex === null ? null : visuals[previousIndex] ?? null;
  const [activeSubject, activeBusiness] = activeVisual.caption.split(" — ");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function updatePreference() {
      setPrefersReducedMotion(mediaQuery.matches);
    }

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const showVisual = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndex) {
      return;
    }

    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || visuals.length < 2) {
      return;
    }

    const timer = window.setTimeout(() => {
      showVisual((activeIndex + 1) % visuals.length);
    }, intervalMs);

    return () => window.clearTimeout(timer);
  }, [
    activeIndex,
    isPaused,
    prefersReducedMotion,
    showVisual,
    visuals.length,
  ]);

  return (
    <figure
      className={styles.sequence}
      aria-labelledby={labelId}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onPointerMove={() => setIsPaused(true)}
    >
      <div className={styles.stage}>
        {previousVisual ? (
          <Image
            key={`previous-${previousVisual.src}`}
            className={styles.previousImage}
            src={previousVisual.src}
            alt=""
            width={previousVisual.width}
            height={previousVisual.height}
            sizes="(max-width: 760px) 100vw, 42vw"
            aria-hidden="true"
          />
        ) : null}

        <Image
          key={activeVisual.src}
          className={styles.activeImage}
          src={activeVisual.src}
          alt={activeVisual.alt}
          width={activeVisual.width}
          height={activeVisual.height}
          sizes="(max-width: 760px) 100vw, 42vw"
          priority={activeIndex === 0}
        />
      </div>

      <figcaption className={styles.caption}>
        <span
          key={activeVisual.caption}
          id={labelId}
          className={styles.label}
          aria-live="polite"
        >
          <span className={styles.subject}>{activeSubject}</span>
          {activeBusiness ? (
            <>
              <span className={styles.separator}>/</span>
              <span className={styles.business}>{activeBusiness}</span>
            </>
          ) : null}
        </span>
      </figcaption>
    </figure>
  );
}
