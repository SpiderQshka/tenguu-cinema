import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/header/index";
import HomepageContainer from "./containers/HomepageContainer";

import "materialize-css/dist/css/materialize.min.css";
// import M from "materialize-css";
import "./app.sass";

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
        <Route path="/">
          <Header />
          <HomepageContainer />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
