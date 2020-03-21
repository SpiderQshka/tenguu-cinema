import { connect } from "react-redux";

import { Header } from "pages/homepage/components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import {
  openRegModal,
  openLoginModal,
  openUserTicketModal
} from "actions/modals";
import { changeLang } from "actions/lang";
import { currentTicketsSelector } from "selectors";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
    currentUserTickets: currentTicketsSelector(state),
    modals: state.modals,
    lang: state.lang.currentLang
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal()),
    openUserTicketsModal: () => dispatch(openUserTicketModal()),
    changeLang: (lang: string) => dispatch(changeLang(lang))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
