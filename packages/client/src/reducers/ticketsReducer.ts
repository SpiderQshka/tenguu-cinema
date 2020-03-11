import {
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_PENDING,
  FETCH_TICKETS_SUCCESS,
  BUY_TICKET,
  BUY_TICKET_ERROR
} from "actions/tickets";
import { ITicket, ITicketsPayload, ITicketsAction } from "interfaces/ITicket";

const initialState: ITicketsPayload = {
  pending: false,
  data: [] as ITicket[]
};

export const ticketsReducer = (
  state = initialState,
  action: ITicketsAction
) => {
  switch (action.type) {
    case FETCH_TICKETS_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false
      };
    case FETCH_TICKETS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case BUY_TICKET_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case BUY_TICKET:
      return {
        ...state,
        error: null,
        data: [...state.data, action.payload.data],
        pending: false
      };
    default:
      return state;
  }
};
