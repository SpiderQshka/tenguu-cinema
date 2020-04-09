import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorpageContainer from "containers/pages/ErrorpageContainer";
import AdminPageContainer from "containers/pages/AdminpageContainer";
import HomepageContainer from "containers/pages/HomepageContainer";
import "./app.sass";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
      light: grey[50],
      contrastText: grey[50],
    },
    secondary: {
      main: grey[900],
    },
  },
});

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
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
