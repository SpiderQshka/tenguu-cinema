import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import NowPlaying from "containers/NowPlayingContainer";
import ComingSoon from "containers/ComingSoonContainer";
import { OurSkills } from "pages/homepage/components/our-skills";
import { MapComponent } from "pages/homepage/components/map";
import { Footer } from "pages/homepage/components/footer";

export function Homepage() {
  return (
    <>
      <FilmCarousel />
      <NowPlaying />
      <ComingSoon />
      <OurSkills />
      <MapComponent />
      <Footer />
    </>
  );
}
