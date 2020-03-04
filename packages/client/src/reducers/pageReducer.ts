import {
  FETCH_PAGE_ERROR,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_PENDING
} from "actions/page";
import { IMainPagePayload, IMainPageAction } from "interfaces/IPages";

const initialState: IMainPagePayload = {
  pending: true,
  error: null
};

export const pageReducer = (state = initialState, action: IMainPageAction) => {
  switch (action.type) {
    case FETCH_PAGE_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        pending: false
      };
    case FETCH_PAGE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
