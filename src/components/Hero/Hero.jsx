import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adithya Vardhan Reddy</h1>
        <p className={styles.description}>
        4th-year B.Tech student specializing in Computer Science and Engineering with Artificial Intelligence at Parul University.
        </p>
        <a href="mailto:adithyayeruva26@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("skills/me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
