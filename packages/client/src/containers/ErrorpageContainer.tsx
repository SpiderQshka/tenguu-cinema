import React from "react";
import { IState } from "interfaces/IState";
import { PageError } from "pages/errorpage";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: IState) => state.mainPage;

const connector = connect(mapStateToProps);

const ErrorpageContainer = (props: ConnectedProps<typeof connector>) => {
  return <PageError error={props.error} />;
};

export default connector(ErrorpageContainer);
