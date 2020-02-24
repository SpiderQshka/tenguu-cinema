import { connect } from "react-redux";

import { Profile } from "components/header/Profile";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";

const mapStateToProps = (state: IState) => state.user;

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest())
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Profile);
