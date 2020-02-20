import {
  FETCH_SESSIONS_ERROR,
  FETCH_SESSIONS_PENDING,
  FETCH_SESSIONS_SUCCESS
} from "actions/sessions";
import {
  ISessionsPayload,
  ISession,
  ISessionAction
} from "interfaces/ISession";

const initialState: ISessionsPayload = {
  pending: false,
  data: [] as ISession[],
  error: null
};

export const sessionsReducer = (
  state = initialState,
  action: ISessionAction
) => {
  switch (action.type) {
    case FETCH_SESSIONS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_SESSIONS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        data: action.payload.data,
        pending: false
      };
    case FETCH_SESSIONS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    default:
      return state;
  }
};
