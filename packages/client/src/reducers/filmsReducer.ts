import {
  FETCH_FILMS_ERROR,
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS,
  CHANGE_ACTIVE_FILM_FOR_BUYING
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
      console.log("Success", action);
      return {
        ...state,
        data: action.payload.data,
        pending: false
      };
    case FETCH_FILMS_ERROR:
      console.log(`Error`, action.payload.error);
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    case CHANGE_ACTIVE_FILM_FOR_BUYING:
      return {
        ...state,
        activeFilmForBuyingId: action.payload.activeFilmForBuyingId
      };
    default:
      return state;
  }
};
