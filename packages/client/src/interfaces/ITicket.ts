import { ISession } from "./ISession";
import { IUser } from "./IUser";

export interface ITicket {
  session: ISession;
  user: IUser;
  seat: {
    row: number;
    seatNumber: number;
  };
  status: string;
}

export type ITicketActionTypes =
  | "FETCH_TICKETS_PENDING"
  | "FETCH_TICKETS_SUCCESS"
  | "FETCH_TICKETS_ERROR"
  | "FETCH_TICKETS_REQUEST";

export interface ITicketPayload {
  data: ITicket;
  error: string | null;
  pending: boolean;
}
export interface IUserAction {
  type: ITicketActionTypes;
  payload: ITicketPayload;
}
