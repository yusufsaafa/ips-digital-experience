import { homePageContent } from "@/content/home";

import { ActionLink } from "@/components/ui/action-link";

import styles from "./home-hero-section.module.css";

export function HomeHeroSection() {
  const { hero } = homePageContent;

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h1 id="hero-title">{hero.title}</h1>
            <p>{hero.body}</p>
          </div>

          <div className={styles.actions} aria-label="Hero actions">
            {hero.primaryAction.isAvailable ? (
              <ActionLink href={hero.primaryAction.href}>
                {hero.primaryAction.label}
              </ActionLink>
            ) : null}
            <ActionLink href={hero.secondaryAction.href} variant="secondary">
              {hero.secondaryAction.label}
            </ActionLink>
          </div>
        </div>

        <div className={styles.pathways} aria-labelledby="homepage-pathways">
          <p id="homepage-pathways">{hero.supportingPathsLabel}</p>
          <ul>
            {hero.supportingPaths.map((path) => (
              <li key={path.href}>
                {path.isAvailable ? (
                  <a href={path.currentHref ?? path.href}>{path.label}</a>
                ) : (
                  <span className={styles.unavailablePath}>{path.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
