import { connect } from "react-redux";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";
import { userRegisterRequest } from "actions/users";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    registerUser: (formData: FormData) => {
      dispatch(userRegisterRequest(formData));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignUpModal);
