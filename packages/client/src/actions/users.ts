import { IUser, IUserPayload } from "interfaces/IUser";

// Actions

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

// Action creators

export const fetchCurrentUserPending = () => {
  return {
    type: FETCH_USER_PENDING
  };
};

export const fetchCurrentUserSuccess = (currentUser: IUser) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      data: currentUser
    } as IUserPayload
  };
};

export const fetchCurrentUserError = (error: any) => {
  return {
    type: FETCH_USER_ERROR,
    payload: {
      error
    } as IUserPayload
  };
};

export const fetchCurrentUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const addUserToken = (authToken: string) => {
  return {
    type: USER_LOGIN,
    payload: authToken
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};
