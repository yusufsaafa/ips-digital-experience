import { homePageContent } from "@/content/home";

import styles from "./industries-section.module.css";

export function IndustriesSection() {
  const { industries } = homePageContent;

  return (
    <section
      id="industries"
      className={styles.section}
      aria-labelledby="industries-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{industries.eyebrow}</p>
          <h2 id="industries-title">{industries.title}</h2>
          <p>{industries.body}</p>
        </div>

        <div className={styles.list} aria-label="Proposed industry groups">
          {industries.items.map((industry) => (
            <article key={industry.href} className={styles.item}>
              <div>
                <h3>{industry.title}</h3>
                <p>{industry.body}</p>
              </div>
              <div className={styles.problemGroup}>
                <span>Related challenges</span>
                <ul>
                  {industry.relatedProblems.map((problem) => (
                    <li key={problem}>{problem}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.validationNote}>{industries.validationNote}</p>
      </div>
    </section>
  );
}
