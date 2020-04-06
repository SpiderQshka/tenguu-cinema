import { connect, ConnectedProps } from "react-redux";

import { NowPlaying } from "pages/homepage/components/now-playing/";
import { IState } from "interfaces/IState";
import { nowPlayingFilmsSelector } from "selectors";

const mapStateToProps = (state: IState) => {
  return {
    data: nowPlayingFilmsSelector(state).data
  };
};

const connector = connect(mapStateToProps);

export type NowPlayingProps = ConnectedProps<typeof connector>;

export default connector(NowPlaying);
