import { homePageContent } from "@/content/home";

import styles from "./specialist-network-section.module.css";

export function SpecialistNetworkSection() {
  const { specialistNetwork } = homePageContent;

  return (
    <section
      id="specialist-network"
      className={styles.section}
      aria-labelledby="specialist-network-title"
    >
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{specialistNetwork.eyebrow}</p>
          <h2 id="specialist-network-title">{specialistNetwork.title}</h2>
          <p>{specialistNetwork.body}</p>
        </div>

        <div className={styles.network}>
          <p className={styles.guidance}>{specialistNetwork.guidance}</p>
          <div
            className={styles.groups}
            aria-label="IPS specialist companies listed by name"
          >
            {specialistNetwork.groups.map((group) => (
              <section key={group.label} className={styles.group}>
                <h3>{group.label}</h3>
                <ul>
                  {group.specialists.map((specialist) => (
                    <li key={specialist}>{specialist}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
