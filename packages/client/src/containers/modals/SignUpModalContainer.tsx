import { connect } from "react-redux";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";
import { userRegisterRequest } from "actions/users";
import { closeRegModalRequest, closeRegModal } from "actions/modals";

const mapStateToProps = (state: IState) => state.users;
const mapDispatchToProps = (dispatch: any) => {
  return {
    registerUser: (formData: FormData) => {
      dispatch(userRegisterRequest(formData));
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

export default connector(SignUpModal);
