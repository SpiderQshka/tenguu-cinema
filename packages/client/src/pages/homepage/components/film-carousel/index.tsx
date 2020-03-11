import React from "react";
import Carousel, { LazyLoadTypes } from "react-slick";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./film-carousel.module.sass";

import { IFilmPayload } from "interfaces/IFilm";

export interface IFilmCarousel {
  films: IFilmPayload;
  buyTicket: (id: string) => void;
}

export default function FilmCarousel(props: IFilmCarousel) {
  const {
    films: { data: films, pending },
    buyTicket
  } = props;
  const settings = {
    dots: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={() => {}} />,
    prevArrow: <ArrowPrev onClick={() => {}} />,
    fade: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          arrows: false
        }
      }
    ]
  };
  return (
    <Carousel className={styles["film-carousel"]} {...settings}>
      {films.map(film => {
        return (
          <Slide
            film={film}
            key={film.id}
            pending={pending}
            buyTicket={buyTicket}
          />
        );
      })}
    </Carousel>
  );
}
