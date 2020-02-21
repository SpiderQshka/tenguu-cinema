import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPageRequest } from "actions/page";

import { Homepage } from "pages/homepage";
import { IState } from "interfaces/IState";

const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getPage: fetchPageRequest
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const HomepageComponent = (props: ConnectedProps<typeof connector>) => {
  console.log(props);

  useEffect(() => {
    props.getPage();
  }, [props.user]);

  return <Homepage />;
};

export default connector(HomepageComponent);
