import { homePageContent } from "@/content/home";

import styles from "./capabilities-section.module.css";

export function CapabilitiesSection() {
  const { capabilities } = homePageContent;

  return (
    <section
      id="capabilities"
      className={styles.section}
      aria-labelledby="capabilities-title"
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{capabilities.eyebrow}</p>
          <h2 id="capabilities-title">{capabilities.title}</h2>
          <p>{capabilities.body}</p>
        </div>

        <div className={styles.groups}>
          {capabilities.groups.map((group) => (
            <article key={group.title} className={styles.group}>
              <div className={styles.groupHeader}>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
              </div>
              <ul className={styles.capabilityList}>
                {group.items.map((item) => (
                  <li key={item.href} className={styles.capabilityItem}>
                    <span className={styles.capabilityTitle}>{item.title}</span>
                    <span className={styles.capabilityBody}>{item.body}</span>
                    <span className={styles.capabilityContext}>
                      {item.context}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
