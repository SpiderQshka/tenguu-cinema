import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "./components/header/index";
import { Homepage } from "./components/homepage/index";

import "bootstrap/dist/css/bootstrap.min.css";

import "./app.sass";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
      <Switch>
        <Route path="/about">
          <h1>about</h1>
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
