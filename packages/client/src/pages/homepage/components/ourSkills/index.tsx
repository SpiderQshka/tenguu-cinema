import React from "react";
import { SectionTitle } from "components/sectionTitle";
import styles from "./our-skills.module.sass";
import { Typography } from "@material-ui/core/";
import { FormattedMessage } from "react-intl";

export function OurSkills() {
  return (
    <section className={styles.skillsSection}>
      <SectionTitle
        isDark={true}
        message={
          <FormattedMessage
            id="homepage.sectionTitle.ourSkills"
            defaultMessage="Your experience is gonna be exquisite"
          />
        }
      />
      <div className={styles.content}>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName1"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage1"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName2"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage2"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName3"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage3"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName4"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage4"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName5"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage5"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
        <div className={styles.element}>
          <Typography variant="h4" className={styles.elementHeader}>
            <FormattedMessage
              id="homepage.ourSkills.skillName6"
              defaultMessage="IMAX@"
            />
          </Typography>
          <Typography variant="body1" className={styles.elementMessage}>
            <FormattedMessage
              id="homepage.ourSkills.skillMessage6"
              defaultMessage="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            vero ipsam a cumque saepe eius repellendus consequuntur dolorum ut.
            Nihil?"
            />
          </Typography>
        </div>
      </div>
    </section>
  );
}
