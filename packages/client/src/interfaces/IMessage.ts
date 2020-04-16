export interface IMessage {
  name: MessagesNames;
}

export type MessagesNames =
  | "logout"
  | "buyTicketSuccess"
  | "buyTicketError"
  | "deleteTicketSuccess"
  | "deleteTicketError"
  | "login"
  | "register";

export type IMessageActionTypes = "SHOW_MESSAGE" | "HIDE_MESSAGE";

export interface IMessagePayload {
  messageForShow: null | IMessage;
}
export interface IMessageAction {
  type: IMessageActionTypes;
  payload: IMessagePayload;
}
