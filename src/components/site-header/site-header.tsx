import { ButtonLink } from "@/components/button-link";
import { SiteContainer } from "@/components/site-container";
import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { siteNavItems } from "./nav-items";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <SiteContainer className={styles.inner}>
        <Link className={styles.wordmark} href="/" aria-label="IPS home">
          <span>IPS</span>
          <span>Integrated Polymer Solutions</span>
        </Link>

        <nav className={styles.desktopNavigation} aria-label="Primary navigation">
          {siteNavItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <ButtonLink className={styles.headerCta} href="#businesses">
          Find a Business
        </ButtonLink>

        <MobileNavigation items={siteNavItems} />
      </SiteContainer>
    </header>
  );
}
