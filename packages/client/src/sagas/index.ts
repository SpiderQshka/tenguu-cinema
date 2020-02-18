import { all } from "redux-saga/effects";

import { fetchUserInfo } from "./users";
import { fetchFilmInfo } from "./films";

export function* rootSaga() {
  yield all([fetchUserInfo(), fetchFilmInfo()]);
}
