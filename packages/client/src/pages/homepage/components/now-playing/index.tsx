import React from "react";
import { SectionTitle } from "components/section-title";
import styles from "./nowPlaying.module.sass";
import { CarouselComponent } from "./Carousel";
import { IFilm } from "interfaces/IFilm";
import { FormattedMessage } from "react-intl";

export interface INowPlayingProps {
  data: IFilm[];
  lang: string;
}

export function NowPlaying(props: INowPlayingProps) {
  if (!props.data.length) return null;
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
      <CarouselComponent {...props} />
    </section>
  );
}
