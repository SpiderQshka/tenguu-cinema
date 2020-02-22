import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { FilmBlock } from "pages/homepage/components/coming-soon/FilmBlock";

import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state.sessions;

const connector = connect(mapStateToProps);

function SessionsContainer(props: ConnectedProps<typeof connector>) {
  const { data: sessions, pending } = props;
  return <FilmBlock sessions={sessions} pending={pending} />;
}

export default connector(SessionsContainer);
