"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import type { CapabilitySlug } from "@/domain/ips";
import type { RouterCapability } from "./capability-router";
import styles from "./capability-router.module.css";

type CapabilityRouterClientProps = {
  capabilities: readonly RouterCapability[];
};

export function CapabilityRouterClient({
  capabilities,
}: CapabilityRouterClientProps) {
  const defaultCapability = capabilities[0];
  const [selectedSlug, setSelectedSlug] = useState<CapabilitySlug>(
    defaultCapability.slug,
  );
  const [resultVisible, setResultVisible] = useState(true);
  const animationFrameRef = useRef<number | null>(null);
  const resultHeadingId = useId();

  const selectedCapability =
    capabilities.find((capability) => capability.slug === selectedSlug) ??
    defaultCapability;

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function selectCapability(slug: CapabilitySlug) {
    if (slug === selectedSlug) {
      return;
    }

    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    setResultVisible(false);
    setSelectedSlug(slug);
    animationFrameRef.current = window.requestAnimationFrame(() => {
      setResultVisible(true);
    });
  }

  return (
    <div className={styles.router}>
      <Reveal className={styles.capabilityIndex} delay={100}>
        <div className={styles.indexIntro}>
          <p>{capabilities.length} capability groups</p>
        </div>

        <div className={styles.capabilityList} aria-label="Select a capability">
          {capabilities.map((capability, index) => {
            const isSelected = capability.slug === selectedCapability.slug;

            return (
              <button
                key={capability.slug}
                type="button"
                className={styles.capabilityButton}
                aria-pressed={isSelected}
                onClick={() => selectCapability(capability.slug)}
              >
                <span className={styles.capabilityNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.capabilityText}>
                  <span>{capability.name}</span>
                </span>
                <span className={styles.matchCount}>
                  {capability.businessCount}{" "}
                  {capability.businessCount === 1 ? "business" : "businesses"}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal
        className={styles.resultColumn}
        delay={200}
        variant="card"
        aria-labelledby={resultHeadingId}
      >
        <div
          className={[
            styles.resultContent,
            resultVisible ? styles.resultContentVisible : undefined,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div className={styles.resultHeader}>
            <h3 id={resultHeadingId}>{selectedCapability.name}</h3>
            <p>{selectedCapability.description}</p>
          </div>

          <div className={styles.resultMedia}>
            {selectedCapability.visual ? (
              <figure className={styles.capabilityVisual}>
                <Image
                  src={selectedCapability.visual.src}
                  alt={selectedCapability.visual.alt}
                  width={selectedCapability.visual.width}
                  height={selectedCapability.visual.height}
                  sizes="(max-width: 980px) 100vw, 44vw"
                />
                <figcaption>{selectedCapability.visual.caption}</figcaption>
              </figure>
            ) : (
              <div className={styles.nonImagePanel} aria-label="Matched businesses">
                <p>
                  {selectedCapability.businessCount} matched{" "}
                  {selectedCapability.businessCount === 1
                    ? "business"
                    : "businesses"}
                </p>
              </div>
            )}
          </div>

          <ul className={styles.businessList}>
            {selectedCapability.businesses.map((business) => (
              <li key={business.slug}>
                <a
                  href={business.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${business.name} website in a new tab`}
                >
                  {business.name}
                </a>
              </li>
            ))}
          </ul>

          <a className={styles.websiteLink} href="#businesses">
            Review matched businesses
          </a>
        </div>
      </Reveal>
    </div>
  );
}
