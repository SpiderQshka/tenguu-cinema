import React from "react";
import styles from "./header.module.sass";

export interface IMenuProps {}

export function Menu(props: IMenuProps) {
  return (
    <div className={styles["menu-block"]}>
      <button
        className={`waves-effect waves-light btn-flat btn-floating ${styles["menu-btn"]}`}
      >
        <i className="fas fa-search"></i>
      </button>
      <button
        className={`waves-effect waves-light btn-flat btn-floating ${styles["menu-btn"]}`}
      >
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
