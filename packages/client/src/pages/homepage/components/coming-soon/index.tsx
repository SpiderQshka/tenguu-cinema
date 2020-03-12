import React, { useState } from "react";
import { SectionTitle } from "components/section-title";
import { FilmBlock } from "./FilmBlock";
import { Carousel } from "./Carousel";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";
import { FormattedMessage } from "react-intl";

export interface IComingSoonProps {
  data: IFilm[];
  buyTicket: (filmId: string) => void;
  lang: string;
}

export function ComingSoon(props: IComingSoonProps) {
  const { data: films } = props;
  const [filmIndex, handleFilmIndexChange] = useState(0);
  if (!films.length) return null;
  return (
    <section className={styles["coming-soon"]} id="coming-soon">
      <SectionTitle
        isDark={false}
        message={
          <FormattedMessage
            id="homepage.sectionTitle.comingSoon"
            defaultMessage="Coming soon"
          />
        }
      />
      <FilmBlock
        film={films[filmIndex]}
        buyTicket={props.buyTicket}
        lang={props.lang}
      />
      <Carousel {...props} handler={handleFilmIndexChange} />
    </section>
  );
}
