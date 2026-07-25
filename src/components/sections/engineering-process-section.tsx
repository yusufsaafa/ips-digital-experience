import { homePageContent } from "@/content/home";

import styles from "./engineering-process-section.module.css";

export function EngineeringProcessSection() {
  const { engineeringProcess } = homePageContent;

  return (
    <section
      id="engineering-process"
      className={styles.section}
      aria-labelledby="engineering-process-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{engineeringProcess.eyebrow}</p>
          <h2 id="engineering-process-title">{engineeringProcess.title}</h2>
          <p>{engineeringProcess.body}</p>
        </div>

        <ol className={styles.steps}>
          {engineeringProcess.steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
