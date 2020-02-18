import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { fetchCurrentUserRequest } from "actions/users";

import { Profile } from "components/header/Profile";

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: () => fetchCurrentUserRequest()
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function HeaderProfileWrapper(props: ConnectedProps<typeof connector>) {
  const { getUser, currentUser, isAuthorized, pending } = props;

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <Profile user={currentUser} isAuthorized={isAuthorized} pending={pending} />
  );
}

export default connector(HeaderProfileWrapper);
