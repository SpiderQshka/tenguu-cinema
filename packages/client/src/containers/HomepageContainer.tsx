import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPageInfo } from "sagas/page";

import { Homepage } from "pages/homepage";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { PageError } from "components/error";

const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getPage: fetchPageInfo
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const HomepageComponent = (props: ConnectedProps<typeof connector>) => {
  useEffect(() => {
    props.getPage();
  }, []);

  if (props.mainPage.error && props.mainPage.error.code >= 500)
    return <PageError error={props.mainPage.error} />;
  else if (!props.mainPage.pending) return <Homepage />;
  return <PageLoader />;
};

export default connector(HomepageComponent);
