import { connect, ConnectedProps } from "react-redux";

import { ComingSoon } from "pages/homepage/components/comingSoon";

import { IState } from "interfaces/IState";
import { comingSoonFilmsSelector } from "selectors";
import { changeActiveFilmForBuying } from "actions/films";
import { openBuyTicketModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return {
    data: comingSoonFilmsSelector(state).data,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (filmId: string) => {
      dispatch(changeActiveFilmForBuying(filmId));
      dispatch(openBuyTicketModal());
    },
  };
};
const connector = connect(mapStateToProps, mapDispatchToProps);

export type ComingSoonProps = ConnectedProps<typeof connector>;

export default connector(ComingSoon);
