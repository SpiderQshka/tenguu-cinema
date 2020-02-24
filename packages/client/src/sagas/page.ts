import { put, all, call, race, take } from "redux-saga/effects";
import {
  fetchPageError,
  fetchPageSuccess,
  fetchPagePending
} from "actions/page";
import {
  fetchCurrentUserRequest,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from "actions/users";
import {
  fetchFilmsRequest,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
} from "actions/films";
import {
  fetchSessionsRequest,
  FETCH_SESSIONS_SUCCESS,
  FETCH_SESSIONS_ERROR
} from "actions/sessions";
import { fetchSessionInfo } from "./sessions";
import { fetchFilmInfo } from "./films";

export function* fetchPageInfo() {
  try {
    // action builders
    yield put(fetchPagePending());
    yield all([put(fetchSessionsRequest()), put(fetchFilmsRequest())]);
    const data = yield race([
      all([take(FETCH_FILMS_SUCCESS), take(FETCH_SESSIONS_SUCCESS)]),
      take(FETCH_FILMS_ERROR),
      take(FETCH_SESSIONS_ERROR)
    ]);
    console.log(data);

    const errors = data.filter((element: any) => element !== undefined);
    if (errors[0]) yield put(fetchPageError(errors[0]));

    yield put(fetchPageSuccess());
  } catch (e) {
    yield put(fetchPageError(e));
  }
}
