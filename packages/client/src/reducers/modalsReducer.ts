import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_REG_MODAL,
  OPEN_REG_MODAL,
  OPEN_BUY_TICKET_MODAL,
  CLOSE_BUY_TICKET_MODAL,
  CLOSE_USER_TICKETS_MODAL,
  OPEN_USER_TICKETS_MODAL,
  CLOSE_WATCH_TRAILER_MODAL,
  OPEN_WATCH_TRAILER_MODAL
} from "actions/modals";

const initialState = {
  isRegModalOpen: false,
  isLoginModalOpen: false,
  isBuyTicketModalOpen: false,
  isUserTicketsModalOpen: false,
  isWatchTrailerModalOpen: false
};

export const modalsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: false
      };
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        isLoginModalOpen: true
      };
    case CLOSE_REG_MODAL:
      return {
        ...state,
        isRegModalOpen: false
      };
    case OPEN_REG_MODAL:
      return {
        ...state,
        isRegModalOpen: true
      };
    case OPEN_BUY_TICKET_MODAL:
      return {
        ...state,
        isBuyTicketModalOpen: true
      };
    case CLOSE_BUY_TICKET_MODAL:
      return {
        ...state,
        isBuyTicketModalOpen: false
      };
    case CLOSE_USER_TICKETS_MODAL:
      return {
        ...state,
        isUserTicketsModalOpen: false
      };
    case OPEN_USER_TICKETS_MODAL:
      return {
        ...state,
        isUserTicketsModalOpen: true
      };
    case CLOSE_WATCH_TRAILER_MODAL:
      return {
        ...state,
        isWatchTrailerModalOpen: false
      };
    case OPEN_WATCH_TRAILER_MODAL:
      return {
        ...state,
        isWatchTrailerModalOpen: true
      };

    default:
      return state;
  }
};
