"use client";

import { useEffect, useState } from "react";
import styles from "./GlobalNavigation.module.css";

const sections = [
  { id: "experience", label: "Experience", index: "01" },
  { id: "industries", label: "Industries", index: "02" },
  { id: "case-study", label: "Case", index: "03" },
  { id: "technical-brief", label: "Brief", index: "04" },
] as const;

export function GlobalNavigation() {
  const [activeSection, setActiveSection] = useState<(typeof sections)[number]["id"]>("experience");
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id as (typeof sections)[number]["id"]);
        }
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0.05, 0.2, 0.45] },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  function navigateTo(id: (typeof sections)[number]["id"]) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
    setIsOpen(false);
  }

  const activeIndex = sections.findIndex((section) => section.id === activeSection);

  return (
    <header className={styles.shell} data-open={isOpen}>
      <button className={styles.brand} type="button" onClick={() => navigateTo("experience")} aria-label="Return to IPS experience">
        <span className={styles.brandMark} aria-hidden="true"><i /><i /></span>
        <span>
          <strong>IPS</strong>
          <small>Integrated Polymer Solutions</small>
        </span>
      </button>

      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              className={isActive ? styles.active : ""}
              aria-current={isActive ? "page" : undefined}
              onClick={() => navigateTo(section.id)}
            >
              <span>{section.index}</span>
              {section.label}
            </button>
          );
        })}
      </nav>

      <div className={styles.status} aria-label={`Section ${activeIndex + 1} of ${sections.length}`}>
        <span>{String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span>
        <div><i style={{ transform: `scaleX(${progress})` }} /></div>
      </div>

      <button
        className={styles.menuButton}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{isOpen ? "Close" : "Navigate"}</span>
        <i aria-hidden="true" />
      </button>

      <nav id="mobile-navigation" className={styles.mobileNav} aria-label="Mobile navigation">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              className={isActive ? styles.active : ""}
              aria-current={isActive ? "page" : undefined}
              onClick={() => navigateTo(section.id)}
            >
              <span>{section.index}</span>
              <strong>{section.label}</strong>
              <i aria-hidden="true">↘</i>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
