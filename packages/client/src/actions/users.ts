import { IUser } from "interfaces/IUser";
import { IUserAction } from "interfaces/IUser";

// Actions

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

// Action creators

export const fetchCurrentUserPending = () => {
  return {
    type: FETCH_USER_PENDING
  } as IUserAction;
};

export const fetchCurrentUserSuccess = (currentUser: IUser) => {
  return {
    type: FETCH_USER_SUCCESS,
    currentUser
  } as IUserAction;
};

export const fetchCurrentUserError = (error: Error) => {
  return {
    type: FETCH_USER_ERROR,
    error
  } as IUserAction;
};

export const fetchCurrentUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  } as IUserAction;
};
