import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { genresReducer } from "./genresReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  users: usersReducer,
  films: filmsReducer,
  genres: genresReducer
});
