import { connect, ConnectedProps } from "react-redux";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";
import { userRegisterRequest } from "actions/users";
import { closeRegModalRequest, closeRegModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { modals: state.modals, users: state.users };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    registerUser: (data: string) => {
      dispatch(userRegisterRequest(data));
    },
    closeRegisterModalRequest: () => {
      dispatch(closeRegModalRequest());
    },
    closeRegisterModal: () => {
      dispatch(closeRegModal());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type SignUpModalProps = ConnectedProps<typeof connector>;

export default connector(SignUpModal);
