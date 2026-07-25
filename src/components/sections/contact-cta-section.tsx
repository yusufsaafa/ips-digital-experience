import { homePageContent } from "@/content/home";

import styles from "./contact-cta-section.module.css";

export function ContactCtaSection() {
  const { contact } = homePageContent;

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{contact.eyebrow}</p>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.body}</p>
        </div>

        <div className={styles.details}>
          <section className={styles.panel} aria-labelledby="inquiry-types">
            <h3 id="inquiry-types">Inquiry pathways to support</h3>
            <ul>
              {contact.inquiryTypes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.panel} aria-labelledby="routing-context">
            <h3 id="routing-context">Helpful routing context</h3>
            <ul>
              {contact.contextItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
