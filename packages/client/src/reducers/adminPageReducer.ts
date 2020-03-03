import {
  FETCH_ADMIN_PAGE_ERROR,
  FETCH_ADMIN_PAGE_PENDING,
  FETCH_ADMIN_PAGE_SUCCESS
} from "actions/admin";

const initialState = {
  pending: true,
  error: null
};

export const AdminPageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ADMIN_PAGE_PENDING:
      console.log("Admin page Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_ADMIN_PAGE_SUCCESS:
      console.log("Admin page Success");
      return {
        ...state,
        pending: false
      };
    case FETCH_ADMIN_PAGE_ERROR:
      console.log("Admin page Error");
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
