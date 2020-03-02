import React from "react";
import { config } from "config";
// import { CarouselComponent } from "components/carousel";
// import { FilmCardPreOrder } from "components/film-card";

import styles from "./coming-soon.module.sass";
import { ISession } from "interfaces/ISession";
import { CenterLoader } from "components/loader";
import { CarouselComponent } from "components/carousel";
import { IFilm } from "interfaces/IFilm";

export interface IFilmBlock {
  film: IFilm;
  pending: boolean;
}

export const FilmBlock = (props: IFilmBlock) => {
  const { film, pending } = props;
  return (
    <div className={styles.filmBlock}>
      {pending ? (
        <CenterLoader />
      ) : (
        <div className={styles.filmInfo}>
          <video src={film.trailerLink} className={styles.filmTrailer}></video>
          <div className={styles.basicInfoBlock}>
            <ul className={styles.genres}>
              {film.genres.map(genre => (
                <li className={styles.genre} key={genre}>
                  {genre}
                </li>
              ))}
            </ul>
            <p className={styles.filmName}>{film.name}</p>
            <div className={styles.date}>
              {film.releaseDate || "Date not found"}
            </div>
          </div>
          <div className={styles.descriptionAndRatingsBlock}>
            <div className={styles.filmPhotoBlock}>
              <img
                src={config.baseUrl + film.filmImage}
                alt="film"
                className={styles.filmPhoto}
              />
            </div>
            <div className={styles.descriptionBlock}>
              <p className={styles.descriptionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                tempore, similique laboriosam dolor voluptate consectetur fugit
                illum non sunt corrupti.
              </p>
              <div className={styles.descriptionButtons}>
                <button
                  className={`waves-effect waves-light btn btn-large orange ${styles.filmButton}`}
                >
                  <i
                    className={`fas fa-shopping-cart ${styles.buttonIcon}`}
                  ></i>
                  Pre order
                </button>
                <button
                  className={`waves-effect waves-light btn-flat btn btn-large inherit-bgc ${styles.filmButton}`}
                >
                  <i className={`fas fa-ellipsis-h ${styles.buttonIcon}`}></i>
                  Read more
                </button>
              </div>
            </div>
            <div className={styles.ratingsBlock}>
              {film.ratings.map(rating => (
                <div className={styles.ratingElement} key={rating._id}>
                  <p className={styles.ratingText}>
                    {rating.ratingValue} - {rating.raterName}
                  </p>
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
      )}
    </div>
  );
};
