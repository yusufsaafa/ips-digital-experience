import { siteNavigation } from "@/content/home";

import { ActionLink } from "@/components/ui/action-link";

import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href={siteNavigation.brand.href}>
          <span className={styles.brandMark}>{siteNavigation.brand.label}</span>
          <span className={styles.brandText}>
            {siteNavigation.brand.descriptor}
          </span>
        </a>

        <div className={styles.desktopLinks}>
          {siteNavigation.primaryLinks.map((link) => (
            <span key={link.href} className={styles.navItem}>
              {link.isAvailable ? (
                <a
                  className={styles.navLink}
                  href={link.currentHref ?? link.href}
                >
                  {link.label}
                </a>
              ) : (
                <span className={styles.navUnavailable}>
                  {link.label}
                </span>
              )}
            </span>
          ))}
        </div>

        {siteNavigation.primaryAction.isAvailable ? (
          <div className={styles.desktopAction}>
            <ActionLink
              href={
                siteNavigation.primaryAction.currentHref ??
                siteNavigation.primaryAction.href
              }
            >
              {siteNavigation.primaryAction.label}
            </ActionLink>
          </div>
        ) : null}

        <details className={styles.mobileMenu}>
          <summary className={styles.mobileSummary}>
            <span>Menu</span>
          </summary>
          <div className={styles.mobilePanel}>
            {siteNavigation.primaryLinks.map((link) => (
              <span key={link.href} className={styles.mobileItem}>
                {link.isAvailable ? (
                  <a
                    className={styles.mobileLink}
                    href={link.currentHref ?? link.href}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span className={styles.mobileUnavailable}>
                    {link.label}
                  </span>
                )}
              </span>
            ))}
            {siteNavigation.primaryAction.isAvailable ? (
              <ActionLink
                className={styles.mobileAction}
                href={
                  siteNavigation.primaryAction.currentHref ??
                  siteNavigation.primaryAction.href
                }
              >
                {siteNavigation.primaryAction.label}
              </ActionLink>
            ) : null}
          </div>
        </details>
      </nav>
    </header>
  );
}
