import { connect, ConnectedProps } from "react-redux";

import { Footer } from "pages/homepage/components/footer";
import { IState } from "interfaces/IState";
import { showMessage } from "actions/messages";

const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessageRequest: () =>
      dispatch(showMessage({ name: "sendMessagePending" })),
    sendMessageSuccess: () =>
      dispatch(showMessage({ name: "sendMessageSuccess" })),
    sendMessageError: () => dispatch(showMessage({ name: "sendMessageError" })),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type FooterProps = ConnectedProps<typeof connector>;

export default connector(Footer);
