import React from "react";
import { connect, ConnectedProps } from "react-redux";

import Carousel from "pages/homepage/components/film-carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;

const connector = connect(mapStateToProps);

function FilmCarouselContainer(props: ConnectedProps<typeof connector>) {
  return <Carousel {...props} />;
}

export default connector(FilmCarouselContainer);
