import React from "react";
import { SectionTitle } from "components/section-title";
import styles from "./our-skills.module.sass";

export function OurSkills() {
  return (
    <section className={styles.skillsSection}>
      <SectionTitle
        isDark={true}
        message="Your experience is gonna be exquisite"
      />
      <div className={styles.content}>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
        <div className={styles.element}>
          <h4 className={styles.elementHeader}>IMAX@</h4>
          <p className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </p>
        </div>
      </div>
    </section>
  );
}
