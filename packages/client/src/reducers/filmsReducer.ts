import {
  FETCH_FILMS_ERROR,
  FETCH_FILMS_PENDING,
  FETCH_FILMS_SUCCESS,
  CHANGE_ACTIVE_FILM_FOR_BUYING,
  CHANGE_ACTIVE_FILM_FOR_SHOW_TRAILER,
  TOGGLE_FILM_DESCRIPTION,
} from "actions/films";

import { IFilmAction, IFilm, IFilmPayload } from "interfaces/IFilm";

const initialState: IFilmPayload = {
  pending: false,
  data: [] as IFilm[],
  error: null,
  isFilmDescriptionOpen: false,
};

export const filmsReducer = (state = initialState, action: IFilmAction) => {
  switch (action.type) {
    case FETCH_FILMS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case FETCH_FILMS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    case CHANGE_ACTIVE_FILM_FOR_BUYING:
      return {
        ...state,
        activeFilmForBuyingId: action.payload.activeFilmForBuyingId,
      };
    case CHANGE_ACTIVE_FILM_FOR_SHOW_TRAILER:
      return {
        ...state,
        activeFilmForShowTrailerId: action.payload.activeFilmForShowTrailerId,
      };
    case TOGGLE_FILM_DESCRIPTION:
      return {
        ...state,
        isFilmDescriptionOpen: !state.isFilmDescriptionOpen,
      };
    default:
      return state;
  }
};
