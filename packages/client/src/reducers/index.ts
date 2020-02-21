import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { sessionsReducer } from "./sessionsReducer";
import { pageReducer } from "./pageReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  user: usersReducer,
  films: filmsReducer,
  sessions: sessionsReducer,
  mainPage: pageReducer
});
