export type IGridActionTypes = "SET_LINE_ACTIVE";

export interface IGridPayload {
  activeLineIndex: number;
}
export interface IHallAction {
  type: IGridActionTypes;
  payload: IGridPayload;
}
