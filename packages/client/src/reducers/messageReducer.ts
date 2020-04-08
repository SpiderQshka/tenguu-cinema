import { HIDE_MESSAGE, SHOW_MESSAGE } from "actions/messages";
import {
  IMessage,
  IMessageActionTypes,
  IMessagePayload,
  IMessageAction,
} from "interfaces/IMessage";

const initialState: IMessagePayload = {
  messageForShow: null,
};

export const messageReducer = (
  state = initialState,
  action: IMessageAction
) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        messageForShow: action.payload,
      };
    case HIDE_MESSAGE:
      return {
        ...state,
        messageForShow: null,
      };
    default:
      return state;
  }
};
