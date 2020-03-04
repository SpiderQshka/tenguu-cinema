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
  trailerLink: string;
}

export class FilmForShow {
  _id: string;
  genres: string[];
  name: string;
  releaseDate: number;
  trailerLink: string;
  filmImage: string;
  ratings: {
    _id: string;
    ratingValue: number;
    raterName: string;
  }[];
  constructor() {
    this.genres = [] as string[];
    this.name = "";
    this._id = "";
    this.releaseDate = 0;
    this.trailerLink = "";
    this.filmImage = "";
    this.ratings = [
      {} as {
        _id: string;
        ratingValue: number;
        raterName: string;
      }
    ];
  }
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
