import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderContainer from "./containers/HeaderContainer";
import HomepageContainer from "./containers/HomepageContainer";
import AdminpageContainer from "./containers/AdminpageContainer";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./app.sass";

M.AutoInit();
document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);
});

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
        <Route path="*">
          <HeaderContainer />
          <HomepageContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
