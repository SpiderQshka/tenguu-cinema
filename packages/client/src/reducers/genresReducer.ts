import {
  FETCH_GENRES_ERROR,
  FETCH_GENRES_PENDING,
  FETCH_GENRES_SUCCESS
} from "../actions/genres";

const initialState = {
  pending: false,
  genres: [],
  error: null
};

export const genresReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GENRES_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_GENRES_SUCCESS:
      console.log("Success");
      return {
        ...state,
        genres: action.genres
      };
    case FETCH_GENRES_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export const getGenres = (genres: any[], filter?: any) => {
  switch (filter) {
    default:
      return genres;
  }
};
// export const getFilmsPending = (state: any) => state.films;
// export const getFilmsError = (state: any) => state.films;
