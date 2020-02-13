import React, { useEffect, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Header } from "./components/header/index";
import { Homepage } from "./components/homepage/index";

import "materialize-css/dist/css/materialize.min.css";

import "./app.sass";

import {
  fetchFilmsError,
  fetchFilmsPending,
  fetchFilmsSuccess
} from "./actions/films";

const fetchFilms = async (dispatch: Function) => {
  dispatch(fetchFilmsPending());
  return fetch("/api/films")
    .then(res => res.json())
    .then(data => dispatch(fetchFilmsSuccess(data)))
    .catch(error => dispatch(fetchFilmsError(error)));
};

const App: React.FC = (props: any) => {
  console.log(props);
  const fetchThings = useCallback(async () => {
    await fetchFilms(props.dispatch);
  }, [props.dispatch]);
  useEffect(() => {
    fetchThings();
  }, [fetchThings]);
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
          {" "}
          <Homepage />{" "}
        </Route>
      </Switch>
    </Router>
  );
};

export default connect((state: any) => {
  // console.log(state);

  return state;
})(App);
