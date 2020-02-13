// Actions

export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

// Action creators

export const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING
  };
};

export const fetchUsersSuccess = (users: any) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  };
};

export const fetchUsersError = (error: Error) => {
  return {
    type: FETCH_USERS_ERROR,
    error
  };
};
