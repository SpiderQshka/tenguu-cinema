import React from "react";
import { Button } from "@material-ui/core";
export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <Button className="arrow-block arrow-next" onClick={props.onClick}>
      <i className="fas fa-chevron-right icon"></i>
    </Button>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <Button className="arrow-block arrow-prev" onClick={props.onClick}>
      <i className="fas fa-chevron-left icon"></i>
    </Button>
  );
}
