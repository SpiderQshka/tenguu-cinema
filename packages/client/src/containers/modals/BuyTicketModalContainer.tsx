import { connect } from "react-redux";

import { SignInModal } from "components/modals/SignInModal";
import { IState } from "interfaces/IState";
import {
  closeBuyTicketModalRequest,
  closeBuyTicketModal
} from "actions/modals";
import { buyTicketRequest } from "actions/tickets";

const mapStateToProps = (state: IState) => {
  return {
    tickets: state.tickets,
    modals: state.modals,
    sessions: state.sessions
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
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignInModal);
