import React from "react";
import Carousel, { LazyLoadTypes } from "react-slick";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./filmCarousel.module.sass";
import { FilmCarouselProps } from "containers/FilmCarouselContainer";
import { CenterLoader, PageLoader } from "components/loader";

export function FilmCarousel(props: FilmCarouselProps) {
  const {
    films: { data: films, pending },
    buyTicket,
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
          arrows: false,
        },
      },
    ],
  };
  return (
    <Carousel className={styles["film-carousel"]} {...settings}>
      {props.films.pending ? (
        <PageLoader />
      ) : (
        films.map((film) => (
          <Slide
            film={film}
            key={film.id}
            pending={pending}
            buyTicket={buyTicket}
            watchTrailer={props.watchTrailer}
          />
        ))
      )}
    </Carousel>
  );
}
