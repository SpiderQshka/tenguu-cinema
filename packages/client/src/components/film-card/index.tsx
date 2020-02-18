import React from "react";
import { Button } from "react-materialize";

import styles from "./film-card.module.sass";

export interface IFilmCardProps {}

export function FilmCard(props: IFilmCardProps) {
  return (
    <div className={styles["film-card"]}>
      <div className={styles["buttons"]}>
        <Button
          flat
          large
          waves="light"
          icon={
            <>
              <i className={`fas fa-play ${styles["button-icon"]}`}></i>
              <span className={styles["button-text"]}>Watch trailer</span>
            </>
          }
          className={styles["slide-btn"]}
        ></Button>
        <Button
          flat
          large
          waves="light"
          icon={
            <>
              <i
                className={`fas fa-shopping-cart ${styles["button-icon"]}`}
              ></i>
              <span className={styles["button-text"]}>Buy ticket</span>
            </>
          }
          className={styles["slide-btn"]}
        ></Button>
      </div>
      <div className={styles["info-block"]}>
        <div className={styles["rating"]}></div>
        <div className={styles["film-name"]}></div>
        <div className={styles["sessions"]}>11:00</div>
      </div>
    </div>
  );
}
