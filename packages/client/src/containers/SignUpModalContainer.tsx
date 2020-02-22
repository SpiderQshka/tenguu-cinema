import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { addUserToken } from "actions/users";

import { SignUpModal } from "components/modals/SignUpModal";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    setUserToken: (token: string) => {
      dispatch(addUserToken(token));
    }
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function ModalContainer(props: ConnectedProps<typeof connector>) {
  return <SignUpModal {...props} />;
}

export default connector(ModalContainer);
