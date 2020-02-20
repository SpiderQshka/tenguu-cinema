import {
  FETCH_FILMS_ERROR,
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS
} from "actions/films";

import { IFilmAction, IFilm, IFilmPayload } from "interfaces/IFilm";

const initialState: IFilmPayload = {
  pending: false,
  data: [] as IFilm[],
  error: null
};

export const filmsReducer = (state = initialState, action: IFilmAction) => {
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
        data: action.payload.data,
        pending: false
      };
    case FETCH_FILMS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    default:
      return state;
  }
};
