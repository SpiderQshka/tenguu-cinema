import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from "actions/users";
import { IUserAction, IUser } from "interfaces/IUser";

const initialState: IUserAction = {
  type: FETCH_USER_PENDING,
  pending: false,
  currentUser: {} as IUser,
  error: null,
  isAuthorized: false
};

export const usersReducer = (state = initialState, action: IUserAction) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };

    case FETCH_USER_SUCCESS:
      console.log("Success");
      return {
        ...state,
        currentUser: action.currentUser,
        isAuthorized: true,
        pending: false
      };
    case FETCH_USER_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.error,
        pending: false
      };
    default:
      return state;
  }
};
