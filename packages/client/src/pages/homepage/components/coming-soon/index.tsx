import React, { useState } from "react";
import { SectionTitle } from "components/section-title";
import { FilmBlock } from "./FilmBlock";
import { Carousel } from "./Carousel";
import styles from "./coming-soon.module.sass";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { ComingSoonProps } from "containers/ComingSoonContainer";

export function ComingSoon(props: ComingSoonProps) {
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
          <FilmBlock film={films[filmIndex]} buyTicket={props.buyTicket} />
          <Carousel {...props} handler={handleFilmIndexChange} />
        </>
      )}
    </section>
  );
}
