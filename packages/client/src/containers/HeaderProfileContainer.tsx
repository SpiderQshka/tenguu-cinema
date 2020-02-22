import React, { useLayoutEffect, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { Profile } from "components/header/Profile";
import { IState } from "interfaces/IState";
import { fetchCurrentUserRequest, userLogout } from "actions/users";

const mapStateToProps = (state: IState) => state.user;

const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: () => {
      dispatch(userLogout());
    },
    getUser: fetchCurrentUserRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function HeaderProfileWrapper(props: ConnectedProps<typeof connector>) {
  useLayoutEffect(() => {
    props.getUser();
  }, [props.data.authToken]);
  return <Profile {...props} />;
}

export default connector(HeaderProfileWrapper);
