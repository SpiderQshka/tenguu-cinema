import React from "react";
import { connect } from "react-redux";

import { userLoginRequest, userRegisterRequest } from "actions/users";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    register: (authToken: string, userId: string) => {
      dispatch(userRegisterRequest(authToken, userId));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignUpModal);
