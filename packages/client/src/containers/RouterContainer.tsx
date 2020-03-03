import React from "react";
import { connect, ConnectedProps } from "react-redux";

import { IState } from "interfaces/IState";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import HomepageContainer from "./HomepageContainer";
import AdminRoute from "routes/Admin";
import AdminpageContainer from "./AdminpageContainer";
import ErrorpageContainer from "./ErrorpageContainer";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users
  };
};

const connector = connect(mapStateToProps);

function RouterContainer(props: ConnectedProps<typeof connector>) {
  console.log(props);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderContainer />
          <HomepageContainer />
        </Route>
        <AdminRoute {...props} path="/admin">
          <AdminpageContainer />
        </AdminRoute>
        <Route path="/error">
          <ErrorpageContainer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connector(RouterContainer);
