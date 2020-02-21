import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchFilmsRequest } from "actions/films";

import Carousel from "pages/homepage/components/film-carousel";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.films;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getFilms: fetchFilmsRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function FilmCarouselContainer(props: ConnectedProps<typeof connector>) {
  console.log("Films: ", props);

  return <Carousel {...props} />;
}

export default connector(FilmCarouselContainer);
