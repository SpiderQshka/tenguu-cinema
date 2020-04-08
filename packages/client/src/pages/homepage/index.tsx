import React from "react";
import SignUpModal from "containers/modals/SignUpModalContainer";
import SignInModal from "containers/modals/SignInModalContainer";
import BuyTicketModal from "containers/modals/BuyTicketModalContainer";
import UserTicketsModal from "containers/modals/UserTicketsModalContainer";
import WatchTrailerModal from "containers/modals/WatchTrailerModalContailner";
import FilmCarousel from "containers/FilmCarouselContainer";
import NowPlaying from "containers/NowPlayingContainer";
import ComingSoon from "containers/ComingSoonContainer";
import { OurSkills } from "pages/homepage/components/ourSkills";
import { Footer } from "pages/homepage/components/footer";
import { MapComponent } from "pages/homepage/components/map";
import Header from "containers/HeaderContainer";
import Message from "containers/MessageContainer";

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
      <>
        <SignUpModal />
        <SignInModal />
        <BuyTicketModal />
        <UserTicketsModal />
        <WatchTrailerModal />
      </>
      <Message />
    </>
  );
}
