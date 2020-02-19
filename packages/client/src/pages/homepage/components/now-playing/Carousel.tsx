import React from "react";

import { ArrowNext, ArrowPrev } from "./CarouselControls";
import { FilmCard } from "components/film-card/index";
import { CarouselComponent } from "components/carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./nowPlaying.sass";

export function Carousel(props: any) {
  const { films, pending } = props;
  return (
    <div className="slider-block">
      <CarouselComponent
        items={films}
        next={<ArrowNext onClick={e => {}} />}
        prev={<ArrowPrev onClick={e => {}} />}
        pending={pending}
        BasicElement={FilmCard}
      ></CarouselComponent>
    </div>
  );
}
