import React from "react";
import styles from "./header.module.sass";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <div className={styles["logo-block"]}>
      <i className={`fas fa-film ${styles["logo-image"]}`}></i>
      <h2 className={styles["logo-name"]}>
        Tenguu <br /> cinema
      </h2>
    </div>
  );
}
