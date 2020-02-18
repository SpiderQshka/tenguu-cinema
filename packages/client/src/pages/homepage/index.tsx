import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import { NowPlaying } from "pages/homepage/components/now-playing";

import "./homepage.sass";

interface IHomepageProps {}

export function Homepage(props: IHomepageProps) {
  return (
    <>
      <FilmCarousel />
      <NowPlaying />
    </>
  );
}
