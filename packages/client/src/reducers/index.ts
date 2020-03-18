import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
import { sessionsReducer } from "./sessionsReducer";
import { pageReducer } from "./pageReducer";
import { combineReducers } from "redux";
import { modalsReducer } from "./modalsReducer";
import { hallsReducer } from "./hallsReducer";
import { ticketsReducer } from "./ticketsReducer";
import { langReducer } from "./langReducer";
import { AdminPageReducer } from "./adminPageReducer";

export const allReducers = combineReducers({
  lang: langReducer,
  users: usersReducer,
  films: filmsReducer,
  sessions: sessionsReducer,
  halls: hallsReducer,
  tickets: ticketsReducer,
  modals: modalsReducer,
  mainPage: pageReducer,
  adminPage: AdminPageReducer
});
