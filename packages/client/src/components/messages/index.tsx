import React from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { MessageProps } from "containers/MessageContainer";
import { useIntl } from "react-intl";

const TIME_BEFORE_MESSAGE_CLOSING = 4000;

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
          autoHideDuration={TIME_BEFORE_MESSAGE_CLOSING}
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
          autoHideDuration={4000}
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
          autoHideDuration={4000}
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
          autoHideDuration={6000}
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
          autoHideDuration={6000}
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
    default:
      return <></>;
  }
};
