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
}

export type IFilmActionTypes =
  | "FETCH_FILMS_PENDING"
  | "FETCH_FILMS_SUCCESS"
  | "FETCH_FILMS_ERROR"
  | "FETCH_FILMS_REQUEST";
export interface IFilmAction {
  type: IFilmActionTypes;
  films: IFilm[];
  error: Error | null;
  pending: boolean;
}
