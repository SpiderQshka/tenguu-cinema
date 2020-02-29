import { all } from "redux-saga/effects";

import {
  watchFetchUserInfo,
  watchLogoutUser,
  watchLoginUser,
  watchRegisterUser
} from "./users";
import { watchFetchFilmInfo } from "./films";
import { watchFetchSessionInfo } from "./sessions";
import { watchFetchPageInfo } from "./page";
import { fetchAppInfo } from "./appInit";
import {
  watchCloseRegModalRequest,
  watchCloseLoginModalRequest
} from "./modals";

export function* rootSaga() {
  yield all([
    watchFetchFilmInfo(),
    watchFetchSessionInfo(),
    watchFetchPageInfo(),
    watchFetchUserInfo(),
    watchLogoutUser(),
    watchLoginUser(),
    watchRegisterUser(),
    watchCloseRegModalRequest(),
    watchCloseLoginModalRequest(),
    fetchAppInfo()
  ]);
}
