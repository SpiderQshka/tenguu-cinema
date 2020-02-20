import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchCurrentUserRequest } from "actions/users";

import { Profile } from "components/header/Profile";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.user;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: fetchCurrentUserRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function HeaderProfileWrapper(props: ConnectedProps<typeof connector>) {
  return <Profile {...props} />;
}

export default connector(HeaderProfileWrapper);
