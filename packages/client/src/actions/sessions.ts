import { ISession, ISessionsPayload } from "interfaces/ISession";
// Actions

export const FETCH_SESSIONS_PENDING = "FETCH_SESSIONS_PENDING";
export const FETCH_SESSIONS_SUCCESS = "FETCH_SESSIONS_SUCCESS";
export const FETCH_SESSIONS_ERROR = "FETCH_SESSIONS_ERROR";
export const FETCH_SESSIONS_REQUEST = "FETCH_SESSIONS_REQUEST";

// Action creators

export const fetchSessionsPending = () => {
  return {
    type: FETCH_SESSIONS_PENDING
  };
};

export const fetchSessionsSuccess = (data: ISession[]) => {
  return {
    type: FETCH_SESSIONS_SUCCESS,
    payload: {
      data
    } as ISessionsPayload
  };
};

export const fetchSessionsError = (error: Error) => {
  return {
    type: FETCH_SESSIONS_ERROR,
    payload: {
      error
    } as ISessionsPayload
  };
};

export const fetchSessionsRequest = () => {
  return {
    type: FETCH_SESSIONS_REQUEST
  };
};
