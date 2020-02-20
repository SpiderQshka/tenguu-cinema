import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { FilmBlock } from "pages/homepage/components/coming-soon/FilmBlock";

import { fetchSessionsRequest } from "actions/sessions";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.sessions;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getSessions: fetchSessionsRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function SessionsContainer(props: ConnectedProps<typeof connector>) {
  const { getSessions, data: sessions, pending } = props;
  useEffect(() => {
    getSessions();
  }, [getSessions]);

  return <FilmBlock sessions={sessions} pending={pending} />;
}

export default connector(SessionsContainer);
