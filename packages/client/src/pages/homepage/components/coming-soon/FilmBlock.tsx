import React from "react";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";
import { Typography, Chip, Fab } from "@material-ui/core/";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export interface IFilmBlock {
  film: IFilm;
  buyTicket: (filmId: string) => void;
  lang: string;
}

export const FilmBlock = (props: IFilmBlock) => {
  const { film } = props;
  return (
    <div className={styles.filmBlock}>
      <div className={styles.filmInfo}>
        <div className={styles.trailerContainer}>
          <iframe
            className={styles.filmTrailer}
            title="Trailer"
            src={film.trailerLink}
          ></iframe>
        </div>

        <div className={styles.basicInfoBlock}>
          <ul className={styles.genres}>
            {film.genres.map(genre => (
              <li className={styles.genre} key={genre.id}>
                <Typography variant="overline">
                  <FormattedMessage id={genre.name} />
                </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h3" className={styles.filmName}>
            <FormattedMessage id={film.name} />
          </Typography>
          <div>
            <Chip
              icon={<FontAwesomeIcon icon={faClock} className={styles.icon} />}
              label={
                <Typography variant="overline" className={styles.date}>
                  {film.releaseDate
                    ? new Date(film.releaseDate).toLocaleDateString()
                    : "Date not found"}
                </Typography>
              }
              color="secondary"
            />
          </div>
        </div>
        <div className={styles.descriptionAndRatingsBlock}>
          <div className={styles.filmPhotoBlock}>
            <img src={film.filmImage} alt="..." className={styles.filmPhoto} />
          </div>
          <div className={styles.descriptionBlock}>
            <Typography variant="body1" className={styles.descriptionText}>
              {props.film.description ? (
                <FormattedMessage id={props.film.description} />
              ) : (
                <FormattedMessage
                  id="homepage.comingSoon.filmDescription"
                  defaultMessage="Description isn't provided."
                />
              )}
            </Typography>
            <div className={styles.descriptionButtons}>
              <Fab
                className={styles.filmButton}
                variant="extended"
                color="primary"
                size="large"
                onClick={() => props.buyTicket(props.film.id)}
              >
                <i className={`fas fa-shopping-cart ${styles.buttonIcon}`}></i>
                <FormattedMessage
                  id="homepage.button.preOrder"
                  defaultMessage="Pre order"
                />
              </Fab>
              <Fab
                className={styles.filmButton}
                variant="extended"
                color="secondary"
                size="large"
              >
                <i className={`fas fa-ellipsis-h ${styles.buttonIcon}`}></i>
                <FormattedMessage
                  id="homepage.button.readMore"
                  defaultMessage="Read more"
                />
              </Fab>
            </div>
          </div>
          <div className={styles.ratingsBlock}>
            {film.ratings.map(rating => (
              <div className={styles.ratingElement} key={rating._id}>
                <Typography variant="overline" className={styles.ratingText}>
                  {rating.ratingValue} - {rating.raterName}
                </Typography>
                <div className={styles.ratingValueContainer}>
                  <div
                    className={styles.ratingValue}
                    style={{ width: `${rating.ratingValue * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
