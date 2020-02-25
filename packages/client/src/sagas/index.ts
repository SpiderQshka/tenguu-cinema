import { all } from "redux-saga/effects";

import {
  fetchUserInfo,
  watchFetchUserInfo,
  watchLogoutUser,
  watchLoginUser,
  watchRegisterUser
} from "./users";
import { fetchFilmInfo, watchFetchFilmInfo } from "./films";
import { fetchSessionInfo, watchFetchSessionInfo } from "./sessions";
import { watchFetchPageInfo } from "./page";
import { fetchAppInfo } from "./appInit";

export function* rootSaga() {
  yield all([
    watchFetchFilmInfo(),
    watchFetchSessionInfo(),
    watchFetchPageInfo(),
    watchFetchUserInfo(),
    watchLogoutUser(),
    watchLoginUser(),
    watchRegisterUser(),
    fetchAppInfo()
  ]);
}
