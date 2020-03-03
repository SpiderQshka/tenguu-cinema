import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";
import { PageLoader } from "components/loader";

function AdminRoute({ children, ...rest }: any) {
  const {
    users: {
      currentUser: { status },
      pending
    }
  } = rest;
  if (!status) return <PageLoader />;
  return (
    <Route
      {...rest}
      render={() => (status === "admin" ? children : <Redirect to="/" />)}
    />
  );
}

const connector = connect();

export default connector(AdminRoute);
