import React from "react";
import { config } from "config";
import { Loader } from "components/loader";
import { Progressbar } from "./Progressbar";
import { Typography, Button } from "@material-ui/core/";
import { IFilm } from "interfaces/IFilm";
import styles from "./film-carousel.module.sass";

export interface ISlide {
  film: IFilm;
  pending: boolean;
  buyTicket: (id: string) => void;
}

export function Slide(props: ISlide) {
  const { film, pending, buyTicket } = props;
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
                <li className={styles["genre"]} key={genre}>
                  <Typography variant="overline">{genre}</Typography>
                </li>
              ))}
            </ul>
            <Typography variant="h1" className={styles["film-name"]}>
              {film.name}
            </Typography>
            <div className={styles["buttons"]}>
              <Button
                className={styles["slide-btn"]}
                startIcon={
                  <i className={`fas fa-play ${styles["button-icon"]}`}></i>
                }
              >
                Watch trailer
              </Button>
              <Button
                className={styles["slide-btn"]}
                startIcon={
                  <i
                    className={`fas fa-shopping-cart ${styles["button-icon"]}`}
                  ></i>
                }
                onClick={() => buyTicket(film.id)}
              >
                Buy ticket
              </Button>
            </div>
          </div>
          {film.ratings && (
            <ul className={styles["slide-ratings"]}>
              {film.ratings.map(rating => {
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
