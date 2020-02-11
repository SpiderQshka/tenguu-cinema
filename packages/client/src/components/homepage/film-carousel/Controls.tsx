import React from "react";

export interface IArrowProps {}

export function ArrowNext(props: IArrowProps) {
  return <i className="fas fa-chevron-right arrow-next"></i>;
}

export function ArrowPrev(props: IArrowProps) {
  return <i className="fas fa-chevron-left arrow-prev"></i>;
}
