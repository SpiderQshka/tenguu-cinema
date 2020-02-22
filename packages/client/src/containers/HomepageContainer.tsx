import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPageInfo } from "sagas/page";

import { Homepage } from "pages/homepage";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";

const mapStateToProps = (state: IState) => state.mainPage;
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

  if (!props.pending) return <Homepage {...props} />;

  return <PageLoader />;
};

export default connector(HomepageComponent);
