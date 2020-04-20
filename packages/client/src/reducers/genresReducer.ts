import {
  FETCH_GENRES_ERROR,
  FETCH_GENRES_PENDING,
  FETCH_GENRES_SUCCESS,
} from "actions/genres";
import { IGenre, IGenresAction, IGenresPayload } from "interfaces/IGenre";

const initialState: IGenresPayload = {
  pending: true,
  data: [] as IGenre[],
  error: null,
};

export const genresReducer = (state = initialState, action: IGenresAction) => {
  switch (action.type) {
    case FETCH_GENRES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case FETCH_GENRES_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    default:
      return state;
  }
};
