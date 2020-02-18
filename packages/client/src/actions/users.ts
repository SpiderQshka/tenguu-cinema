// Actions

export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";

// Action creators

export const fetchCurrentUserPending = () => {
  return {
    type: FETCH_USER_PENDING
  };
};

export const fetchCurrentUserSuccess = (currentUser: any) => {
  return {
    type: FETCH_USER_SUCCESS,
    currentUser
  };
};

export const fetchCurrentUserError = (error: Error) => {
  return {
    type: FETCH_USER_ERROR,
    error
  };
};

export const fetchCurrentUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};
