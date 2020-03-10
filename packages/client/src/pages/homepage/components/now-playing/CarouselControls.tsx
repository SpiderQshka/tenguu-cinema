import React from "react";
import { IconButton } from "@material-ui/core/";
import styles from "./nowPlaying.module.sass";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <IconButton
      onClick={props.onClick}
      className={`${styles["arrow-block"]} ${styles["arrow-next"]}`}
    >
      <i className={`fas fa-chevron-right ${styles.icon}`}></i>
    </IconButton>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <IconButton
      onClick={props.onClick}
      className={`${styles["arrow-block"]} ${styles["arrow-prev"]}`}
    >
      <i className={`fas fa-chevron-left ${styles.icon}`}></i>
    </IconButton>
  );
}
