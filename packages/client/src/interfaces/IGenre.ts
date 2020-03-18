export interface IGenre {
  name: string;
  id: string;
}

export type IGenreActionTypes =
  | "FETCH_GENRES_PENDING"
  | "FETCH_GENRES_SUCCESS"
  | "FETCH_GENRES_ERROR"
  | "FETCH_GENRES_REQUEST";

export interface IGenresPayload {
  data: IGenre[];
  error: { code: number; message: string } | null;
  pending: boolean;
}
export interface IGenresAction {
  type: IGenreActionTypes;
  payload: IGenresPayload;
}
