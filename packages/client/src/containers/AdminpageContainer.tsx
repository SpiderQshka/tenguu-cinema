import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchPageInfo } from "sagas/page";

import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";

const mapStateToProps = (state: IState) => state.mainPage;
const mapDispatchToProps = (dispatch: any) => {
  return {
    getPage: fetchPageInfo
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

const AdminpageComponent = (props: ConnectedProps<typeof connector>) => {
  useEffect(() => {
    props.getPage();
  }, []);

  if (!props.pending) return <AdminPage />;

  return <PageLoader />;
};

export default connector(AdminpageComponent);
