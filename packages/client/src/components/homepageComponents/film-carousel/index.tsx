import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import Carousel, { LazyLoadTypes } from "react-slick";
import { Slide } from "./Slide";
import { ArrowNext, ArrowPrev } from "./Controls";

import { getGenres } from "../../../reducers/genresReducer";
import { getFilms } from "../../../reducers/filmsReducer";
import { fetchFilms } from "../../../actions/films";
import { fetchGenres } from "../../../actions/genres";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./film-carousel.sass";

const mapStateToProps = (state: any) => {
  return {
    films: getFilms(state.films.films),
    genres: getGenres(state.genres.genres)
  };
};

const connector = connect(mapStateToProps);

function FilmCarousel(props: ConnectedProps<typeof connector>) {
  useEffect(() => {
    fetchFilms(props.dispatch).then(() => fetchGenres(props.dispatch));
  }, [props.dispatch]);

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
    <Carousel className="film-carousel" {...settings}>
      {props.films.map(film => {
        const filmGenres = props.genres.filter(genre =>
          film.genreIds.some((id: string) => id === genre._id)
        );
        return (
          <Slide
            {...{
              ...film,
              genres: filmGenres
            }}
            key={film._id}
          />
        );
      })}
    </Carousel>
  );
}

export default connector(FilmCarousel);
