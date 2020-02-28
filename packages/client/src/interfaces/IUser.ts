import { ITicket } from "./ITicket";

export interface IUser {
  username: string;
  email: string;
  password: string;
  _id: string;
  error?: { code: number; message: string };
  authToken?: string | null;
  tickets: ITicket[];
}

export type IUserActionTypes =
  | "FETCH_USER_PENDING"
  | "FETCH_USER_SUCCESS"
  | "FETCH_USER_ERROR"
  | "FETCH_USER_REQUEST"
  | "USER_LOGIN"
  | "USER_LOGOUT"
  | "USER_REG"
  | "USER_REG_ERROR"
  | "USER_LOGIN_ERROR";

export interface IUserPayload {
  data: IUser;
  error: string | null;
  pending: boolean;
}
export interface IUserAction {
  type: IUserActionTypes;
  payload: IUserPayload;
}
