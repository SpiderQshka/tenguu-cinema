import { connect, ConnectedProps } from "react-redux";

import { FilmCard } from "components/filmCard";
import { IState } from "interfaces/IState";
import { openBuyTicketModal, openWatchTrailerModal } from "actions/modals";
import {
  changeActiveFilmForBuying,
  changeActiveFilmForShowTrailer,
} from "actions/films";
import { isUserAuthentificateSelector } from "selectors";

const mapStateToProps = (state: IState) => {
  return {
    films: state.films,
    isAuthentificate: isUserAuthentificateSelector(state),
  };
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
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type FilmCardProps = ConnectedProps<typeof connector>;

export default connector(FilmCard);
