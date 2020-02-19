import {
  FETCH_GENRES_ERROR,
  FETCH_GENRES_PENDING,
  FETCH_GENRES_SUCCESS
} from "../actions/genres";
import { IGenre } from "interfaces/IGenre";

const initialState = {
  pending: false,
  genres: [] as IGenre[],
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
