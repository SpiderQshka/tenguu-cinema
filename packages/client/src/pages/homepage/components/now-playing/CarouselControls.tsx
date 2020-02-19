import React from "react";

import "./nowPlaying.sass";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className="waves-effect waves-orange btn-flat arrow-block arrow-next"
    >
      <i className="fas fa-chevron-right icon"></i>
    </button>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <button
      onClick={props.onClick}
      className="waves-effect waves-orange btn-flat arrow-block arrow-prev"
    >
      <i className="fas fa-chevron-left icon"></i>
    </button>
  );
}
