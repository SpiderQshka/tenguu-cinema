import { connect, ConnectedProps } from "react-redux";

import { Message } from "components/messages";
import { IState } from "interfaces/IState";
import { hideMessage } from "actions/messages";

const mapStateToProps = (state: IState) => state.message;

const mapDispatchToProps = (dispatch: any) => {
  return {
    hideMessage: () => dispatch(hideMessage()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type MessageProps = ConnectedProps<typeof connector>;

export default connector(Message);
