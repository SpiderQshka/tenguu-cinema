import { connect, ConnectedProps } from "react-redux";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";
import { userRegisterRequest } from "actions/users";
import { closeRegModalRequest, closeRegModal } from "actions/modals";

const mapStateToProps = (state: IState) => {
  return { users: state.users, modals: state.modals };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    registerUser: (data: JSON) => {
      dispatch(userRegisterRequest(data));
    },
    closeRegisterModalRequest: () => {
      dispatch(closeRegModalRequest());
    },
    closeRegisterModal: () => {
      dispatch(closeRegModal());
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type SignUpModalProps = ConnectedProps<typeof connector>;

export default connector(SignUpModal);
