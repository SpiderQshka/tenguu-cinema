import React from "react";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <button className="arrow-block arrow-next" onClick={props.onClick}>
      <i className="fas fa-chevron-right icon"></i>
    </button>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <button className="arrow-block arrow-prev" onClick={props.onClick}>
      <i className="fas fa-chevron-left icon"></i>
    </button>
  );
}
