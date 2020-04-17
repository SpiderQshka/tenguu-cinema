import {
  FETCH_SESSIONS_ERROR,
  FETCH_SESSIONS_PENDING,
  FETCH_SESSIONS_SUCCESS,
  CHANGE_ACTIVE_SESSION_FOR_BUYING,
} from "actions/sessions";
import {
  ISessionsPayload,
  ISession,
  ISessionAction,
} from "interfaces/ISession";

const initialState: ISessionsPayload = {
  pending: true,
  data: [] as ISession[],
  error: null,
};

export const sessionsReducer = (
  state = initialState,
  action: ISessionAction
) => {
  switch (action.type) {
    case FETCH_SESSIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_SESSIONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case FETCH_SESSIONS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    case CHANGE_ACTIVE_SESSION_FOR_BUYING:
      return {
        ...state,
        activeSessionForBuyingId: action.payload.activeSessionForBuyingId,
      };
    default:
      return state;
  }
};
