import { all } from "redux-saga/effects";

import { fetchUserInfo } from "./users";
import { fetchFilmInfo } from "./films";
import { fetchSessionInfo } from "./sessions";
import { fetchPageInfo } from "./page";
import { fetchAppInfo } from "./appInit";

export function* rootSaga() {
  yield all([
    // fetchAppInfo()
    fetchPageInfo()
    // fetchUserInfo(),
    // fetchFilmInfo(),
    // fetchSessionInfo()
  ]);
}
