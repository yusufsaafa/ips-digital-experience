import { homePageContent } from "@/content/home";

import { HeroInspection } from "@/components/sections/hero-inspection";

import styles from "./home-hero-section.module.css";

export function HomeHeroSection() {
  const { hero } = homePageContent;

  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 id="hero-title">{hero.title}</h1>
            <p>{hero.body}</p>

            <nav className={styles.pathways} aria-labelledby="homepage-pathways">
              <div className={styles.pathwayText}>
                <a href={hero.secondaryAction.href}>
                  {hero.secondaryAction.label}
                </a>
                <p id="homepage-pathways">{hero.supportingPathsLabel}</p>
              </div>
              <ul>
                {hero.supportingPaths.map((path) => (
                  <li key={path.href}>
                    {path.isAvailable ? (
                      <a href={path.currentHref ?? path.href}>{path.label}</a>
                    ) : (
                      <span className={styles.unavailablePath}>
                        {path.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <HeroInspection inspection={hero.inspection} />
        </div>
      </div>
    </section>
  );
}
