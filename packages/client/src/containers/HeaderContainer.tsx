import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { Header } from "components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import { openRegModal, openLoginModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { users: state.users, modals: state.modals };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const HeaderComponent = (props: ConnectedProps<typeof connector>) => {
  return <Header {...props} />;
};

export default connector(HeaderComponent);
