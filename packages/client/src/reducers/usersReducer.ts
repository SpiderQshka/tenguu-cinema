import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from "actions/users";
import { IUserAction, IUser, IUserPayload } from "interfaces/IUser";

const initialState: IUserPayload = {
  pending: false,
  data: {} as IUser,
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
        data: action.payload.data,
        isAuthorized: true,
        pending: false
      };
    case FETCH_USER_ERROR:
      console.log("Error");

      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    default:
      return state;
  }
};
