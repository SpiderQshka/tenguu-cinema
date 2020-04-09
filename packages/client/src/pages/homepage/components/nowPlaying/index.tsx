import React from "react";
import { SectionTitle } from "components/sectionTitle";
import styles from "./nowPlaying.module.sass";
import { CarouselComponent } from "./Carousel";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { NowPlayingProps } from "containers/NowPlayingContainer";

export function NowPlaying(props: NowPlayingProps) {
  return (
    <section className={styles["now-playing"]} id="now-playing">
      <SectionTitle
        isDark={true}
        message={
          <FormattedMessage
            id="homepage.sectionTitle.nowPlaying"
            defaultMessage="Now playing"
          />
        }
      />
      {!props.films.length ? (
        <>
          <FontAwesomeIcon
            icon={faClock}
            className={styles.filmsNotFoundIcon}
          />
          <Typography variant="h5" className={styles.filmsNotFoundText}>
            <FormattedMessage
              id="homepage.nowPlaying.filmsNotFound"
              defaultMessage="Films not found"
            />
          </Typography>
        </>
      ) : (
        <CarouselComponent {...props} />
      )}
    </section>
  );
}
