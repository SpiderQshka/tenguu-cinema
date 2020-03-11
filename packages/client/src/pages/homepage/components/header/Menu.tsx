import React from "react";
import styles from "./header.module.sass";
import { IconButton } from "@material-ui/core/";

export function Menu() {
  return (
    <div className={styles["menu-block"]}>
      <IconButton className={styles["menu-btn"]}>
        <i className="fas fa-search"></i>
      </IconButton>
      <IconButton className={styles["menu-btn"]}>
        <i className="fas fa-bars"></i>
      </IconButton>
    </div>
  );
}
