import React from "react";
import { config } from "config";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";
import { Typography, Chip, Fab } from "@material-ui/core/";
export interface IFilmBlock {
  film: IFilm;
  buyTicket: (filmId: string) => void;
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
              <li className={styles.genre} key={genre}>
                <Typography variant="overline">{genre}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h3" className={styles.filmName}>
            {film.name}
          </Typography>
          <div>
            <Chip
              icon={<i className={`far fa-clock ${styles.icon}`}></i>}
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
            <img
              src={config.baseUrl + film.filmImage}
              alt="film logo"
              className={styles.filmPhoto}
            />
          </div>
          <div className={styles.descriptionBlock}>
            <Typography variant="body1" className={styles.descriptionText}>
              {props.film.description
                ? props.film.description
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore, similique laboriosam dolor voluptate consectetur fugit illum non sunt corrupti."}
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
                Pre order
              </Fab>
              <Fab
                className={styles.filmButton}
                variant="extended"
                color="secondary"
                size="large"
              >
                <i className={`fas fa-ellipsis-h ${styles.buttonIcon}`}></i>
                Read more
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
