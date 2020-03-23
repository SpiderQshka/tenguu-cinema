import React from "react";
import { IFilm } from "interfaces/IFilm";
import StarRatings from "react-star-ratings";
import { Loader } from "components/loader";
import { Typography, Fab } from "@material-ui/core/";
import styles from "./film-card.module.sass";
import { ISession } from "interfaces/ISession";
import { FormattedMessage, FormattedDate } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export interface IFilmCard {
  item: IFilm;
  pending?: boolean;
  buyTicket?: (filmId: string) => void;
  watchTrailer?: (filmId: string) => void;
  lang: string;
}

export interface ISessionCard {
  item: ISession;
  pending?: boolean;
  lang: string;
}

export function FilmCard(props: IFilmCard) {
  const { item: film, pending } = props;
  if (pending) return <Loader />;
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundImage: `url(${film.filmImage})`
      }}
    >
      <div className={`scale-transition ${styles["buttons"]}`}>
        <Fab
          className={styles["slide-btn"]}
          variant="extended"
          color="primary"
          size="large"
          onClick={() =>
            props.watchTrailer ? props.watchTrailer(props.item.id) : {}
          }
        >
          <FontAwesomeIcon icon={faPlay} className={styles["button-icon"]} />
          <FormattedMessage
            id="homepage.button.watchTrailer"
            defaultMessage="Watch trailer"
          />
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
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={styles["button-icon"]}
          />
          <FormattedMessage
            id="homepage.button.buyTicket"
            defaultMessage="Buy ticket"
          />
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
          <FormattedMessage id={film.name} />
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
        backgroundImage: `url(${film.filmImage})`
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
          <FormattedMessage id={film.name} />
        </Typography>
        <Typography variant="overline" className={styles.date}>
          <FormattedDate
            value={new Date(film.releaseDate)}
            year="numeric"
            month="long"
            day="2-digit"
            hour12={true}
          />
        </Typography>
      </div>
    </div>
  );
}
