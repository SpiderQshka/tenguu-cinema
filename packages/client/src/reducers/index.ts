import { usersReducer } from "./usersReducer";
import { filmsReducer } from "./filmsReducer";
// import { genresReducer } from "./genresReducer";
// import { hallsReducer } from "./hallsReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  userData: usersReducer,
  filmsData: filmsReducer
  //   genres: genresReducer,
  //   halls: hallsReducer
});
