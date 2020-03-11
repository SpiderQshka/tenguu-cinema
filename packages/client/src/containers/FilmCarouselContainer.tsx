import { connect } from "react-redux";

import Carousel from "pages/homepage/components/film-carousel";
import { IState } from "interfaces/IState";
import { openBuyTicketModal } from "actions/modals";
import { changeActiveFilmForBuying } from "actions/films";

const mapStateToProps = (state: IState) => {
  return { films: state.films };
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

export default connector(Carousel);
