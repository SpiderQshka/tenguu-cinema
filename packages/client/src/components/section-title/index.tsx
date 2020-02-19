import React from "react";

import styles from "./section-title.module.sass";

export interface ISectionTitle {
  isDark: boolean;
  message: string;
}

export function SectionTitle(props: ISectionTitle) {
  return (
    <header className={styles["header"]}>
      <h2
        className={`${styles["text"]} ${
          props.isDark ? styles["text-dark"] : styles["text-light"]
        }`}
      >
        {props.message}
      </h2>
      <div className={styles["line"]}></div>
    </header>
  );
}
