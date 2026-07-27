import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./button-link.module.css";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classNames} {...props}>
      {children}
    </a>
  );
}
