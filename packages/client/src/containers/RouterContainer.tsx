import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";
import { IState } from "interfaces/IState";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ErrorpageContainer from "./ErrorpageContainer";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";
import { Homepage } from "pages/homepage";

const mapStateToProps = (state: IState) => {
  return {
    currentUserPending: state.users.currentUserPending,
    userStatus: state.users.currentUser.status,
    mainPagePending: state.mainPage.pending,
    mainPageError: state.mainPage.error,
    lang: state.lang.currentLang
  };
};

const connector = connect(mapStateToProps);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
      light: grey[50]
    },
    secondary: {
      main: grey[900]
    }
  }
});

function RouterContainer(props: ConnectedProps<typeof connector>) {
  const {
    mainPagePending,
    mainPageError,
    currentUserPending,
    userStatus
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {mainPagePending ? (
              <PageLoader />
            ) : mainPageError && mainPageError.code >= 500 ? (
              <Redirect to="/error" />
            ) : (
              <Homepage />
            )}
          </Route>
          <Route path="/admin">
            {currentUserPending ? (
              <PageLoader />
            ) : userStatus === "admin" ? (
              <AdminPage lang={props.lang} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/error">
            {mainPageError ? <ErrorpageContainer /> : <Redirect to="/" />}
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default connector(RouterContainer);
