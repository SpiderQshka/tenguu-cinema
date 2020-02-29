import { connect } from "react-redux";

import { Header } from "components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";

const mapStateToProps = (state: IState) => state.user;

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Header);
