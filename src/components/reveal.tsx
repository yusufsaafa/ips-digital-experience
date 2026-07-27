"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./reveal.module.css";

type RevealElement = "article" | "div" | "section";

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: RevealElement;
  children: ReactNode;
  delay?: number;
  variant?: "hero" | "section" | "card";
};

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
};

export function Reveal({
  as = "div",
  children,
  className,
  delay = 0,
  variant = "section",
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const classNames = [
    styles.reveal,
    styles[variant],
    isRevealed ? styles.revealed : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const revealStyle: RevealStyle = {
    ...style,
    "--reveal-delay": `${delay}ms`,
  };
  const setElementRef = (element: HTMLElement | null) => {
    elementRef.current = element;
  };

  if (as === "section") {
    return (
      <section
        {...props}
        ref={setElementRef}
        className={classNames}
        style={revealStyle}
      >
        {children}
      </section>
    );
  }

  if (as === "article") {
    return (
      <article
        {...props}
        ref={setElementRef}
        className={classNames}
        style={revealStyle}
      >
        {children}
      </article>
    );
  }

  return (
    <div
      {...props}
      ref={setElementRef}
      className={classNames}
      style={revealStyle}
    >
      {children}
    </div>
  );
}
