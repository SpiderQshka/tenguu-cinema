import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage, FormattedDate } from "react-intl";
import { ITicket } from "interfaces/ITicket";
import { ISession } from "interfaces/ISession";

export const UserTicketsModal = (props: any) => {
  return (
    <Dialog
      onClose={props.closeModal}
      open={props.modals.isUserTicketsModalOpen}
    >
      <DialogTitle>
        <FormattedMessage
          id="homepage.header.profile.tickets"
          defaultMessage="My Tickets"
        />
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {props.tickets &&
            props.tickets.map((ticket: ITicket, i: number) => {
              const currentSession = props.sessions.filter(
                (session: ISession) => ticket.session === session.id
              )[0];
              return (
                <ListItem>
                  <ListItemAvatar>
                    <i className="fas fa-ticket-alt"></i>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <>
                        "<FormattedMessage id={currentSession.film.name} />
                        ";{" "}
                        <FormattedMessage
                          id="homepage.modal.userTicketsModal.hall"
                          defaultMessage="Hall"
                        />{" "}
                        "<FormattedMessage id={currentSession.hall.name} />
                        ",{" "}
                        <FormattedMessage
                          id="homepage.modal.userTicketsModal.row"
                          defaultMessage="Row"
                        />{" "}
                        {ticket.seat.row},{" "}
                        <FormattedMessage
                          id="homepage.modal.userTicketsModal.seatNumber"
                          defaultMessage="Seat"
                        />{" "}
                        {ticket.seat.seatNumber}
                      </>
                    }
                    secondary={
                      <FormattedDate
                        value={new Date(currentSession.dateTime)}
                        year="numeric"
                        month="long"
                        day="2-digit"
                        hour12={true}
                      />
                    }
                  ></ListItemText>
                </ListItem>
              );
            })}
        </List>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.closeModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          <FormattedMessage id="homepage.modal.close" defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};
