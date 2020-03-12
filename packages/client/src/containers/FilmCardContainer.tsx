import { connect } from "react-redux";

import { FilmCard } from "components/film-card";
import { IState } from "interfaces/IState";
import { openBuyTicketModal } from "actions/modals";
import { changeActiveFilmForBuying } from "actions/films";

const mapStateToProps = (state: IState) => {
  return { films: state.films, lang: state.lang.currentLang };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (filmId: string) => {
      dispatch(changeActiveFilmForBuying(filmId));
      dispatch(openBuyTicketModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FilmCard);
