import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderContainer from "./containers/HeaderContainer";
import HomepageContainer from "./containers/HomepageContainer";
import AdminpageContainer from "./containers/AdminpageContainer";
import ErrorpageContainer from "./containers/ErrorpageContainer";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./app.sass";

M.AutoInit();

const App: React.FC = (props: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeaderContainer />
          <HomepageContainer />
        </Route>
        <Route path="/admin">
          <AdminpageContainer />
        </Route>
        <Route path="/error">
          <ErrorpageContainer />
        </Route>
        <Route path="*">
          <HeaderContainer />
          <HomepageContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
