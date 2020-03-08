import React from "react";
import { config } from "config";
import { Loader } from "components/loader";
import { Progressbar } from "./Progressbar";

import { IFilm } from "interfaces/IFilm";
import styles from "./film-carousel.module.sass";

export interface ISlide {
  film: IFilm;
  pending: boolean;
}

export function Slide(props: ISlide) {
  const { film, pending } = props;
  return (
    <div
      className={styles["slide-wrapper"]}
      style={{
        backgroundImage: `url(${config.baseUrl + film.filmImage})`
      }}
    >
      {pending ? (
        <Loader />
      ) : (
        <div className={styles["slide"]}>
          <div className={styles["slide-content"]}>
            <ul className={styles["genres"]}>
              {film.genres.map(genre => (
                <li className={styles["genre"]} key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
            <h2 className={styles["film-name"]}>{film.name}</h2>
            <div className={styles["buttons"]}>
              <button
                className={`col s12 waves-effect waves-light btn-flat btn-large inherit-bgc ${styles["slide-btn"]}`}
              >
                <i className={`fas fa-play ${styles["button-icon"]}`}></i>
                <span className={styles["button-text"]}>Watch trailer</span>
              </button>
              <button
                className={`col s12 waves-effect waves-light btn-flat btn-large inherit-bgc ${styles["slide-btn"]}`}
              >
                <i
                  className={`fas fa-shopping-cart ${styles["button-icon"]}`}
                ></i>
                <span className={styles["button-text"]}>Buy ticket</span>
              </button>
            </div>
          </div>
          <ul className={styles["slide-ratings"]}>
            {film.ratings.map(rating => {
              return (
                <li className={styles["rating-element"]} key={rating._id}>
                  <h3 className={styles["rater-name"]}>{rating.raterName}</h3>
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
        </div>
      )}
    </div>
  );
}
