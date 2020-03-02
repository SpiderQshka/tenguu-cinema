import React from "react";
import { SectionTitle } from "components/section-title";
import styles from "./nowPlaying.module.sass";
import { CarouselComponent } from "./Carousel";
import { IFilm } from "interfaces/IFilm";

export interface INowPlayingProps {
  data: IFilm[];
}

export function NowPlaying(props: INowPlayingProps) {
  if (!props.data.length) return null;
  return (
    <section className={styles["now-playing"]} id="now-playing">
      <SectionTitle isDark={true} message="Now Playing" />
      <CarouselComponent {...props} />
    </section>
  );
}
