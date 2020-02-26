import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REG,
  USER_REG_ERROR,
  USER_LOGIN_ERROR
} from "actions/users";
import { IUserAction, IUser, IUserPayload } from "interfaces/IUser";

const initialState: IUserPayload | string = {
  pending: false,
  data: {} as IUser,
  error: null
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
        pending: false,
        error: null
      };
    case FETCH_USER_ERROR:
      console.log("Error", action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case USER_REG:
      console.log("User register", action.payload);
      return {
        ...state,
        data: {
          ...state.data,
          authToken: action.payload.data.authToken,
          _id: action.payload.data._id
        }
      };
    case USER_REG_ERROR:
      console.log("User register error", action.payload.error);
      return {
        ...state,
        error: action.payload.error
      };
    case USER_LOGIN:
      console.log("User login");
      return {
        ...state,
        data: {
          ...state.data,
          authToken: action.payload.data.authToken,
          _id: action.payload.data._id
        }
      };
    case USER_LOGIN_ERROR:
      console.log("User login error", action.payload.error);
      return {
        ...state,
        error: action.payload.error
      };
    case USER_LOGOUT:
      console.log("User logout");
      return {
        ...state,
        data: {
          ...state.data,
          authToken: null
        }
      };
    default:
      return state;
  }
};
