import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { IState } from "interfaces/IState";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: IState) => {
  return {
    pending: state.users.currentUserPending,
    isAdmin: state.users.currentUser.status === "admin"
  };
};

const AdminpageContainer = (props: AdminpageProps) =>
  props.pending ? (
    <PageLoader />
  ) : props.isAdmin ? (
    <AdminPage />
  ) : (
    <Redirect to="/" />
  );

const connector = connect(mapStateToProps);

export type AdminpageProps = ConnectedProps<typeof connector>;

export default connector(AdminpageContainer);
