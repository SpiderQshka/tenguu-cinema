import React from "react";
import Slider from "containers/FilmSliderContainer";
import { SectionTitle } from "components/section-title";
import "./nowPlaying.sass";

export interface INowPlayingProps {}

export function NowPlaying(props: INowPlayingProps) {
  return (
    <section className="now-playing">
      <SectionTitle isDark={true} message="Now Playing" />
      <Slider />
    </section>
  );
}
