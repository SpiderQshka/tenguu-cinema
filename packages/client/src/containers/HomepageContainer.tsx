import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPageInfo } from "sagas/page";

import { Homepage } from "pages/homepage";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: IState) => state;

const connector = connect(mapStateToProps);

const HomepageComponent = (props: ConnectedProps<typeof connector>) => {
  if (props.mainPage.error && props.mainPage.error.code >= 500)
    return <Redirect to="/error" />;
  else if (!props.mainPage.pending) return <Homepage />;
  return <PageLoader />;
};

export default connector(HomepageComponent);
