export interface IMessage {
  name: MessagesNames;
}

export type MessagesNames =
  | "logout"
  | "buyTicketPending"
  | "buyTicketSuccess"
  | "buyTicketError"
  | "deleteTicketPending"
  | "deleteTicketSuccess"
  | "deleteTicketError"
  | "loginPending"
  | "loginError"
  | "loginSuccess"
  | "registerPending"
  | "registerError"
  | "registerSuccess"
  | "sendMessagePending"
  | "sendMessageSuccess"
  | "sendMessageError";

export type IMessageActionTypes = "SHOW_MESSAGE" | "HIDE_MESSAGE";

export interface IMessagePayload {
  messageForShow: null | IMessage;
}
export interface IMessageAction {
  type: IMessageActionTypes;
  payload: IMessagePayload;
}
