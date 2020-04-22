import React from "react";
import { Loader } from "components/loader";
import { Progressbar } from "./Progressbar";
import { Typography, Button } from "@material-ui/core/";
import { IFilm } from "interfaces/IFilm";
import styles from "./filmCarousel.module.sass";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export interface ISlide {
  film: IFilm;
  pending: boolean;
  buyTicket: (id: string) => void;
  watchTrailer: (id: string) => void;
  isAuthentificate: boolean;
}

export function Slide(props: ISlide) {
  const { film, pending, buyTicket, watchTrailer } = props;
  return (
    <div
      className={styles["slide-wrapper"]}
      style={{
        backgroundImage: `url(${film.filmImage})`,
      }}
    >
      {pending ? (
        <Loader />
      ) : (
        <div className={styles["slide"]}>
          <div className={styles["slide-content"]}>
            <ul className={styles["genres"]}>
              {film.genres &&
                !!film.genres.length &&
                film.genres.map((genre) => (
                  <li className={styles["genre"]} key={genre.id}>
                    <Typography variant="overline">
                      <FormattedMessage
                        id={genre.name}
                        defaultMessage="Genre not found"
                      />
                    </Typography>
                  </li>
                ))}
            </ul>
            <Typography variant="h1" className={styles["film-name"]}>
              <FormattedMessage
                id={film.name}
                defaultMessage="Film name not found"
              />
            </Typography>
            <div className={styles["buttons"]}>
              {props.film.trailerLink && (
                <Button
                  className={`${styles["slide-btn"]} watchTrailerBtn`}
                  startIcon={
                    <FontAwesomeIcon
                      icon={faPlay}
                      className={styles["button-icon"]}
                    />
                  }
                  onClick={() => watchTrailer(props.film.id)}
                >
                  <FormattedMessage
                    id="homepage.button.watchTrailer"
                    defaultMessage="Watch trailer"
                  />
                </Button>
              )}
              {props.isAuthentificate && (
                <Button
                  className={`${styles["slide-btn"]} buyTicketBtn`}
                  startIcon={
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className={styles["button-icon"]}
                    />
                  }
                  onClick={() => buyTicket(film.id)}
                >
                  <FormattedMessage
                    id="homepage.button.buyTicket"
                    defaultMessage="Buy ticket"
                  />
                </Button>
              )}
            </div>
          </div>
          {film.ratings && film.ratings.length && (
            <ul className={styles["slide-ratings"]}>
              {film.ratings.map((rating) => {
                return (
                  <li className={styles["rating-element"]} key={rating._id}>
                    <Typography variant="h2" className={styles["rater-name"]}>
                      {rating.raterName}
                    </Typography>
                    <div className="progressbar-container">
                      <Progressbar
                        value={rating.ratingValue * 10}
                        text={rating.ratingValue + ""}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
