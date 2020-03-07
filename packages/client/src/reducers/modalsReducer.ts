import {
  CLOSE_LOGIN_MODAL,
  OPEN_LOGIN_MODAL,
  CLOSE_REG_MODAL,
  OPEN_REG_MODAL
} from "actions/modals";

const initialState = {
  isRegModalOpen: false,
  isLoginModalOpen: false
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

    default:
      return state;
  }
};
