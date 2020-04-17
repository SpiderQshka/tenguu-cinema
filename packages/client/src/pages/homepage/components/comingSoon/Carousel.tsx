import React from "react";

import { ArrowNext, ArrowPrev } from "./Controls";
import { ComingSoonFilmCard } from "components/filmCard/index";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./coming-soon.module.sass";
import CarouselSlick, { LazyLoadTypes } from "react-slick";
import { IFilm } from "interfaces/IFilm";
import { ComingSoonProps } from "containers/ComingSoonContainer";
import { CenterLoader } from "components/loader";

export interface ICarouselProps extends ComingSoonProps {
  handler: (n: number) => void;
}

export function Carousel(props: ICarouselProps) {
  const { films, handler } = props;
  const settings = {
    dots: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    slidesToShow:
      films.data.length > 3
        ? 3
        : films.data.length - 1
        ? films.data.length - 1
        : 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={() => {}} />,
    prevArrow: <ArrowPrev onClick={() => {}} />,
    adaptiveHeight: true,
    centerMode: true,
    afterChange: handler,
    responsive: [
      {
        breakpoint: 1400,
        settings: {},
      },
      {
        breakpoint: 1000,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <CarouselSlick {...settings} className={styles["slick-slider"]}>
      {films.pending ? (
        <CenterLoader />
      ) : (
        films.data.map((film: IFilm) => {
          return <ComingSoonFilmCard item={film} key={film.id} />;
        })
      )}
    </CarouselSlick>
  );
}
