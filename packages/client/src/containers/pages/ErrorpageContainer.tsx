import React from "react";
import { IState } from "interfaces/IState";
import { PageError } from "pages/errorpage";
import { Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

const mapStateToProps = (state: IState) => state.mainPage;

const connector = connect(mapStateToProps);

export type ErrorpageProps = ConnectedProps<typeof connector>;

const ErrorpageContainer = (props: ErrorpageProps) =>
  props.error && props.error.code >= 500 ? (
    <PageError error={props.error} />
  ) : (
    <Redirect to="/" />
  );

export default connector(ErrorpageContainer);
