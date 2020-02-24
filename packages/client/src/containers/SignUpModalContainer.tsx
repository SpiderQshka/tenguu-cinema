import React from "react";
import { connect } from "react-redux";

import { userLoginRequest } from "actions/users";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (token: string) => {
      dispatch(userLoginRequest(token));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignUpModal);
