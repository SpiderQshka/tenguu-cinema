import { put, all, race, take, takeEvery } from "redux-saga/effects";
import {
  fetchAdminPagePending,
  FETCH_ADMIN_PAGE_REQUEST,
  fetchAdminPageSuccess,
  fetchAdminPageError
} from "actions/admin";

import { fetchCurrentUserRequest, FETCH_USER_SUCCESS } from "actions/users";
import {
  FETCH_TICKETS_SUCCESS,
  fetchTicketsRequest,
  FETCH_TICKETS_ERROR
} from "actions/tickets";
import {
  fetchHallsRequest,
  FETCH_HALLS_SUCCESS,
  FETCH_HALLS_ERROR
} from "actions/halls";
import {
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_ERROR,
  fetchGenresRequest
} from "actions/genres";

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
