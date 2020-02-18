import {
  FETCH_FILMS_ERROR,
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS
} from "actions/films";

const initialState = {
  pending: false,
  films: [] as any[],
  error: null
};

export const filmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_FILMS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_FILMS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        films: action.films,
        pending: false
      };
    case FETCH_FILMS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.error,
        pending: false
      };
    default:
      return state;
  }
};
