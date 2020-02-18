import React from "react";
import styles from "./header.module.sass";
import { Button } from "react-materialize";

export interface IMenuProps {}

export function Menu(props: IMenuProps) {
  return (
    <div className={styles["menu-block"]}>
      <Button
        flat
        floating
        icon={<i className="fas fa-search"></i>}
        waves="light"
        className={styles["menu-btn"]}
      ></Button>
      <Button
        flat
        floating
        icon={<i className="fas fa-bars"></i>}
        waves="light"
        className={styles["menu-btn"]}
      ></Button>
    </div>
  );
}
