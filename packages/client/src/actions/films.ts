import { IFilm, IFilmPayload } from "interfaces/IFilm";
// Actions

export const FETCH_FILMS_PENDING = "FETCH_FILMS_PENDING";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR";
export const FETCH_FILMS_REQUEST = "FETCH_FILMS_REQUEST";

// Action creators

export const fetchFilmsPending = () => {
  return {
    type: FETCH_FILMS_PENDING
  };
};

export const fetchFilmsSuccess = (data: IFilm[]) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    payload: {
      data
    } as IFilmPayload
  };
};

export const fetchFilmsError = (error: Error) => {
  return {
    type: FETCH_FILMS_ERROR,
    payload: {
      error
    } as IFilmPayload
  };
};

export const fetchFilmsRequest = () => {
  return {
    type: FETCH_FILMS_REQUEST
  };
};
