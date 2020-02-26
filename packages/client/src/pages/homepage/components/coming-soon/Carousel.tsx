import React from "react";

import { ArrowNext, ArrowPrev } from "./Controls";
import { ComingSoonFilmCard } from "components/film-card/index";
import { CarouselComponent } from "components/carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./coming-soon.module.sass";

export function Carousel(props: any) {
  const { data: films, pending, handler } = props;
  const afterChange = (index: number) => {
    handler(index);
  };
  return (
    <div className={styles.carousel}>
      <CarouselComponent
        items={films}
        next={<ArrowNext onClick={e => {}} />}
        prev={<ArrowPrev onClick={e => {}} />}
        pending={pending}
        BasicElement={ComingSoonFilmCard}
        afterChange={afterChange}
      ></CarouselComponent>
    </div>
  );
}
