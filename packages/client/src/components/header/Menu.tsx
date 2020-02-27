import React from "react";
import styles from "./header.module.sass";

export function Menu() {
  return (
    <div className={styles["menu-block"]}>
      <button
        className={`waves-effect waves-light btn-flat btn btn-large btn-floating inherit-bgc ${styles["menu-btn"]}`}
      >
        <i className="fas fa-search"></i>
      </button>
      <button
        className={`waves-effect waves-light btn-flat btn btn-large btn-floating inherit-bgc ${styles["menu-btn"]}`}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
