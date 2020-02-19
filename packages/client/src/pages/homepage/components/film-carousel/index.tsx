import React from "react";
import Carousel, { LazyLoadTypes } from "react-slick";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./film-carousel.module.sass";

export default function FilmCarousel(props: any) {
  const { films, pending } = props;
  const settings = {
    dots: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={e => {}} />,
    prevArrow: <ArrowPrev onClick={e => {}} />,
    fade: true,
    adaptiveHeight: true
  };
  return (
    <Carousel className={styles["film-carousel"]} {...settings}>
      {films.map((film: any) => {
        return <Slide film={film} key={film._id} pending={pending} />;
      })}
    </Carousel>
  );
}
