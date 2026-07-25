import Image from "next/image";

import { homeContent } from "@/content/home";

import styles from "./home-start-section.module.css";

export function HomeStartSection() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>{homeContent.intro.title}</h1>
          <p>
            {homeContent.intro.body}{" "}
            <a
              href={homeContent.intro.templatesHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.intro.templatesLabel}
            </a>{" "}
            or the{" "}
            <a
              href={homeContent.intro.learningHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {homeContent.intro.learningLabel}
            </a>{" "}
            center.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href={homeContent.actions.deployHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            {homeContent.actions.deployLabel}
          </a>
          <a
            className={styles.secondary}
            href={homeContent.actions.docsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {homeContent.actions.docsLabel}
          </a>
        </div>
      </main>
    </div>
  );
}
