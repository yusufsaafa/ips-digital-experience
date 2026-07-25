import type { AnchorHTMLAttributes, ReactNode } from "react";

import styles from "./action-link.module.css";

type ActionLinkVariant = "primary" | "secondary" | "text";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  isAvailable?: boolean;
  variant?: ActionLinkVariant;
};

export function ActionLink({
  children,
  className,
  isAvailable = true,
  variant = "primary",
  ...props
}: ActionLinkProps) {
  const classNames = [
    styles.actionLink,
    styles[variant],
    !isAvailable ? styles.unavailable : undefined,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!isAvailable) {
    return (
      <span
        aria-disabled="true"
        className={classNames}
        title="This path is not available yet."
      >
        {children}
      </span>
    );
  }

  return (
    <a className={classNames} {...props}>
      {children}
    </a>
  );
}
