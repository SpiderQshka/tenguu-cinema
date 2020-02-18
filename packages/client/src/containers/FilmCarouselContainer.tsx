import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchFilmsRequest } from "actions/films";

import Carousel from "pages/homepage/components/film-carousel";

const mapStateToProps = (state: any) => state.filmsData;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getFilms: () => fetchFilmsRequest()
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function HeaderProfileWrapper(props: ConnectedProps<typeof connector>) {
  const { getFilms, films, pending } = props;
  console.log(props);

  useEffect(() => {
    getFilms();
  }, [getFilms]);

  return <Carousel films={films} pending={pending} />;
}

export default connector(HeaderProfileWrapper);
