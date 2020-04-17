import { connect, ConnectedProps } from "react-redux";

import { NowPlaying } from "pages/homepage/components/nowPlaying";
import { IState } from "interfaces/IState";
import { nowPlayingFilmsSelector } from "selectors";

const mapStateToProps = (state: IState) => {
  return {
    films: nowPlayingFilmsSelector(state),
  };
};

const connector = connect(mapStateToProps);

export type NowPlayingProps = ConnectedProps<typeof connector>;

export default connector(NowPlaying);
