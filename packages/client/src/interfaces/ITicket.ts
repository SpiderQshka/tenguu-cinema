import { IUser } from "./IUser";
import { ISession } from "./ISession";

export interface ITicket {
  id: string;
  session: string;
  user: string;
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
  | "BUY_TICKET_ERROR"
  | "DELETE_TICKET";

export interface ITicketsPayload {
  data: ITicket[];
  error: {
    message: string;
    code: number;
  } | null;
  pending: boolean;
  ticketForDeleteId?: string;
}
export interface ITicketsAction {
  type: ITicketsActionTypes;
  payload: ITicketsPayload;
}
