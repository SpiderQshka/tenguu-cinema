import React, { useState } from "react";
import { SectionTitle } from "components/section-title";
import { FilmBlock } from "./FilmBlock";
import { Carousel } from "./Carousel";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";

export interface IComingSoonProps {
  data: IFilm[];
}

export function ComingSoon(props: IComingSoonProps) {
  const { data: films } = props;
  const [filmIndex, handleFilmIndexChange] = useState(0);
  if (!films.length) return null;
  return (
    <section className={styles["coming-soon"]} id="coming-soon">
      <SectionTitle isDark={false} message="Coming soon" />
      <FilmBlock film={films[filmIndex]} />
      <Carousel {...props} handler={handleFilmIndexChange} />
    </section>
  );
}
