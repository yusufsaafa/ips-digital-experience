import { homePageContent } from "@/content/home";

import { ActionLink } from "@/components/ui/action-link";

import styles from "./problems-we-solve-section.module.css";

export function ProblemsWeSolveSection() {
  const { problems } = homePageContent;

  return (
    <section
      id="problems"
      className={styles.section}
      aria-labelledby="problems-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{problems.eyebrow}</p>
          <h2 id="problems-title">{problems.title}</h2>
          <p>{problems.body}</p>
        </div>

        <div className={styles.grid}>
          {problems.items.map((problem) => (
            <article key={problem.href} className={styles.card}>
              <span className={styles.cardLabel}>{problem.title}</span>
              <span className={styles.cardBody}>{problem.body}</span>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <ActionLink href="#problems" variant="secondary">
            Explore Problem Areas
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
