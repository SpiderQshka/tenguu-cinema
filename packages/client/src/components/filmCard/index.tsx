import React from "react";
import { IFilm } from "interfaces/IFilm";
import StarRatings from "react-star-ratings";
import { Typography, Fab } from "@material-ui/core/";
import styles from "./filmCard.module.sass";
import { FormattedMessage, FormattedDate } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FilmCardProps } from "containers/FilmCardContainer";

export interface IFilmCard extends FilmCardProps {
  item: IFilm;
}

export interface IComingSoonCard {
  item: IFilm;
}

export function FilmCard(props: IFilmCard) {
  const { item: film } = props;
  return (
    <div
      className={styles["card"]}
      style={{
        backgroundImage: `url(${film.filmImage})`,
      }}
    >
      <div className={`${styles["buttons"]}`}>
        {film.trailerLink && (
          <Fab
            className={`${styles["slide-btn"]} watchTrailerBtn`}
            variant="extended"
            color="primary"
            size="large"
            onClick={() => props.watchTrailer(props.item.id)}
          >
            <FontAwesomeIcon icon={faPlay} className={styles["button-icon"]} />
            <FormattedMessage
              id="homepage.button.watchTrailer"
              defaultMessage="Watch trailer"
            />
          </Fab>
        )}

        {props.isAuthentificate && (
          <Fab
            className={`${styles["slide-btn"]} buyTicketBtn`}
            variant="extended"
            color="secondary"
            size="large"
            onClick={() => props.buyTicket(props.item.id)}
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
        )}
      </div>
      <div className={`${styles["info-block"]}`}>
        {film.ratings && film.ratings[0] && (
          <div className={styles["rating"]}>
            {
              <StarRatings
                rating={
                  film.ratings
                    .map((rating) => rating.ratingValue)
                    .reduce((prev, curr) => prev + curr, 0) /
                  film.ratings.length /
                  2
                }
                starRatedColor={"orange"}
                starEmptyColor={"white"}
                starDimension={"30px"}
                starSpacing={"4px"}
              />
            }
          </div>
        )}
        <Typography variant="h3" className={styles["film-name"]}>
          <FormattedMessage id={film.name} defaultMessage="Film not found" />
        </Typography>
      </div>
    </div>
  );
}

export function ComingSoonFilmCard(props: IComingSoonCard) {
  const { item: film } = props;
  return (
    <div
      className={`${styles.card} ${styles.sessionCard}`}
      style={{
        backgroundImage: `url(${film && film.filmImage})`,
      }}
    >
      <div className={`${styles["info-block"]}`}>
        {film.ratings && film.ratings[0] && (
          <div className={styles["rating"]}>
            {
              <StarRatings
                rating={
                  film.ratings
                    .map((rating) => rating.ratingValue)
                    .reduce((prev, curr) => prev + curr, 0) /
                  film.ratings.length /
                  2
                }
                starRatedColor={"orange"}
                starEmptyColor={"white"}
                starDimension={"30px"}
                starSpacing={"4px"}
              />
            }
          </div>
        )}

        <Typography variant="h3" className={styles["film-name"]}>
          <FormattedMessage
            id={film.name}
            defaultMessage="Film name not found"
          />
        </Typography>
        <Typography variant="overline" className={styles.date}>
          <FormattedDate
            value={
              film.releaseDate
                ? new Date(film.releaseDate)
                : new Date(Date.now())
            }
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
