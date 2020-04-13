import { connect, ConnectedProps } from "react-redux";

import { ComingSoon } from "pages/homepage/components/comingSoon";

import { IState } from "interfaces/IState";
import { comingSoonFilmsSelector } from "selectors";
import {
  changeActiveFilmForBuying,
  toggleFilmDescription,
} from "actions/films";
import { openBuyTicketModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return {
    films: comingSoonFilmsSelector(state).data,
    isDescriptionOpen: state.films.isFilmDescriptionOpen,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (filmId: string) => {
      dispatch(changeActiveFilmForBuying(filmId));
      dispatch(openBuyTicketModal());
    },
    toggleDescription: () => {
      dispatch(toggleFilmDescription());
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

export type ComingSoonProps = ConnectedProps<typeof connector>;

export default connector(ComingSoon);
