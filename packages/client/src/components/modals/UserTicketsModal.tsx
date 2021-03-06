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
  Divider,
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage, FormattedDate, useIntl } from "react-intl";
import { ISession } from "interfaces/ISession";
import { Typography } from "@material-ui/core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { UserTicketsModalProps } from "containers/modals/UserTicketsModalContainer";
import { CenterLoader } from "components/loader";

export const UserTicketsModal = (props: UserTicketsModalProps) => {
  const intl = useIntl();
  const areTicketsPending = props.ticketsPending;
  const areSessionsPending = props.sessionsPending;
  return (
    <Dialog onClose={props.closeModal} open={props.isModalOpen} scroll="body">
      <DialogTitle>
        <FormattedMessage
          id="homepage.header.profile.tickets"
          defaultMessage="My Tickets"
        />
      </DialogTitle>
      <DialogContent dividers>
        {areTicketsPending ? (
          <CenterLoader />
        ) : !props.tickets.length ? (
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
            {areSessionsPending ? (
              <CenterLoader />
            ) : (
              props.tickets &&
              props.tickets.map((ticket, i) => {
                const currentSession = props.sessions.filter(
                  (session: ISession) => ticket.session === session.id
                )[0];
                return (
                  <>
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
                                id:
                                  "homepage.modal.userTicketsModal.seatNumber",
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
                    {props.tickets.length !== i + 1 && (
                      <Divider component="li" />
                    )}
                  </>
                );
              })
            )}
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
