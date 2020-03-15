import { connect } from "react-redux";
import { IState } from "interfaces/IState";
import { closeUserTicketModal } from "actions/modals";
import { UserTicketsModal } from "components/modals/UserTicketsModal";

const mapStateToProps = (state: IState) => {
  return {
    isModalOpen: state.modals.isBuyTicketModalOpen,
    sessions: state.sessions.data,
    tickets: state.tickets.data,
    modals: state.modals,
    user: state.users.currentUser
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => {
      dispatch(closeUserTicketModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserTicketsModal);
