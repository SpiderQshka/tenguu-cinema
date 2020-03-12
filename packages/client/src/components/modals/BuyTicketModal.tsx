import React, { FormEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { ISession } from "interfaces/ISession";
import { IFilm } from "interfaces/IFilm";
import date from "date-and-time";
import { IHall } from "interfaces/IHall";
import { ITicketsPayload } from "interfaces/ITicket";
import { FormattedMessage, FormattedDate } from "react-intl";

interface IBuyTicketModal {
  currentFilm: IFilm;
  currentSession: ISession;
  isBuyTicketModalOpen: boolean;
  sessions: ISession[];
  halls: IHall[];
  tickets: ITicketsPayload;
  buyTicket: (data: any) => void;
  changeActiveSession: (id: string) => void;
  closeModalRequest: () => void;
  closeModal: () => void;
}

export const BuyTicketModal = (props: IBuyTicketModal) => {
  const handleSessionChange = (e: any) => {
    props.changeActiveSession(e.target.value as string);
  };
  const renderHallScheme = (rows: number, columns: number) => {
    let result = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(null);
      }
      result.push(row);
    }
    const elements = result.map((row, i) => {
      const result = row.map((el, j) => {
        const isSeatTaken = props.tickets.data.some(
          ticket =>
            ticket.seat.row === i + 1 &&
            ticket.seat.seatNumber === j + 1 &&
            ticket.sessionId === props.currentSession.id
        );
        return (
          <label className={styles.seatLabel} key={`${i}-${j}`}>
            <input
              type="radio"
              name="seat"
              required
              className={`${styles.seatInput} ${isSeatTaken && styles.taken}`}
              value={`${i}-${j}`}
            />
          </label>
        );
      });
      return (
        <div className={styles.row} key={i}>
          <Typography variant="overline" className={styles.rowNumber}>
            {i + 1}
          </Typography>
          {result}
        </div>
      );
    });
    return (
      <div className={styles.hallScheme}>
        <Typography variant="h6">
          <FormattedMessage
            id="homepage.modal.buyTicket.chooseSeat"
            defaultMessage="Choose a seat"
          />
        </Typography>
        {elements}
      </div>
    );
  };
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    let object: any = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    object.userId = window.localStorage.getItem("userId");
    object.seat = {
      row: +object.seat.slice(0, object.seat.indexOf("-")) + 1,
      seatNumber: +object.seat.slice(object.seat.indexOf("-") + 1) + 1
    };
    const json = JSON.stringify(object);

    await props.buyTicket(json);

    props.closeModalRequest();
  };
  const areSessionsExists =
    props.currentFilm &&
    props.sessions.some(session => session.film.id === props.currentFilm.id);
  return (
    <Dialog scroll="body" open={props.isBuyTicketModalOpen}>
      <DialogTitle>
        <FormattedMessage
          id="homepage.modal.buyTicket.title"
          defaultMessage="Buy ticket"
        />
        <Typography variant="h6">
          {props.currentFilm && `"${props.currentFilm.name}"`}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        {(props.tickets.error || !areSessionsExists) && (
          <Typography variant="overline" className={styles.errorMsg}>
            <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
            {!areSessionsExists ? (
              <FormattedMessage
                id="homepage.modal.buyTicket.noSessionsError"
                defaultMessage="Whops, film doesn't have any sessions yet"
              />
            ) : (
              props.tickets.error?.message
            )}
          </Typography>
        )}
        {props.currentFilm &&
          props.sessions.some(
            session => session.film.id === props.currentFilm.id
          ) && (
            <form
              name="form"
              id="form"
              className={styles.form}
              onSubmit={submitHandler}
            >
              <FormControl fullWidth required>
                <InputLabel htmlFor="sessionId">
                  <FormattedMessage
                    id="homepage.modal.buyTicket.date"
                    defaultMessage="Date of the session"
                  />
                </InputLabel>
                <Select
                  value={props.currentSession ? props.currentSession.id : ""}
                  id="session"
                  name="sessionId"
                  className={styles.input}
                  onChange={handleSessionChange}
                >
                  {props.sessions
                    .filter(session => session.film.id === props.currentFilm.id)
                    .map(session => (
                      <MenuItem value={session.id} key={session.id}>
                        <FormattedDate
                          value={new Date(session.dateTime)}
                          year="numeric"
                          month="long"
                          day="2-digit"
                          hour12={true}
                        />
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl>
                {props.currentSession &&
                  renderHallScheme(
                    props.currentSession.hall.numberOfRows,
                    props.currentSession.hall.seatsOnRow
                  )}
              </FormControl>
            </form>
          )}
      </DialogContent>
      <DialogActions>
        {props.currentFilm &&
          props.sessions.some(
            session => session.film.id === props.currentFilm.id
          ) && (
            <Button
              type="submit"
              form="form"
              value="Submit"
              autoFocus
              color="primary"
              className={styles.submitBtn}
            >
              <FormattedMessage
                id="homepage.modal.submit"
                defaultMessage="Submit"
              />
            </Button>
          )}

        <Button
          onClick={() => {
            props.closeModal();
            props.changeActiveSession("");
          }}
          color="secondary"
          className={styles.closeModalBtn}
        >
          <FormattedMessage id="homepage.modal.close" defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};
