import { IFilm } from "interfaces/IFilm";
// Actions

export const FETCH_FILMS_PENDING = "FETCH_FILMS_PENDING";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR";

// Action creators

export const fetchFilmsPending = () => {
  return {
    type: FETCH_FILMS_PENDING
  };
};

export const fetchFilmsSuccess = (films: IFilm[]) => {
  return {
    type: FETCH_FILMS_SUCCESS,
    films
  };
};

export const fetchFilmsError = (error: Error) => {
  return {
    type: FETCH_FILMS_ERROR,
    error
  };
};

// export type FetchFilmsTypes =
// ____________________________________________________________________
// Fetches

export const fetchFilms = async (dispatch: Function) => {
  dispatch(fetchFilmsPending());
  return fetch("/api/films")
    .then(res => res.json())
    .then(data => dispatch(fetchFilmsSuccess(data)))
    .catch(error => dispatch(fetchFilmsError(error)));
};
