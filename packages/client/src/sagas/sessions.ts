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
  yield put(fetchSessionsPending());
  const data = yield call(() => getData("api/sessions"));
  if (data.error) yield put(fetchSessionsError(data.error));
  else yield put(fetchSessionsSuccess(data.body));
}
