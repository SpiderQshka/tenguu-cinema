import { connect, ConnectedProps } from "react-redux";
import { IState } from "interfaces/IState";
import {
  closeBuyTicketModalRequest,
  closeBuyTicketModal,
} from "actions/modals";
import { buyTicketRequest } from "actions/tickets";
import {
  activeForBuyingFilmSelector,
  activeForBuyingSessionSelector,
} from "selectors";
import { BuyTicketModal } from "components/modals/BuyTicketModal";
import { changeActiveSessionForBuying } from "actions/sessions";

const mapStateToProps = (state: IState) => {
  return {
    currentFilm: activeForBuyingFilmSelector(state),
    currentSession: activeForBuyingSessionSelector(state),
    isBuyTicketModalOpen: state.modals.isBuyTicketModalOpen,
    sessions: state.sessions,
    halls: state.halls,
    tickets: state.tickets,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyTicket: (data: string) => {
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
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type BuyTicketModalProps = ConnectedProps<typeof connector>;

export default connector(BuyTicketModal);
