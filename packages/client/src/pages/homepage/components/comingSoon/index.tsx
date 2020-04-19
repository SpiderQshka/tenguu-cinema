import React, { useState } from "react";
import { SectionTitle } from "components/sectionTitle";
import { FilmBlock } from "./FilmBlock";
import { Carousel } from "./Carousel";
import styles from "./coming-soon.module.sass";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { ComingSoonProps } from "containers/ComingSoonContainer";
import { PageLoader } from "components/loader";

export function ComingSoon(props: ComingSoonProps) {
  const { films, buyTicket, toggleDescription, isDescriptionOpen } = props;
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
      {!films.pending && !films.data.length ? (
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
      ) : props.films.pending ? (
        <PageLoader />
      ) : (
        <>
          <FilmBlock
            film={films.data[filmIndex]}
            buyTicket={buyTicket}
            toggleDescription={toggleDescription}
            isDescriptionOpen={isDescriptionOpen}
            isAuthentificate={props.isUserAuthentificate}
          />
          <Carousel {...props} handler={handleFilmIndexChange} />
        </>
      )}
    </section>
  );
}
