import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { CarouselComponent } from "pages/homepage/components/now-playing/Carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;
const connector = connect(mapStateToProps);

function FilmSliderContainer(props: ConnectedProps<typeof connector>) {
  return <CarouselComponent {...props} />;
}

export default connector(FilmSliderContainer);
