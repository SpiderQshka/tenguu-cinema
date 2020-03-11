import React from "react";
import { IFilm } from "interfaces/IFilm";
import { config } from "config";
import StarRatings from "react-star-ratings";
import { Loader } from "components/loader";
import { Typography, Fab } from "@material-ui/core/";
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
        <Fab
          className={styles["slide-btn"]}
          variant="extended"
          color="primary"
          size="large"
        >
          <i className={`fas fa-play ${styles["button-icon"]}`}></i>
          Watch trailer
        </Fab>
        <Fab
          className={styles["slide-btn"]}
          variant="extended"
          color="secondary"
          size="large"
          onClick={() =>
            props.buyTicket ? props.buyTicket(props.item.id) : {}
          }
        >
          <i className={`fas fa-shopping-cart ${styles["button-icon"]}`}></i>
          Buy ticket
        </Fab>
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
        <Typography variant="h3" className={styles["film-name"]}>
          {film.name}
        </Typography>
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
        <Typography variant="h3" className={styles["film-name"]}>
          {film.name}
        </Typography>
        <Typography variant="overline" className={styles.date}>
          {film.releaseDate}
        </Typography>
      </div>
    </div>
  );
}
