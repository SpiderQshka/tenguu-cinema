import React from "react";
import { IconButton } from "@material-ui/core/";
import styles from "./nowPlaying.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <IconButton
      onClick={props.onClick}
      className={`${styles["arrow-block"]} ${styles["arrow-next"]}`}
    >
      <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
    </IconButton>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <IconButton
      onClick={props.onClick}
      className={`${styles["arrow-block"]} ${styles["arrow-prev"]}`}
    >
      <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
    </IconButton>
  );
}
