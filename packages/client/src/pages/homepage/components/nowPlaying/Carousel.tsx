import React from "react";
import { ArrowNext, ArrowPrev } from "./CarouselControls";
import FilmCardContainer from "containers/FilmCardContainer";
import Carousel, { LazyLoadTypes } from "react-slick";
import styles from "./nowPlaying.module.sass";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NowPlayingProps } from "containers/NowPlayingContainer";
import { CenterLoader } from "components/loader";

export function CarouselComponent(props: NowPlayingProps) {
  const { films } = props;
  const settings = {
    dots: false,
    lazyLoad: "progressive" as LazyLoadTypes,
    infinite: true,
    slidesToShow:
      films.data.length > 3
        ? 3
        : films.data.length === 1
        ? 1
        : films.data.length - 1,
    slidesToScroll: 1,
    nextArrow: <ArrowNext onClick={() => {}} />,
    prevArrow: <ArrowPrev onClick={() => {}} />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Carousel {...settings} className={styles["slick-slider"]}>
      {films.pending ? (
        <CenterLoader />
      ) : (
        films.data.map((film) => {
          return <FilmCardContainer item={film} key={film.id} />;
        })
      )}
    </Carousel>
  );
}
