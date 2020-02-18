import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  fetchCurrentUserError,
  fetchCurrentUserPending,
  fetchCurrentUserSuccess
} from "actions/users";

export function* watchFetchFilmInfo() {
  yield takeEvery("FETCH_FILM", fetchFilmInfo);
}

export function* fetchFilmInfo() {
  try {
    yield put(fetchCurrentUserPending());
    const data = yield call(() => getData("api/films"));
    yield put(fetchCurrentUserSuccess(data));
  } catch (e) {
    yield put(fetchCurrentUserError(e));
  }
}
