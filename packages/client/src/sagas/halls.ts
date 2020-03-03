import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  FETCH_HALLS_REQUEST,
  fetchHallsPending,
  fetchHallsError,
  fetchHallsSuccess
} from "actions/halls";

export function* watchFetchHallsInfo() {
  yield takeEvery(FETCH_HALLS_REQUEST, fetchHallsInfo);
}

export function* fetchHallsInfo() {
  yield put(fetchHallsPending());
  const data = yield call(() => getData("api/halls"));
  if (data.error) yield put(fetchHallsError(data.error));
  else yield put(fetchHallsSuccess(data.body));
}
