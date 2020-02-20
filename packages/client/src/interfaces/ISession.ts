import { IFilm } from "./IFilm";
import { IHall } from "./IHall";

export interface ISession {
  dateTime: number;
  price: number;
  hall: IHall;
  film: IFilm;
  _id: string;
}

export type ISessionActionTypes =
  | "FETCH_SESSIONS_PENDING"
  | "FETCH_SESSIONS_SUCCESS"
  | "FETCH_SESSIONS_ERROR"
  | "FETCH_SESSIONS_REQUEST";

export interface ISessionsPayload {
  data: ISession[];
  error: Error | null;
  pending: boolean;
}
export interface ISessionAction {
  type: ISessionActionTypes;
  payload: ISessionsPayload;
}
