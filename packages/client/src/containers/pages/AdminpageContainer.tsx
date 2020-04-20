import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";
import { Redirect, useHistory } from "react-router-dom";

const mapStateToProps = (state: IState) => {
  return {
    pending: state.users.currentUserPending,
    isAdminOrManager:
      state.users.currentUser.status === "admin" ||
      state.users.currentUser.status === "manager",
  };
};

const AdminpageContainer = (props: AdminpageProps) => {
  const history = useHistory();
  return props.pending ? (
    <PageLoader />
  ) : props.isAdminOrManager ? (
    <AdminPage history={history} />
  ) : (
    <Redirect to="/" />
  );
};

const connector = connect(mapStateToProps);

export type AdminpageProps = ConnectedProps<typeof connector>;

export default connector(AdminpageContainer);
