import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import ErrorpageContainer from "./ErrorpageContainer";
import { Homepage } from "pages/homepage";
import { ErrorBoundary } from "components/errorBoundary";

const mapStateToProps = (state: IState) => {
  return {
    pending: state.mainPage.pending,
    error: state.mainPage.error,
  };
};

const HomepageContainer = (props: HomepageProps) =>
  props.error ? (
    <ErrorpageContainer />
  ) : (
    <ErrorBoundary>
      <Homepage />
    </ErrorBoundary>
  );

const connector = connect(mapStateToProps);

export type HomepageProps = ConnectedProps<typeof connector>;

export default connector(HomepageContainer);
