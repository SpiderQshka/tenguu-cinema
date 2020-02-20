import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "interfaces/IState";
import { fetchFilmsRequest } from "actions/films";
import { fetchCurrentUserRequest } from "actions/users";
import { fetchSessionsRequest } from "actions/sessions";

import { Homepage } from "pages/homepage";

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUser: fetchCurrentUserRequest,
    getFilms: fetchFilmsRequest,
    getSessions: fetchSessionsRequest
  };
};

const connector = connect(mapDispatchToProps);

const HomepageComponent = (props: ConnectedProps<typeof connector>) => {
  useEffect(() => {
    props.getUser();
    props.getFilms();
    props.getSessions();
  }, [props]);

  return <Homepage />;
};

export default connector(HomepageComponent);
