import React, { useState } from "react";
import { SectionTitle } from "components/section-title";
import { FilmBlock } from "./FilmBlock";
import { Carousel } from "./Carousel";
import styles from "./coming-soon.module.sass";
import { IFilm } from "interfaces/IFilm";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export interface IComingSoonProps {
  data: IFilm[];
  buyTicket: (filmId: string) => void;
  lang: string;
}

export function ComingSoon(props: IComingSoonProps) {
  const { data: films } = props;
  const [filmIndex, handleFilmIndexChange] = useState(0);
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
      {!films.length ? (
        <>
          <FontAwesomeIcon
            icon={faClock}
            className={styles.filmsNotFoundIcon}
          />
          <Typography variant="h5" className={styles.filmsNotFoundText}>
            <FormattedMessage
              id="homepage.comingSoon.filmsNotFound"
              defaultMessage="Films not found"
            />
          </Typography>
        </>
      ) : (
        <>
          <FilmBlock
            film={films[filmIndex]}
            buyTicket={props.buyTicket}
            lang={props.lang}
          />
          <Carousel {...props} handler={handleFilmIndexChange} />
        </>
      )}
    </section>
  );
}
