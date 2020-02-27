import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/header/index";
import HomepageContainer from "./containers/HomepageContainer";
import { AdminPage } from "./pages/adminpage";

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
          <Header />
          <HomepageContainer />
        </Route>
        <Route path="/admin">
          <Header />
          <AdminPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
