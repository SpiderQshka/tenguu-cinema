import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchFilmsRequest } from "actions/films";

import { Carousel } from "pages/homepage/components/now-playing/Carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getFilms: fetchFilmsRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function FilmSliderContainer(props: ConnectedProps<typeof connector>) {
  return <Carousel {...props} />;
}

export default connector(FilmSliderContainer);
