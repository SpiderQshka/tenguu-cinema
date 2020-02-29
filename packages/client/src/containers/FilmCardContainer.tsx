import { connect } from "react-redux";

import { FilmCard } from "components/film-card";
import { IState } from "interfaces/IState";
import { openBuyTicketModal } from "actions/modals";

const mapStateToProps = (state: IState) => state.films;
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (filmId: string) => {
      dispatch(openBuyTicketModal({ filmId }));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(FilmCard);
