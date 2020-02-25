import React from "react";

// import { CarouselComponent } from "components/carousel";
// import { FilmCardPreOrder } from "components/film-card";

import styles from "./coming-soon.module.sass";
import { ISession } from "interfaces/ISession";
import { CenterLoader } from "components/loader";
import { CarouselComponent } from "components/carousel";

export interface IFilmBlock {
  sessions: ISession[];
  pending: boolean;
}

export const FilmBlock = (props: IFilmBlock) => {
  const { sessions, pending } = props;
  return (
    <div className={styles.filmBlock}>
      {pending ? (
        <CenterLoader />
      ) : (
        <div className={styles.filmInfo}>
          <video src="#" className={styles.filmTrailer}></video>
          <div className={styles.basicInfoBlock}>
            <ul className={styles.genres}>
              <li className={styles.genre}>Genre 1</li>
              <li className={styles.genre}>Genre 2</li>
            </ul>
            <p className={styles.filmName}>Name</p>
            <div className={styles.date}>Date</div>
          </div>
          <div className={styles.descriptionAndRatingsBlock}>
            <div className={styles.filmPhotoBlock}>
              <img src="page.jpg" alt="film" className={styles.filmPhoto} />
            </div>
            <div className={styles.descriptionBlock}>
              <p className={styles.descriptionText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                tempore, similique laboriosam dolor voluptate consectetur fugit
                illum non sunt corrupti.
              </p>
              <div className={styles.descriptionButtons}>
                <button
                  className={`waves-effect waves-light btn orange ${styles.filmButton}`}
                >
                  {/* <i
                    className={`fas fa-shopping-cart ${styles.buttonIcon}`}
                  ></i> */}
                  Pre order
                </button>
                <button
                  className={`waves-effect waves-light btn black   ${styles.filmButton}`}
                >
                  {/* <i
                    className={`fas fa-shopping-cart ${styles.buttonIcon}`}
                  ></i> */}
                  Read more
                </button>
              </div>
            </div>
            <div className={styles.ratingsBlock}>
              <div className={styles.ratingElement}>
                <p className={styles.ratingText}>6.4 - Metacritic</p>
                <div className={styles.ratingValue}></div>
              </div>
              <div className={styles.ratingElement}>
                <p className={styles.ratingText}>6.4 - Metacritic</p>
                <div className={styles.ratingValue}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
