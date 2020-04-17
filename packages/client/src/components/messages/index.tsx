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
        >
          <Alert variant="filled" severity="warning">
            {intl.formatMessage({
              id: "homepage.messages.logout",
              defaultMessage: "Logged out",
            })}
          </Alert>
        </Snackbar>
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
              defaultMessage: "Ticket(s) bought",
            })}
          </Alert>
        </Snackbar>
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
          <Alert variant="filled" severity="warning">
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
    case "login":
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
    case "register":
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
          autoHideDuration={config.timeBeforeMessageClosing}
          onClose={() => props.hideMessage()}
        >
          <Alert variant="filled" severity="warning">
            {intl.formatMessage({
              id: "homepage.messages.sendMessagePending",
              defaultMessage: "Sending...",
            })}
          </Alert>
        </Snackbar>
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
