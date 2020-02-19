import React from "react";
import { IFilm } from "interfaces/IFilm";
import { config } from "config";
import StarRatings from "react-star-ratings";
import { Loader } from "components/loader";

import styles from "./film-card.module.sass";

export interface IFilmCard {
  item: IFilm;
  pending: boolean;
}

export function FilmCard(props: IFilmCard) {
  const { item: film, pending } = props;
  if (pending) return <Loader />;
  return (
    <div
      className={`valign-wrapper ${styles["film-card"]}`}
      style={{
        backgroundImage: `url(${config.baseUrl + film.filmImage})`
      }}
    >
      <div className={`row ${styles["buttons"]}`}>
        <button
          className={`col s12 waves-effect waves-light btn-flat btn-large ${styles["slide-btn"]}`}
        >
          <i className={`fas fa-play ${styles["button-icon"]}`}></i>
          <span className={styles["button-text"]}>Watch trailer</span>
        </button>
        <button
          className={`col s12 waves-effect waves-light btn-flat btn-large ${styles["slide-btn"]}`}
        >
          <i className={`fas fa-shopping-cart ${styles["button-icon"]}`}></i>
          <span className={styles["button-text"]}>Buy ticket</span>
        </button>
      </div>
      <div className={`${styles["info-block"]}`}>
        <div className={styles["rating"]}>
          <StarRatings
            rating={
              film.ratings
                .map(rating => rating.ratingValue)
                .reduce((prev, curr) => prev + curr, 0) /
              film.ratings.length /
              2
            }
            starRatedColor={"orange"}
            starEmptyColor={"white"}
            starDimension={"30px"}
            starSpacing={"4px"}
          />
        </div>
        <div className={styles["film-name"]}>{film.name}</div>
      </div>
    </div>
  );
}

export function FilmCardPreOrder(props: IFilmCard) {
  const { item: film, pending } = props;
  if (pending) return <Loader />;
  return (
    <div
      className={`valign-wrapper ${styles["film-card"]}`}
      style={{
        backgroundImage: `url(${config.baseUrl + film.filmImage})`
      }}
    >
      <div className={`${styles["info-block"]}`}>
        <div className={styles["rating"]}>
          <StarRatings
            rating={
              film.ratings
                .map(rating => rating.ratingValue)
                .reduce((prev, curr) => prev + curr, 0) /
              film.ratings.length /
              2
            }
            starRatedColor={"orange"}
            starEmptyColor={"white"}
            starDimension={"30px"}
            starSpacing={"4px"}
          />
        </div>
        <div className={styles["film-name"]}>{film.name}</div>
      </div>
    </div>
  );
}
