import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchFilmsRequest } from "actions/films";

import { Carousel } from "pages/homepage/components/now-playing/Carousel";

const mapStateToProps = (state: any) => state.filmsData;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getFilms: () => fetchFilmsRequest()
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function FilmCarouselWrapper(props: ConnectedProps<typeof connector>) {
  const { getFilms, films, pending } = props;

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return <Carousel films={films} pending={pending} />;
}

export default connector(FilmCarouselWrapper);
