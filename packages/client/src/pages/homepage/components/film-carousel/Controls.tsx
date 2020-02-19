import React from "react";

import styles from "./film-carousel.module.sass";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className={`waves-effect waves-light btn-flat ${styles["arrow-block"]} ${styles["arrow-next"]}`}
    >
      <i className="fas fa-chevron-right icon"></i>
    </button>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className={`waves-effect waves-light btn-flat ${styles["arrow-block"]} ${styles["arrow-prev"]}`}
    >
      <i className="fas fa-chevron-left icon"></i>
    </button>
  );
}
