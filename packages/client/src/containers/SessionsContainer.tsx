import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { FilmBlock } from "pages/homepage/components/coming-soon/FilmBlock";

import { fetchSessionsRequest } from "actions/sessions";

const mapStateToProps = (state: any) => state.sessionsData;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getSessions: () => fetchSessionsRequest()
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

function FilmCarouselWrapper(props: ConnectedProps<typeof connector>) {
  const { getSessions, sessions, pending } = props;
  console.log(props);

  useEffect(() => {
    getSessions();
  }, [getSessions]);

  return <FilmBlock sessions={sessions} pending={pending} />;
}

export default connector(FilmCarouselWrapper);
