import React from "react";

// import { CarouselComponent } from "components/carousel";
// import { FilmCardPreOrder } from "components/film-card";

import styles from "./coming-soon.module.sass";
import { ISession } from "interfaces/ISession";

export interface IFilmBlock {
  sessions: ISession[];
  pending: boolean;
}

export const FilmBlock = (props: IFilmBlock) => {
  // const { sessions, pending } = props;
  //   const films
  return (
    <div className={styles["film-block"]}>
      {/* <CarouselComponent BasicElement={FilmCardPreOrder} items={} /> */}
    </div>
  );
};
