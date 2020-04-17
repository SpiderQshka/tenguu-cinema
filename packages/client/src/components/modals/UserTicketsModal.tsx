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
  IconButton,
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import { ITicket } from "interfaces/ITicket";
import { ISession } from "interfaces/ISession";
import { IUser } from "interfaces/IUser";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export interface IUserTicketsModal {
  isModalOpen: boolean;
  sessions: ISession[];
  tickets: ITicket[];
  user: IUser;
  closeModal: () => void;
  deleteTicket: (id: string) => void;
}

export const UserTicketsModal = (props: IUserTicketsModal) => {
  const intl = useIntl();
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
          <Typography
            variant="overline"
            className={styles.noTicketsWarningText}
          >
            <FormattedMessage
              id="homepage.modal.userTicketsModal.noTicketsWarning"
              defaultMessage="No tickets"
            />
          </Typography>
        ) : (
          <List>
            {props.tickets &&
              props.tickets.map((ticket) => {
                const currentSession = props.sessions.filter(
                  (session: ISession) => ticket.session === session.id
                )[0];
                return (
                  <ListItem>
                    <ListItemAvatar>
                      <FontAwesomeIcon
                        icon={faTicketAlt}
                        className={styles.ticketIcon}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      className={styles.userTicket}
                      primary={
                        <div className={styles.ticketDataContainer}>
                          <div className={styles.ticketDataItem}>
                            <Typography variant="h6">
                              <FormattedMessage id="homepage.modal.userTicketsModal.film" />
                              :
                            </Typography>
                            <FormattedMessage
                              id={
                                currentSession.film
                                  ? currentSession.film.name
                                  : ""
                              }
                            />
                          </div>
                          <div className={styles.ticketDataItem}>
                            <Typography variant="h6">
                              <FormattedMessage
                                id="homepage.modal.userTicketsModal.hall"
                                defaultMessage="Hall"
                              />
                              :
                            </Typography>
                            <FormattedMessage
                              id={
                                currentSession.hall
                                  ? currentSession.hall.name
                                  : ""
                              }
                            />
                          </div>
                          <div className={styles.ticketDataItem}>
                            <Typography variant="h6">
                              <FormattedMessage
                                id="homepage.modal.userTicketsModal.seat"
                                defaultMessage="Seat"
                              />
                              :
                            </Typography>
                            {`${intl.formatMessage({
                              id: "homepage.modal.userTicketsModal.row",
                            })} ${ticket.seat.row}, ${intl.formatMessage({
                              id: "homepage.modal.userTicketsModal.seatNumber",
                            })} ${ticket.seat.seatNumber}`}
                          </div>
                          <div className={styles.ticketDataItem}>
                            <Typography variant="h6">
                              <FormattedMessage
                                id="homepage.modal.userTicketsModal.ticketCost"
                                defaultMessage="Cost"
                              />
                              :
                            </Typography>
                            {currentSession.price}$
                          </div>
                        </div>
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
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                          className={styles.deleteTicketIcon}
                        />
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
