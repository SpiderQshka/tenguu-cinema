import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { sessionsReducer } from "./sessionsReducer";
import { pageReducer } from "./pageReducer";
import { combineReducers } from "redux";
import { modalsReducer } from "./modalsReducer";
import { hallsReducer } from "./hallsReducer";
import { ticketsReducer } from "./ticketsReducer";
import { genresReducer } from "./genresReducer";
import { AdminPageReducer } from "./adminPageReducer";

export const allReducers = combineReducers({
  users: usersReducer,
  films: filmsReducer,
  sessions: sessionsReducer,
  halls: hallsReducer,
  tickets: ticketsReducer,
  genres: genresReducer,
  modals: modalsReducer,
  mainPage: pageReducer,
  adminPage: AdminPageReducer
});
