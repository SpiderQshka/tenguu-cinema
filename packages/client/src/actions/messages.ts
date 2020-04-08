import { IMessage } from "interfaces/IMessage";

// Actions

export const SHOW_MESSAGE = "SHOW_MESSAGE";
export const HIDE_MESSAGE = "HIDE_MESSAGE";

// Action creators

export const showMessage = (payload: IMessage) => {
  return {
    type: SHOW_MESSAGE,
    payload,
  };
};

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
