import {
  FETCH_USERS_PENDING,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "../actions/users";
import { IUser } from "../interfaces/IUser";

const initialState = {
  pending: false,
  users: [],
  currentUser: {} as IUser,
  error: null
};

export const usersReducer = (
  state = initialState,
  action: { type: string; users?: any; currentUser: IUser; error?: Error }
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
        currentUser: action.users
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

export const getCurrentUser = (state: any): IUser => state;
