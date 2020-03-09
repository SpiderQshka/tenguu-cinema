import { ITicket } from "./ITicket";

export interface IUser {
  username: string;
  email: string;
  password: string;
  id: string;
  authToken?: string | null;
  tickets: ITicket[];
  photo: string;
  status: "admin" | "manager" | "default";
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
  | "USER_LOGIN_ERROR"
  | "FETCH_USERS"
  | "FETCH_USERS_PENDING"
  | "FETCH_USERS_ERROR"
  | "FETCH_USERS_REQUEST"
  | "FETCH_USERS_SUCCESS";

export interface IUserPayload {
  currentUser: IUser;
  error?: { code: number; message: string };
  currentUserPending: boolean;
}
export interface IUserAction {
  type: IUserActionTypes;
  payload: IUserPayload;
}
