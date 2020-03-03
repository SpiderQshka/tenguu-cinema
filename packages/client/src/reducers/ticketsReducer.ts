import {
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_PENDING,
  FETCH_TICKETS_SUCCESS
} from "actions/tickets";
import { ITicket, ITicketsPayload, ITicketsAction } from "interfaces/ITicket";

const initialState: ITicketsPayload = {
  pending: false,
  data: [] as ITicket[],
  error: null
};

export const ticketsReducer = (
  state = initialState,
  action: ITicketsAction
) => {
  switch (action.type) {
    case FETCH_TICKETS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_TICKETS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        data: action.payload.data,
        pending: false
      };
    case FETCH_TICKETS_ERROR:
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
