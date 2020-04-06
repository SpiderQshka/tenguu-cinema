import React from "react";

import { ArrowNext, ArrowPrev } from "./Controls";
import { ComingSoonFilmCard } from "components/film-card/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./coming-soon.module.sass";
import CarouselSlick, { LazyLoadTypes } from "react-slick";
import { IFilm } from "interfaces/IFilm";
import { ComingSoonProps } from "containers/ComingSoonContainer";

export interface ICarouselProps extends ComingSoonProps {
  handler: (n: number) => void;
}

export function Carousel(props: ICarouselProps) {
  const { data: films, handler } = props;
  const settings = {
    dots: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    slidesToShow: films.length > 5 ? 5 : films.length - 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={() => {}} />,
    prevArrow: <ArrowPrev onClick={() => {}} />,
    adaptiveHeight: true,
    centerMode: true,
    afterChange: handler,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <CarouselSlick {...settings} className={styles["slick-slider"]}>
      {films.map((film: IFilm) => {
        return <ComingSoonFilmCard item={film} key={film.id} />;
      })}
    </CarouselSlick>
  );
}
