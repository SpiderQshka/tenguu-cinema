export interface IHall {
  name: string;
  numberOfSeats: number;
  seatsOnRow: number;
  _id: string;
}

export type IHallActionTypes =
  | "FETCH_HALLS_PENDING"
  | "FETCH_HALLS_SUCCESS"
  | "FETCH_HALLS_ERROR"
  | "FETCH_HALLS_REQUEST";

export interface IHallPayload {
  data: IHall[];
  error: Error | null;
  pending: boolean;
}
export interface IHallAction {
  type: IHallActionTypes;
  payload: IHallPayload;
}
