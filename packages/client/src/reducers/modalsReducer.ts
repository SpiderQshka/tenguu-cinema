import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_REG_MODAL,
  OPEN_REG_MODAL,
  OPEN_BUY_TICKET_MODAL,
  CLOSE_BUY_TICKET_MODAL
} from "actions/modals";

const initialState = {
  isRegModalOpen: false,
  isLoginModalOpen: false,
  isBuyTicketModalOpen: false
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

    default:
      return state;
  }
};
