export interface IUser {
  username: string;
  email: string;
  password: string;
  _id: string;
}

export type IUserActionTypes =
  | "FETCH_USER_PENDING"
  | "FETCH_USER_SUCCESS"
  | "FETCH_USER_ERROR"
  | "FETCH_USER_REQUEST";

export interface IUserPayload {
  data: IUser;
  error: Error | null;
  pending: boolean;
  isAuthorized: boolean;
}
export interface IUserAction {
  type: IUserActionTypes;
  payload: IUserPayload;
}
