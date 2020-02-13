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

export const fetchFilmsSuccess = (films: any) => {
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
