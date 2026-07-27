"use client";

import { useEffect, useId, useState } from "react";
import type { siteNavItems } from "./nav-items";
import styles from "./site-header.module.css";

type MobileNavigationProps = {
  items: typeof siteNavItems;
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={styles.mobileNavigation}>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      <div id={menuId} className={styles.mobileMenu} hidden={!isOpen}>
        <nav aria-label="Mobile navigation">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#businesses"
            className={styles.mobileCta}
            onClick={() => setIsOpen(false)}
          >
            Find a Business
          </a>
        </nav>
      </div>
    </div>
  );
}
