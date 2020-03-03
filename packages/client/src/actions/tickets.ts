import { ITicket } from "interfaces/ITicket";

// Actions

export const FETCH_TICKETS_REQUEST = "FETCH_TICKETS_REQUEST";
export const FETCH_TICKETS_PENDING = "FETCH_TICKETS_PENDING";
export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR";

// Action creators

export const fetchTicketsRequest = () => {
  return {
    type: FETCH_TICKETS_REQUEST
  };
};

export const fetchTicketsPending = () => {
  return {
    type: FETCH_TICKETS_PENDING
  };
};

export const fetchTicketsSuccess = (tickets: ITicket[]) => {
  return {
    type: FETCH_TICKETS_SUCCESS,
    payload: {
      data: tickets
    }
  };
};

export const fetchTicketsError = (error: Error) => {
  return {
    type: FETCH_TICKETS_ERROR,
    payload: {
      error
    }
  };
};
