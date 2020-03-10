import React from "react";
import { SectionTitle } from "components/section-title";
import styles from "./our-skills.module.sass";
import { Typography, Chip, Fab } from "@material-ui/core/";

export function OurSkills() {
  return (
    <section className={styles.skillsSection}>
      <SectionTitle
        isDark={true}
        message="Your experience is gonna be exquisite"
      />
      <div className={styles.content}>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h3" className={styles.elementHeader}>
            IMAX@
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?
          </Typography>
        </div>
      </div>
    </section>
  );
}
