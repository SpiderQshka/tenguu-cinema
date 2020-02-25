import React from "react";
import { connect } from "react-redux";

import { userLoginRequest } from "actions/users";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    loginUser: (authToken: string, userId: string) => {
      dispatch(userLoginRequest({ authToken, _id: userId }));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SignUpModal);
