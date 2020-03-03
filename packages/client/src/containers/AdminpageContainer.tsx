import React, { useEffect } from "react";
import { connect } from "react-redux";

import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";
import { fetchAdminPageRequest } from "actions/admin";

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAdminPage: () => dispatch(fetchAdminPageRequest())
  };
};

const mapStateToProps = (state: IState) => state;

const connector = connect(mapStateToProps, mapDispatchToProps);

const AdminpageComponent = (props: any) => {
  useEffect(() => {
    props.getAdminPage();
  }, []);
  if (props.pending) return <PageLoader />;
  return <AdminPage {...props} />;
};

export default connector(AdminpageComponent);
