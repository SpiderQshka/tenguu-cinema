import { ISession } from "./ISession";

export interface ITicket {
  session: ISession;
  sessionId: string;
  userId: string;
  seat: {
    row: number;
    seatNumber: number;
  };
  status: string;
}

export type ITicketsActionTypes =
  | "FETCH_TICKETS_PENDING"
  | "FETCH_TICKETS_SUCCESS"
  | "FETCH_TICKETS_ERROR"
  | "FETCH_TICKETS_REQUEST"
  | "BUY_TICKET"
  | "BUY_TICKET_ERROR";

export interface ITicketsPayload {
  data: ITicket[];
  error?: {
    message: string;
    code: number;
  };
  pending: boolean;
}
export interface ITicketsAction {
  type: ITicketsActionTypes;
  payload: ITicketsPayload;
}
