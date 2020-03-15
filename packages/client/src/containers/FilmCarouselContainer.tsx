import { connect } from "react-redux";

import Carousel from "pages/homepage/components/film-carousel";
import { IState } from "interfaces/IState";
import { openBuyTicketModal, openWatchTrailerModal } from "actions/modals";
import {
  changeActiveFilmForBuying,
  changeActiveFilmForShowTrailer
} from "actions/films";

const mapStateToProps = (state: IState) => {
  return { films: state.films, lang: state.lang.currentLang };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (filmId: string) => {
      dispatch(changeActiveFilmForBuying(filmId));
      dispatch(openBuyTicketModal());
    },
    watchTrailer: (filmId: string) => {
      dispatch(changeActiveFilmForShowTrailer(filmId));
      dispatch(openWatchTrailerModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Carousel);
