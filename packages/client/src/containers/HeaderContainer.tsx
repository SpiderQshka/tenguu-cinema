import { connect } from "react-redux";

import { Header } from "pages/homepage/components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import { openRegModal, openLoginModal } from "actions/modals";
import { openTicketsTab, closeTicketsTab } from "actions/tickets";
import { changeLang } from "actions/lang";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
    modals: state.modals,
    lang: state.lang.currentLang
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal()),
    openTicketsTab: () => dispatch(openTicketsTab()),
    closeTicketsTab: () => dispatch(closeTicketsTab()),
    changeLang: (lang: string) => dispatch(changeLang(lang))
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
