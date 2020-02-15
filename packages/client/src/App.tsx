import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/header/index";
import { Homepage } from "./pages/homepage";
import { AuthPage } from "./pages/authPage";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./app.sass";

M.AutoInit();

const App: React.FC = (props: any) => {
  return (
    <Router>
      {/* <Header /> */}

      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/">
          <Header />
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
