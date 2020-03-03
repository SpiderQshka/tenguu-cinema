import { IGenre } from "interfaces/IGenre";

// Actions

export const FETCH_GENRES_REQUEST = "FETCH_GENRES_REQUEST";
export const FETCH_GENRES_PENDING = "FETCH_GENRES_PENDING";
export const FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS";
export const FETCH_GENRES_ERROR = "FETCH_GENRES_ERROR";

// Action creators

export const fetchGenresRequest = () => {
  return {
    type: FETCH_GENRES_REQUEST
  };
};

export const fetchGenresPending = () => {
  return {
    type: FETCH_GENRES_PENDING
  };
};

export const fetchGenresSuccess = (genres: IGenre[]) => {
  return {
    type: FETCH_GENRES_SUCCESS,
    payload: {
      data: genres
    }
  };
};

export const fetchGenresError = (error: Error) => {
  return {
    type: FETCH_GENRES_ERROR,
    payload: {
      error
    }
  };
};
