import { IFilm } from "./IFilm";
import { IHall } from "./IHall";

export interface ISession {
  dateTime: number;
  price: number;
  hall: IHall;
  film: IFilm;
  id: string;
}

export type ISessionActionTypes =
  | "FETCH_SESSIONS_PENDING"
  | "FETCH_SESSIONS_SUCCESS"
  | "FETCH_SESSIONS_ERROR"
  | "FETCH_SESSIONS_REQUEST"
  | "CHANGE_ACTIVE_SESSION_FOR_BUYING";

export interface ISessionsPayload {
  data: ISession[];
  error: Error | null;
  pending: boolean;
  activeSessionForBuyingId?: string;
}
export interface ISessionAction {
  type: ISessionActionTypes;
  payload: ISessionsPayload;
}
