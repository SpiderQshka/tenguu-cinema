import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  users: usersReducer,
  films: filmsReducer
});
