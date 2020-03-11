import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { Header } from "pages/homepage/components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import { openRegModal, openLoginModal } from "actions/modals";
import { openTicketsTab, closeTicketsTab } from "actions/tickets";

const mapStateToProps = (state: IState) => {
  return { users: state.users, modals: state.modals };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal()),
    openTicketsTab: () => dispatch(openTicketsTab()),
    closeTicketsTab: () => dispatch(closeTicketsTab())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const HeaderComponent = (props: ConnectedProps<typeof connector>) => {
  return <Header {...props} />;
};

export default connector(HeaderComponent);
