import { connect } from "react-redux";
import { IState } from "interfaces/IState";
import {
  closeBuyTicketModalRequest,
  closeBuyTicketModal
} from "actions/modals";
import { buyTicketRequest, changeTicketsForBuying } from "actions/tickets";
import {
  activeForBuyingFilmSelector,
  activeForBuyingSessionSelector
} from "selectors";
import { BuyTicketModal } from "components/modals/BuyTicketModal";
import { changeActiveSessionForBuying } from "actions/sessions";

const mapStateToProps = (state: IState) => {
  return {
    currentFilm: activeForBuyingFilmSelector(state),
    currentSession: activeForBuyingSessionSelector(state),
    isBuyTicketModalOpen: state.modals.isBuyTicketModalOpen,
    sessions: state.sessions.data,
    halls: state.halls.data,
    tickets: state.tickets
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (data: JSON) => {
      dispatch(buyTicketRequest(data));
    },
    closeModalRequest: () => {
      dispatch(closeBuyTicketModalRequest());
    },
    closeModal: () => {
      dispatch(closeBuyTicketModal());
    },
    changeActiveSession: (id: string) =>
      dispatch(changeActiveSessionForBuying(id)),
    changeTicketsForBuying: (amount: number) =>
      dispatch(changeTicketsForBuying(amount))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BuyTicketModal);
