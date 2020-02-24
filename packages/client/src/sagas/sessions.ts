import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  fetchSessionsError,
  fetchSessionsPending,
  fetchSessionsSuccess,
  FETCH_SESSIONS_REQUEST
} from "actions/sessions";

export function* watchFetchSessionInfo() {
  yield takeEvery(FETCH_SESSIONS_REQUEST, fetchSessionInfo);
}

export function* fetchSessionInfo() {
  try {
    yield put(fetchSessionsPending());
    const data = yield call(() => getData("api/sessions"));
    yield put(fetchSessionsSuccess(data));
  } catch (e) {
    yield put(fetchSessionsError(e));
  }
}
