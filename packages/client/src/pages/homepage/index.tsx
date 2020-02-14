import React from "react";

import FilmCarousel from "../../components/homepageComponents/film-carousel";
import { NowPlaying } from "../../components/homepageComponents/now-playing";

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
