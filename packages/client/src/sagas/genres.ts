import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  FETCH_GENRES_REQUEST,
  fetchGenresPending,
  fetchGenresSuccess,
  fetchGenresError
} from "actions/genres";

export function* watchFetchGenresInfo() {
  yield takeEvery(FETCH_GENRES_REQUEST, fetchGenresInfo);
}

export function* fetchGenresInfo() {
  yield put(fetchGenresPending());
  const data = yield call(() => getData("api/genres"));
  if (data.error) yield put(fetchGenresError(data.error));
  else yield put(fetchGenresSuccess(data.body));
}
