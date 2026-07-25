"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./SectionReveal.module.css";

type SectionRevealProps = {
  children: ReactNode;
  id: string;
  label: string;
  index: string;
  delay?: number;
};

export function SectionReveal({ children, id, label, index, delay = 0 }: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      id={id}
      className={`${styles.shell} ${isVisible ? styles.visible : ""}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      <div className={styles.transitionRail} aria-hidden="true">
        <span>{index}</span>
        <i />
        <strong>{label}</strong>
      </div>
      <div className={styles.scan} aria-hidden="true" />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
