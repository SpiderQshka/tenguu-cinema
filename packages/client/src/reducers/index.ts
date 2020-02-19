import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { sessionsReducer } from "./sessionsReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  userData: usersReducer,
  filmsData: filmsReducer,
  sessionsData: sessionsReducer
});
