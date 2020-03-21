import { connect } from "react-redux";
import { IState } from "interfaces/IState";
import { closeUserTicketModal } from "actions/modals";
import { UserTicketsModal } from "components/modals/UserTicketsModal";
import { currentTicketsSelector } from "selectors";
import { deleteTicketRequest } from "actions/tickets";

const mapStateToProps = (state: IState) => {
  return {
    isModalOpen: state.modals.isUserTicketsModalOpen,
    sessions: state.sessions.data,
    tickets: currentTicketsSelector(state),
    user: state.users.currentUser
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    closeModal: () => {
      dispatch(closeUserTicketModal());
    },
    deleteTicket: (id: string) => {
      dispatch(deleteTicketRequest(id));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserTicketsModal);
