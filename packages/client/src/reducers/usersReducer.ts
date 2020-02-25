import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REG
} from "actions/users";
import { IUserAction, IUser, IUserPayload } from "interfaces/IUser";

const initialState: IUserPayload | string = {
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
      const isAuthorized =
        !action.payload.data.error || action.payload.data.error.code !== 401
          ? true
          : false;
      return {
        ...state,
        data: action.payload.data,
        isAuthorized,
        pending: false
      };
    case FETCH_USER_ERROR:
      console.log("Error", action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case USER_REG:
      console.log("User register");
      return {
        ...state,
        isAuthorized: true,
        data: {
          ...state.data,
          authToken: action.payload.data.authToken,
          _id: action.payload.data._id
        }
      };
    case USER_LOGIN:
      console.log("User login");
      return {
        ...state,
        isAuthorized: true,
        data: {
          ...state.data,
          authToken: action.payload.data.authToken,
          _id: action.payload.data._id
        }
      };
    case USER_LOGOUT:
      console.log("User logout");
      return {
        ...state,
        isAuthorized: false,
        data: {
          ...state.data,
          authToken: null
        }
      };
    default:
      return state;
  }
};
