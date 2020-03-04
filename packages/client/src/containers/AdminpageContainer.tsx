import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";
import { fetchAdminPageRequest, changeCurrentTab } from "actions/admin";
import { TabsType } from "interfaces/IPages";

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAdminPage: () => dispatch(fetchAdminPageRequest()),
    changeTab: (tab: TabsType) => dispatch(changeCurrentTab(tab))
  };
};

const mapStateToProps = (state: IState) => state;

const connector = connect(mapStateToProps, mapDispatchToProps);

const AdminpageComponent = (props: ConnectedProps<typeof connector>) => {
  useEffect(() => {
    props.getAdminPage();
  }, []);
  if (props.adminPage.pending) return <PageLoader />;
  return <AdminPage {...props} />;
};

export default connector(AdminpageComponent);
