import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { MessageProps } from "containers/MessageContainer";
import { useIntl } from "react-intl";
import { config } from "config";

export const Message = (props: MessageProps) => {
  const intl = useIntl();
  switch (props.messageForShow?.name) {
    case "logout":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.logout",
            defaultMessage: "Logged out",
          })}
        ></Snackbar>
      );
    case "buyTicketPending":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.buyTicketPending",
            defaultMessage: "Sending request..",
          })}
        ></Snackbar>
      );
    case "buyTicketSuccess":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert severity="success">
            {intl.formatMessage({
              id: "homepage.messages.buyTicketSuccess",
              defaultMessage: "Ticket(s) bought",
            })}
          </Alert>
        </Snackbar>
      );
    case "buyTicketError":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert severity="error" variant="filled">
            {intl.formatMessage({
              id: "homepage.messages.buyTicketError",
              defaultMessage: "Error!",
            })}
          </Alert>
        </Snackbar>
      );
    case "deleteTicketPending":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.deleteTicketPending",
            defaultMessage: "Sending request...",
          })}
        ></Snackbar>
      );
    case "deleteTicketSuccess":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="success">
            {intl.formatMessage({
              id: "homepage.messages.deleteTicketSuccess",
              defaultMessage: "Deleted",
            })}
          </Alert>
        </Snackbar>
      );
    case "deleteTicketError":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="error">
            {intl.formatMessage({
              id: "homepage.messages.deleteTicketError",
              defaultMessage: "Error",
            })}
          </Alert>
        </Snackbar>
      );
    case "loginPending":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.loginPending",
            defaultMessage: "Sending request...",
          })}
        ></Snackbar>
      );
    case "loginError":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="error">
            {intl.formatMessage({
              id: "homepage.messages.loginError",
              defaultMessage: "Error!",
            })}
          </Alert>
        </Snackbar>
      );
    case "loginSuccess":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="success">
            {intl.formatMessage({
              id: "homepage.messages.login",
              defaultMessage: "Logged in",
            })}
          </Alert>
        </Snackbar>
      );
    case "registerPending":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.registerPending",
            defaultMessage: "Sending request...",
          })}
        ></Snackbar>
      );
    case "registerError":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="error">
            {intl.formatMessage({
              id: "homepage.messages.registerError",
              defaultMessage: "Error!",
            })}
          </Alert>
        </Snackbar>
      );
    case "registerSuccess":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="success">
            {intl.formatMessage({
              id: "homepage.messages.register",
              defaultMessage: "Regisered!",
            })}
          </Alert>
        </Snackbar>
      );
    case "sendMessagePending":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          onClose={() => props.hideMessage()}
          message={intl.formatMessage({
            id: "homepage.messages.sendMessagePending",
            defaultMessage: "Sending...",
          })}
        ></Snackbar>
      );
    case "sendMessageSuccess":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="success">
            {intl.formatMessage({
              id: "homepage.messages.sendMessageSuccess",
              defaultMessage: "Sended!",
            })}
          </Alert>
        </Snackbar>
      );
    case "sendMessageError":
      return (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={true}
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="error">
            {intl.formatMessage({
              id: "homepage.messages.sendMessageError",
              defaultMessage: "Error occured!",
            })}
          </Alert>
        </Snackbar>
      );
    default:
      return <></>;
  }
};
