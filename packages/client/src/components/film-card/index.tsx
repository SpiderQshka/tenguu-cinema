import React from "react";
import { IFilm } from "interfaces/IFilm";
import { config } from "config";
import StarRatings from "react-star-ratings";
import { Loader } from "components/loader";

import styles from "./film-card.module.sass";
import { ISession } from "interfaces/ISession";

export interface IFilmCard {
  item: IFilm;
  pending: boolean;
  buyTicket?: (filmId: string) => void;
}

export interface ISessionCard {
  item: ISession;
  pending: boolean;
}

export function FilmCard(props: IFilmCard) {
  const { item: film, pending } = props;
  if (pending) return <Loader />;
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundImage: `url(${config.baseUrl + film.filmImage})`
      }}
    >
      <div className={`scale-transition ${styles["buttons"]}`}>
        <button
          className={`waves-effect waves-light btn btn-large orange ${styles["slide-btn"]}`}
        >
          <i className={`fas fa-play ${styles["button-icon"]}`}></i>
          <span className={styles["button-text"]}>Watch trailer</span>
        </button>
        <button
          // onClick={() => props.buyTicket({ film: film._id })}
          className={`waves-effect waves-light btn btn-large black ${styles["slide-btn"]}`}
        >
          <i className={`fas fa-shopping-cart ${styles["button-icon"]}`}></i>
          <span className={styles["button-text"]}>Buy ticket</span>
        </button>
      </div>
      <div className={`${styles["info-block"]}`}>
        <div className={styles["rating"]}>
          {film.ratings[0] && (
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
          )}
        </div>
        <div className={styles["film-name"]}>{film.name}</div>
      </div>
    </div>
  );
}

export function ComingSoonFilmCard(props: IFilmCard) {
  const { item: film, pending } = props;
  if (pending) return <Loader />;
  return (
    <div
      className={`${styles.card} ${styles.sessionCard}`}
      style={{
        backgroundImage: `url(${config.baseUrl + film.filmImage})`
      }}
    >
      <div className={`${styles["info-block"]}`}>
        <div className={styles["rating"]}>
          {film.ratings[0] && (
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
          )}
        </div>
        <div className={styles["film-name"]}>{film.name}</div>
        <div className={styles["date"]}>{film.releaseDate}</div>
      </div>
    </div>
  );
}
