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
  watchCloseLoginModalRequest,
  watchCloseBuyTicketModalRequest
} from "./modals";
import { watchFecthAdminInfo } from "./admin";
import { watchFetchGenresInfo } from "./genres";
import { watchFetchHallsInfo } from "./halls";
import {
  watchFetchTicketsInfo,
  watchBuyTicketRequest,
  watchDeleteTicketRequest
} from "./tickets";
import { watchFetchTranslationsInfo } from "./lang";

export function* rootSaga() {
  yield all([
    watchFetchFilmInfo(),
    watchFetchSessionInfo(),
    watchFetchGenresInfo(),
    watchFetchTicketsInfo(),
    watchFetchHallsInfo(),
    watchFetchPageInfo(),
    watchFetchUserInfo(),
    watchLogoutUser(),
    watchLoginUser(),
    watchRegisterUser(),
    watchBuyTicketRequest(),
    watchCloseRegModalRequest(),
    watchCloseLoginModalRequest(),
    watchCloseBuyTicketModalRequest(),
    watchFetchTranslationsInfo(),
    watchDeleteTicketRequest(),
    fetchAppInfo(),
    watchFecthAdminInfo()
  ]);
}
