import React from "react";
import styles from "./header.module.sass";
import { Typography } from "@material-ui/core";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <div className={styles["logo-block"]}>
      <i className={`fas fa-film ${styles["logo-image"]}`}></i>
      <Typography className={styles["logo-name"]}>
        Tenguu <br /> cinema
      </Typography>
    </div>
  );
}
