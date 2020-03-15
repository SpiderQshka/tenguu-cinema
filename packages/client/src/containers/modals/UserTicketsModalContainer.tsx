import { connect } from "react-redux";
import { IState } from "interfaces/IState";
import { closeUserTicketModal } from "actions/modals";
import { UserTicketsModal } from "components/modals/UserTicketsModal";

const mapStateToProps = (state: IState) => {
  return {
    isModalOpen: state.modals.isBuyTicketModalOpen,
    sessions: state.sessions.data,
    halls: state.halls.data,
    tickets: state.tickets,
    modals: state.modals
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
