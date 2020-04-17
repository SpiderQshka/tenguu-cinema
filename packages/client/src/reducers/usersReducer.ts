import {
  FETCH_USER_PENDING,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REG,
  USER_REG_ERROR,
  USER_LOGIN_ERROR,
} from "actions/users";
import { IUserAction, IUser, IUserPayload } from "interfaces/IUser";

const initialState: IUserPayload = {
  currentUserPending: true,
  currentUser: {} as IUser,
  error: null,
};

export const usersReducer = (state = initialState, action: IUserAction) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        currentUserPending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.currentUser,
        currentUserPending: false,
        error: null,
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        currentUserPending: false,
      };
    case USER_REG:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          authToken: action.payload.currentUser.authToken,
          id: action.payload.currentUser.id,
        },
        error: null,
        currentUserPending: true,
      };
    case USER_REG_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case USER_LOGIN:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          authToken: action.payload.currentUser.authToken,
          id: action.payload.currentUser.id,
        },
        currentUserPending: true,
        error: null,
      };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case USER_LOGOUT:
      return {
        ...state,
        currentUser: {},
        error: null,
        currentUserPending: false,
      };
    default:
      return state;
  }
};
