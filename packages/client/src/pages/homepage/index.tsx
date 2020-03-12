import React from "react";

import FilmCarousel from "containers/FilmCarouselContainer";
import NowPlaying from "containers/NowPlayingContainer";
import ComingSoon from "containers/ComingSoonContainer";
import OurSkills from "containers/OurSkillsContainer";
import Footer from "containers/FooterContainer";
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
