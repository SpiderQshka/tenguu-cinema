import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorpageContainer from "containers/pages/ErrorpageContainer";
import AdminPageContainer from "containers/pages/AdminpageContainer";
import HomepageContainer from "containers/pages/HomepageContainer";
import { config } from "config";
import "./app.sass";

const App: React.FC = () => (
  <ThemeProvider theme={config.theme}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomepageContainer />
        </Route>
        <Route path="/admin">
          <AdminPageContainer />
        </Route>
        <Route path="/error">
          <ErrorpageContainer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
