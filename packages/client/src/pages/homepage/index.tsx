import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import { NowPlaying } from "pages/homepage/components/now-playing";
import { ComingSoon } from "./components/coming-soon";

export function Homepage() {
  return (
    <>
      <FilmCarousel />
      <NowPlaying />
      <ComingSoon />
    </>
  );
}
