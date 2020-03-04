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
  dataPending: false,
  currentUserPending: false,
  data: [] as IUser[],
  currentUser: {} as IUser
};

export const usersReducer = (state = initialState, action: IUserAction) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      console.log("Pending");
      return {
        ...state,
        currentUserPending: true
      };
    case FETCH_USER_SUCCESS:
      console.log("Success");
      return {
        ...state,
        currentUser: action.payload.currentUser,
        currentUserPending: false,
        error: null
      };
    case FETCH_USER_ERROR:
      console.log("Error", action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        currentUserPending: false
      };
    case FETCH_USERS_PENDING:
      console.log("Pending");
      return {
        ...state,
        dataPending: true
      };
    case FETCH_USERS_ERROR:
      console.log("Error", action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        dataPending: false
      };
    case FETCH_USERS_SUCCESS:
      console.log("users Success");
      return {
        ...state,
        dataPending: false,
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
        currentUserPending: true
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
        currentUserPending: true,
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
        currentUserPending: false
      };
    default:
      return state;
  }
};
