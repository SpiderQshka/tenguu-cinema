import { all } from "redux-saga/effects";

import { fetchUserInfo } from "./users";
import { fetchFilmInfo } from "./films";
import { fetchSessionInfo } from "./sessions";
import { fetchPageInfo } from "./page";

export function* rootSaga() {
  yield all([
    fetchPageInfo(),
    fetchUserInfo(),
    fetchFilmInfo(),
    fetchSessionInfo()
  ]);
}
