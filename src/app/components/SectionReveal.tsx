import { type CSSProperties, type ReactNode } from "react";
import styles from "./SectionReveal.module.css";

type SectionRevealProps = {
  children: ReactNode;
  id: string;
  label: string;
  index: string;
  delay?: number;
};

export function SectionReveal({ children, id, label, index, delay = 0 }: SectionRevealProps) {
  return (
    <div
      id={id}
      className={styles.shell}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      <div className={styles.transitionRail} aria-hidden="true">
        <span>{index}</span>
        <i />
        <strong>{label}</strong>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
