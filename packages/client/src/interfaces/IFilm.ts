export interface IFilm {
  genres: string[];
  name: string;
  ratings: {
    _id: string;
    ratingValue: number;
    raterName: string;
  }[];
  filmImage: string;
  _id: string;
  releaseDate: number;
}

export type IFilmActionTypes =
  | "FETCH_FILMS_PENDING"
  | "FETCH_FILMS_SUCCESS"
  | "FETCH_FILMS_ERROR"
  | "FETCH_FILMS_REQUEST";

export interface IFilmPayload {
  data: IFilm[];
  error: Error | null;
  pending: boolean;
}
export interface IFilmAction {
  type: IFilmActionTypes;
  payload: IFilmPayload;
}
