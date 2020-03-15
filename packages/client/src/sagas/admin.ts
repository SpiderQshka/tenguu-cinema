import { put, take, takeEvery } from "redux-saga/effects";
import {
  fetchAdminPagePending,
  FETCH_ADMIN_PAGE_REQUEST,
  fetchAdminPageSuccess,
  fetchAdminPageError
} from "actions/admin";

import { fetchCurrentUserRequest, FETCH_USER_SUCCESS } from "actions/users";

export function* watchFecthAdminInfo() {
  yield takeEvery(FETCH_ADMIN_PAGE_REQUEST, fetchAdminInfo);
}

export function* fetchAdminInfo() {
  yield put(fetchAdminPagePending());
  yield put(fetchCurrentUserRequest());
  const data = yield take(FETCH_USER_SUCCESS);
  if (data) yield put(fetchAdminPageSuccess());
  else yield put(fetchAdminPageError(data.payload.error));
}
