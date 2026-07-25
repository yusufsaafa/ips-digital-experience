import { homePageContent } from "@/content/home";

import styles from "./proof-section.module.css";

export function ProofSection() {
  const { proof } = homePageContent;

  return (
    <section id="proof" className={styles.section} aria-labelledby="proof-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{proof.eyebrow}</p>
          <h2 id="proof-title">{proof.title}</h2>
          <p>{proof.body}</p>
        </div>

        <div className={styles.categories} aria-label="Evidence categories">
          {proof.categories.map((category) => (
            <article key={category.futureHref} className={styles.category}>
              <h3>{category.title}</h3>
              <p>{category.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
