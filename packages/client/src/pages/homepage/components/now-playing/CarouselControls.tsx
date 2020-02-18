import React from "react";
import { Button } from "react-materialize";

import "./nowPlaying.sass";

export interface IArrowProps {
  onClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

export function ArrowNext(props: IArrowProps) {
  return (
    <Button
      onClick={props.onClick}
      flat
      icon={<i className="fas fa-chevron-right"></i>}
      waves="orange"
      className="arrow-block arrow-next"
    ></Button>
  );
}

export function ArrowPrev(props: IArrowProps) {
  return (
    <Button
      onClick={props.onClick}
      flat
      icon={<i className="fas fa-chevron-left"></i>}
      waves="orange"
      className="arrow-block arrow-prev"
    ></Button>
  );
}
