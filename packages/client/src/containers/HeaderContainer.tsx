import { connect } from "react-redux";

import { Header } from "components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import { openRegModal, openLoginModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { user: state.user, modals: state.modals };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
