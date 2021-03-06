import React from "react";
import { Typography } from "@material-ui/core/";
import styles from "./section-title.module.sass";

export interface ISectionTitle {
  isDark: boolean;
  message: JSX.Element;
}

export function SectionTitle(props: ISectionTitle) {
  return (
    <header className={styles["header"]}>
      <Typography
        variant="h4"
        className={`${styles["text"]} ${
          props.isDark ? styles["text-dark"] : styles["text-light"]
        }`}
      >
        {props.message}
      </Typography>
      <div className={styles["line"]}></div>
    </header>
  );
}
