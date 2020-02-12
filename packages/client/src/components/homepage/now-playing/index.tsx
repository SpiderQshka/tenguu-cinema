import React from "react";
import { Carousel } from "./Carousel";
import { Header } from "./Header";
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
