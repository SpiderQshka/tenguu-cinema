import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { ComingSoon } from "pages/homepage/components/coming-soon";

import { IState } from "interfaces/IState";
import { comingSoonFilmsSelector } from "selectors";

const mapStateToProps = (state: IState) => comingSoonFilmsSelector(state);
const ComingSoonComponent = (props: ConnectedProps<typeof connector>) => {
  return <ComingSoon {...props} />;
};
const connector = connect(mapStateToProps);

export default connector(ComingSoonComponent);
