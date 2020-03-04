import {
  FETCH_ADMIN_PAGE_ERROR,
  FETCH_ADMIN_PAGE_PENDING,
  FETCH_ADMIN_PAGE_SUCCESS,
  CHANGE_CURRENT_TAB
} from "actions/admin";
import { IAdminPageAction, IAdminPagePayload } from "interfaces/IPages";

const initialState: IAdminPagePayload = {
  pending: true,
  error: null,
  currentTab: "users"
};

export const AdminPageReducer = (
  state = initialState,
  action: IAdminPageAction
) => {
  switch (action.type) {
    case FETCH_ADMIN_PAGE_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_ADMIN_PAGE_SUCCESS:
      return {
        ...state,
        pending: false
      };
    case FETCH_ADMIN_PAGE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      };
    case CHANGE_CURRENT_TAB:
      return {
        ...state,
        currentTab: action.payload.currentTab
      };
    default:
      return state;
  }
};
