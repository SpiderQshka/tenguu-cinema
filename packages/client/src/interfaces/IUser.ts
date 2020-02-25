export interface IUser {
  username: string;
  email: string;
  password: string;
  _id: string;
  error?: { code: number; message: string };
  authToken?: string | null;
}

export type IUserActionTypes =
  | "FETCH_USER_PENDING"
  | "FETCH_USER_SUCCESS"
  | "FETCH_USER_ERROR"
  | "FETCH_USER_REQUEST"
  | "USER_LOGIN"
  | "USER_LOGOUT"
  | "USER_REG";

export interface IUserPayload {
  data: IUser;
  error: { code: number; message: string } | null;
  pending: boolean;
  isAuthorized: boolean;
}
export interface IUserAction {
  type: IUserActionTypes;
  payload: IUserPayload;
}
