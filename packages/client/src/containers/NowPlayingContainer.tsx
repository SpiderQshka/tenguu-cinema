import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { NowPlaying } from "pages/homepage/components/now-playing/";
import { IState } from "interfaces/IState";
import { nowPlayingFilmsSelector } from "selectors";

const mapStateToProps = (state: IState) => {
  return {
    data: nowPlayingFilmsSelector(state).data,
    lang: state.lang.currentLang
  };
};
const HomepageComponent = (props: ConnectedProps<typeof connector>) => {
  return <NowPlaying {...props} />;
};
const connector = connect(mapStateToProps);

export default connector(HomepageComponent);
