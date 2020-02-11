import React from "react";
import { Carousel } from "./NowPlayingCarousel";
import { Header } from "./NowPlayingHeader";
import "./nowPlaying.sass";

export interface INowPlayingProps {}

export function NowPlaying(props: INowPlayingProps) {
  return (
    <section className="now-playing">
      <Header />
      <Carousel />
    </section>
  );
}
