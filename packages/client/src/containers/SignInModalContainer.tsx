import { connect } from "react-redux";

import { userLoginRequest } from "actions/users";

import { SignInModal } from "components/modals/SignInModal";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (formData: FormData) => {
      dispatch(userLoginRequest(formData));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignInModal);
