import type { ReactNode } from "react";
import styles from "./site-container.module.css";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
};

export function SiteContainer({
  children,
  className,
  size = "default",
}: SiteContainerProps) {
  const classNames = [
    styles.container,
    size === "narrow" ? styles.narrow : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classNames}>{children}</div>;
}
