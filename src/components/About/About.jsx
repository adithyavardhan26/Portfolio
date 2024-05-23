import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              
              <p>
              Seeking a campus placement opportunity to leverage technical expertise and contribute effectively to dynamic software development projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer </h3>
              <p>
              killed full-stack developer proficient in frontend technologies like React.JS,Javascript,HTML and CSS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              
              
              I have experience developing fast and optimised back-end systems
                and APIs by backend frameworks such as Node.js and Express.js.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
