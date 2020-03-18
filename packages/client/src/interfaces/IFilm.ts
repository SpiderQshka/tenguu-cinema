import { IGenre } from "./IGenre";

export interface IFilm {
  genres: string[];
  name: string;
  duration: number;
  ratings: {
    _id: string;
    ratingValue: number;
    raterName: string;
  }[];
  filmImage: string;
  id: string;
  releaseDate: Date;
  trailerLink: string;
  description: string;
}

export type IFilmActionTypes =
  | "FETCH_FILMS_PENDING"
  | "FETCH_FILMS_SUCCESS"
  | "FETCH_FILMS_ERROR"
  | "FETCH_FILMS_REQUEST"
  | "CHANGE_ACTIVE_FILM_FOR_BUYING"
  | "CHANGE_ACTIVE_FILM_FOR_SHOW_TRAILER";

export interface IFilmPayload {
  data: IFilm[];
  error: { code: number; message: string } | null;
  pending: boolean;
  activeFilmForBuyingId?: string;
  activeFilmForShowTrailerId?: string;
}
export interface IFilmAction {
  type: IFilmActionTypes;
  payload: IFilmPayload;
}
