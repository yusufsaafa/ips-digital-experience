"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import type { IndustrySlug } from "@/domain/ips";
import type { RouterIndustry } from "./industry-router";
import styles from "./industry-router.module.css";

type IndustryRouterClientProps = {
  industries: readonly RouterIndustry[];
};

export function IndustryRouterClient({ industries }: IndustryRouterClientProps) {
  const defaultIndustry = industries[0];
  const [selectedSlug, setSelectedSlug] = useState<IndustrySlug>(
    defaultIndustry.slug,
  );
  const [resultVisible, setResultVisible] = useState(true);
  const animationFrameRef = useRef<number | null>(null);
  const resultHeadingId = useId();

  const selectedIndustry =
    industries.find((industry) => industry.slug === selectedSlug) ??
    defaultIndustry;

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function selectIndustry(slug: IndustrySlug) {
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
      <Reveal className={styles.marketMatrix} delay={100}>
        <div className={styles.matrixHeader}>
          <p>{industries.length} markets</p>
        </div>

        <div className={styles.industryGrid} aria-label="Select an industry">
          {industries.map((industry) => {
            const isSelected = industry.slug === selectedIndustry.slug;

            return (
              <button
                key={industry.slug}
                type="button"
                className={styles.industryButton}
                aria-pressed={isSelected}
                aria-describedby={`${industry.slug}-industry-description`}
                onClick={() => selectIndustry(industry.slug)}
              >
                <span>{industry.name}</span>
                <span id={`${industry.slug}-industry-description`}>
                  {industry.description}
                </span>
                <strong>
                  {industry.businessCount}{" "}
                  {industry.businessCount === 1 ? "business" : "businesses"}
                </strong>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal
        className={styles.resultRegion}
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
          <div className={styles.marketContext}>
            <h3 id={resultHeadingId}>{selectedIndustry.name}</h3>
            <p>
              {selectedIndustry.businessCount === 1
                ? "1 business"
                : `${selectedIndustry.businessCount} businesses`}
            </p>
          </div>

          <ul className={styles.businessList}>
            {selectedIndustry.businesses.map((business) => (
              <li key={business.slug}>
                <article className={styles.businessResult}>
                  <div className={styles.businessCopy}>
                    <h4>{business.name}</h4>
                    <p>{business.summary}</p>
                  </div>

                  <a
                    href={business.websiteUrl}
                    className={styles.websiteLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${business.name} website in a new tab`}
                  >
                    Visit {business.name}
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}
