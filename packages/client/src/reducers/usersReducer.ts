import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REG,
  USER_REG_ERROR,
  USER_LOGIN_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  FETCH_USERS_PENDING
} from "actions/users";
import { IUserAction, IUser, IUserPayload } from "interfaces/IUser";

const initialState: IUserPayload | string = {
  pending: true,
  data: [] as IUser[],
  currentUser: {} as IUser
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
        currentUser: action.payload.currentUser,
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
    case FETCH_USERS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_USERS_ERROR:
      console.log("Error", action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case FETCH_USERS_SUCCESS:
      console.log("users Success");
      return {
        ...state,
        pending: false,
        error: null,
        data: action.payload.data
      };
    case USER_REG:
      console.log("User register", action.payload);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          authToken: action.payload.currentUser.authToken,
          _id: action.payload.currentUser._id
        },
        error: null,
        pending: true
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
        currentUser: {
          ...state.currentUser,
          authToken: action.payload.currentUser.authToken,
          _id: action.payload.currentUser._id
        },
        pending: true,
        error: null
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
        currentUser: {},
        data: [],
        error: null,
        pending: false
      };
    default:
      return state;
  }
};
