import { ISession } from "./ISession";

export interface ITicket {
  session: ISession;
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
  | "FETCH_TICKETS_REQUEST";

export interface ITicketsPayload {
  data: ITicket[];
  error: string | null;
  pending: boolean;
}
export interface ITicketsAction {
  type: ITicketsActionTypes;
  payload: ITicketsPayload;
}
