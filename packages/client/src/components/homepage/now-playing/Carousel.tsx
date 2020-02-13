import React from "react";
import Slider from "react-slick";

import { ArrowNext, ArrowPrev } from "./CarouselControls";
import { FilmCard } from "../../film-card/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./nowPlaying.sass";

export interface ICarouselProps {}

export function Carousel(props: ICarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={e => {}} />,
    prevArrow: <ArrowPrev onClick={e => {}} />
  };
  return (
    <div className="slider-block">
      <Slider {...settings}>
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
        <FilmCard />
      </Slider>
    </div>
  );
}
