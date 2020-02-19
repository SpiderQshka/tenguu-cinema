import { all } from "redux-saga/effects";

import { fetchUserInfo } from "./users";
import { fetchFilmInfo } from "./films";
import { fetchSessionInfo } from "./sessions";

export function* rootSaga() {
  yield all([fetchUserInfo(), fetchFilmInfo(), fetchSessionInfo()]);
}
