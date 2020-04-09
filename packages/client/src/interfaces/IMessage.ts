export interface IMessage {
  name: MessagesNames;
}

export type MessagesNames =
  | "logout"
  | "buyTicketSuccess"
  | "buyTicketError"
  | "deleteTicketSuccess"
  | "deleteTicketError";

export type IMessageActionTypes = "SHOW_MESSAGE" | "HIDE_MESSAGE";

export interface IMessagePayload {
  messageForShow: null | IMessage;
}
export interface IMessageAction {
  type: IMessageActionTypes;
  payload: IMessagePayload;
}
