import React from "react";
import "./film-carousel.sass";
import Carousel from "react-slick";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export interface IFilmCarouselProps {
  films: {
    genres: string[];
    filmName: string;
    ratings: {
      value: number;
      raterName: string;
    }[];
    filmImage: string;
  }[];
}

export function FilmCarousel(props: IFilmCarouselProps) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={e => {}} />,
    prevArrow: <ArrowPrev onClick={e => {}} />,
    fade: true,
    adaptiveHeight: true
  };
  return (
    <Carousel className="film-carousel" {...settings}>
      {props.films.map(film => {
        return <Slide {...film} />;
      })}
    </Carousel>
  );
}
