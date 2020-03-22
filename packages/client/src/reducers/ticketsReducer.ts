import {
  FETCH_TICKETS_ERROR,
  FETCH_TICKETS_PENDING,
  FETCH_TICKETS_SUCCESS,
  BUY_TICKET,
  BUY_TICKET_ERROR,
  DELETE_TICKET,
  CHANGE_TICKETS_FOR_BUYING
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
    case DELETE_TICKET:
      return {
        ...state,
        error: null,
        data: state.data.filter(
          ticket => ticket.id !== action.payload.ticketForDeleteId
        ),
        pending: false
      };
    case CHANGE_TICKETS_FOR_BUYING:
      return {
        ...state,
        error: null,
        ticketsForBuyingAmount: action.payload.ticketsForBuyingAmount,
        pending: false
      };
    default:
      return state;
  }
};
