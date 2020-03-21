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
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage, FormattedDate } from "react-intl";
import { ITicket } from "interfaces/ITicket";
import { ISession } from "interfaces/ISession";
import { IUser } from "interfaces/IUser";
import { Typography } from "@material-ui/core/";

export interface IUserTicketsModal {
  isModalOpen: boolean;
  sessions: ISession[];
  tickets: ITicket[];
  user: IUser;
  closeModal: () => void;
  deleteTicket: (id: string) => void;
}

export const UserTicketsModal = (props: IUserTicketsModal) => {
  return (
    <Dialog onClose={props.closeModal} open={props.isModalOpen} scroll="body">
      <DialogTitle>
        <FormattedMessage
          id="homepage.header.profile.tickets"
          defaultMessage="My Tickets"
        />
      </DialogTitle>
      <DialogContent dividers>
        {!props.tickets[0] ? (
          <Typography variant="h6" className={styles.noTicketsWarningText}>
            <FormattedMessage
              id="homepage.modal.userTicketsModal.noTicketsWarning"
              defaultMessage="No tickets"
            />
          </Typography>
        ) : (
          <List>
            {props.tickets &&
              props.tickets.map(ticket => {
                const currentSession = props.sessions.filter(
                  (session: ISession) => ticket.session === session.id
                )[0];
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <i
                        className={`fas fa-ticket-alt ${styles.ticketIcon}`}
                      ></i>
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
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => props.deleteTicket(ticket.id)}
                      >
                        <i
                          className={`fas fa-trash-alt ${styles.deleteTicketIcon}`}
                        ></i>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
          </List>
        )}
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
