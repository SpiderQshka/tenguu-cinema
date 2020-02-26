import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import { NowPlaying } from "pages/homepage/components/now-playing";
import ComingSoon from "containers/ComingSoonContainer";
import { OurSkills } from "pages/homepage/components/our-skills";

export function Homepage(props: any) {
  return (
    <>
      <FilmCarousel />
      <NowPlaying />
      <ComingSoon />
      <OurSkills />
    </>
  );
}
