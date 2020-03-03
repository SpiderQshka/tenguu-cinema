export interface IGenre {
  name: string;
  _id: string;
}

export type IGenreActionTypes =
  | "FETCH_GENRES_PENDING"
  | "FETCH_GENRES_SUCCESS"
  | "FETCH_GENRES_ERROR"
  | "FETCH_GENRES_REQUEST";

export interface IGenresPayload {
  data: IGenre[];
  error: Error | null;
  pending: boolean;
}
export interface IGenresAction {
  type: IGenreActionTypes;
  payload: IGenresPayload;
}
