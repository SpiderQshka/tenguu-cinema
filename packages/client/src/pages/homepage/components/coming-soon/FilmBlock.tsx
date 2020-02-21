import React from "react";

// import { CarouselComponent } from "components/carousel";
// import { FilmCardPreOrder } from "components/film-card";

import styles from "./coming-soon.module.sass";
import { ISession } from "interfaces/ISession";
import { Loader } from "components/loader";
import { CarouselComponent } from "components/carousel";

export interface IFilmBlock {
  sessions: ISession[];
  pending: boolean;
}

export const FilmBlock = (props: IFilmBlock) => {
  const { sessions, pending } = props;
  return (
    <div className={styles["film-block"]}>
      {pending ? (
        <Loader />
      ) : (
        <>
          <div className="filmInfo"></div>
          {/* <CarouselComponent BasicElement={FilmCardPreOrder} items={sessions} /> */}
        </>
      )}
      {/*  */}
    </div>
  );
};
