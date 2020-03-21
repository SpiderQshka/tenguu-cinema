import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  fetchFilmsError,
  fetchFilmsPending,
  fetchFilmsSuccess,
  FETCH_FILMS_REQUEST
} from "actions/films";

export function* watchFetchFilmInfo() {
  yield takeEvery(FETCH_FILMS_REQUEST, fetchFilmInfo);
}

export function* fetchFilmInfo() {
  yield put(fetchFilmsPending());
  const data = yield call(() => getData("api/films/parced"));
  if (data.error) yield put(fetchFilmsError(data.error));
  else yield put(fetchFilmsSuccess(data.body));
}
