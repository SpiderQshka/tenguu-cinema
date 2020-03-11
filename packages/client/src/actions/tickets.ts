import { ITicket } from "interfaces/ITicket";

// Actions

export const FETCH_TICKETS_REQUEST = "FETCH_TICKETS_REQUEST";
export const FETCH_TICKETS_PENDING = "FETCH_TICKETS_PENDING";
export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR";
export const BUY_TICKET_REQUEST = "BUY_TICKET_REQUEST";
export const BUY_TICKET = "BUY_TICKET";
export const BUY_TICKET_ERROR = "BUY_TICKET_ERROR";

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

export const buyTicketRequest = (data: JSON) => {
  return {
    type: BUY_TICKET_REQUEST,
    payload: {
      data
    }
  };
};

export const buyTicket = (data: any) => {
  return {
    type: BUY_TICKET,
    payload: {
      data
    }
  };
};

export const buyTicketError = (error: Error) => {
  return {
    type: BUY_TICKET_ERROR,
    payload: {
      error
    }
  };
};
