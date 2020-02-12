import React from "react";
import { Button } from "@material-ui/core";

import "./film-card.sass";

export interface IFilmCardProps {}

export function FilmCard(props: IFilmCardProps) {
  return (
    <div className="film-card">
      <div className="buttons">
        <Button className="slide-btn">
          <i className="fas fa-play button-icon"></i>
          Watch trailer
        </Button>
        <Button className="slide-btn">
          <i className="fas fa-shopping-cart button-icon"></i>
          Buy ticket
        </Button>
      </div>
      <div className="info-block">
        <div className="rating"></div>
        <div className="film-name"></div>
        <div className="sessions">11:00</div>
      </div>
    </div>
  );
}
