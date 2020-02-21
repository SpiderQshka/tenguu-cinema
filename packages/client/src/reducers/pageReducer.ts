import {
  FETCH_PAGE_ERROR,
  FETCH_PAGE_SUCCESS,
  FETCH_PAGE_PENDING
} from "actions/page";
// import {
//   ISessionsPayload,
//   ISession,
//   ISessionAction
// } from "interfaces/ISession";

const initialState = {
  pending: false,
  error: null
};

export const pageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PAGE_PENDING:
      console.log("Page Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_PAGE_SUCCESS:
      console.log("Page Success");
      return {
        ...state,
        pending: false
      };
    case FETCH_PAGE_ERROR:
      console.log("Page Error");
      return {
        ...state,
        pending: false
      };
    default:
      return state;
  }
};
