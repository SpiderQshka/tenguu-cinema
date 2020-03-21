import React from "react";
import { SectionTitle } from "components/section-title";
import styles from "./nowPlaying.module.sass";
import { CarouselComponent } from "./Carousel";
import { IFilm } from "interfaces/IFilm";
import { FormattedMessage } from "react-intl";
import { Typography } from "@material-ui/core/";

export interface INowPlayingProps {
  data: IFilm[];
  lang: string;
}

export function NowPlaying(props: INowPlayingProps) {
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
      {!props.data.length ? (
        <>
          <i className={`far fa-clock ${styles.filmsNotFoundIcon}`}></i>
          <Typography variant="h5" className={styles.filmsNotFoundText}>
            <FormattedMessage
              id="homepage.comingSoon.filmsNotFound"
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
