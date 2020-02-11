import React from "react";

import { FilmCarousel } from "./film-carousel/index";

interface IHomepageProps {}

export function Homepage(props: IHomepageProps) {
  return (
    <>
      <FilmCarousel />
    </>
  );
}
