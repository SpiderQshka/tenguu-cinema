import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, grey } from "@material-ui/core/colors";
import { IState } from "interfaces/IState";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import HomepageContainer from "./HomepageContainer";
import ErrorpageContainer from "./ErrorpageContainer";
import { PageLoader } from "components/loader";
import { AdminPage } from "pages/adminpage";

const mapStateToProps = (state: IState) => {
  return {
    currentUserPending: state.users.currentUserPending,
    userStatus: state.users.currentUser.status,
    mainPagePending: state.mainPage.pending,
    mainPageError: state.mainPage.error
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
    currentUserPending,
    mainPageError,
    userStatus
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HeaderContainer />
            {mainPagePending ? (
              <PageLoader />
            ) : mainPageError ? (
              <Redirect to="/error" />
            ) : (
              <HomepageContainer />
            )}
          </Route>
          <Route path="/admin">
            {/* {currentUserPending ? (
              <PageLoader />
            ) : userStatus === "admin" ? ( */}
            <AdminPage />
            {/* ) : (
              <Redirect to="/" />
            )} */}
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
