import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import NowPlaying from "containers/NowPlayingContainer";
import ComingSoon from "containers/ComingSoonContainer";
import { OurSkills } from "pages/homepage/components/our-skills";
import { Footer } from "pages/homepage/components/footer";
import { MapComponent } from "pages/homepage/components/map";
import Header from "containers/HeaderContainer";

export function Homepage() {
  return (
    <>
      <Header />
      <FilmCarousel />
      <NowPlaying />
      <ComingSoon />
      <OurSkills />
      <MapComponent />
      <Footer />
    </>
  );
}
