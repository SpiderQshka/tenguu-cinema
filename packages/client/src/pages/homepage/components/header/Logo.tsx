import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.sass";
import { Typography } from "@material-ui/core";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <div className={styles["logo-block"]}>
      <FontAwesomeIcon icon={faFilm} className={styles["logo-image"]} />
      <Typography className={styles["logo-name"]}>
        Tenguu <br /> cinema
      </Typography>
    </div>
  );
}
