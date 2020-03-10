import { connect } from "react-redux";

import { userLoginRequest } from "actions/users";

import { SignInModal } from "components/modals/SignInModal";
import { IState } from "interfaces/IState";
import { closeLoginModal, closeLoginModalRequest } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { users: state.users, modals: state.modals };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (data: JSON) => {
      dispatch(userLoginRequest(data));
    },
    closeLoginModalRequest: () => {
      dispatch(closeLoginModalRequest());
    },
    closeLoginModal: () => {
      dispatch(closeLoginModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignInModal);
