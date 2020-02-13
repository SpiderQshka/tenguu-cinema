import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/users";

const initialState = {
  pending: false,
  users: [],
  error: null
};

export const usersReducer = (
  state = initialState,
  action: { type: string; users?: any; error?: Error }
) => {
  switch (action.type) {
    case FETCH_USERS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_USERS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        users: action.users
      };
    case FETCH_USERS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export const getUsers = (state: any) => state.users;
export const getUsersPending = (state: any) => state.users;
export const getUsersError = (state: any) => state.users;
