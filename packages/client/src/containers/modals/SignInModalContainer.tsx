import { connect, ConnectedProps } from "react-redux";

import { userLoginRequest } from "actions/users";

import { SignInModal } from "components/modals/SignInModal";
import { IState } from "interfaces/IState";
import { closeLoginModal, closeLoginModalRequest } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { modals: state.modals, users: state.users };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (data: string) => {
      dispatch(userLoginRequest(data));
    },
    closeLoginModalRequest: () => {
      dispatch(closeLoginModalRequest());
    },
    closeLoginModal: () => {
      dispatch(closeLoginModal());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type SignInModalProps = ConnectedProps<typeof connector>;

export default connector(SignInModal);
