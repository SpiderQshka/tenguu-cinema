import { put, all, race, take, takeEvery } from "redux-saga/effects";
import {
  fetchAdminPagePending,
  FETCH_ADMIN_PAGE_REQUEST,
  fetchAdminPageSuccess,
  fetchAdminPageError
} from "actions/admin";

import {
  fetchUsersRequest,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from "actions/users";
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
  yield all([
    put(fetchUsersRequest()),
    put(fetchTicketsRequest()),
    put(fetchHallsRequest()),
    put(fetchGenresRequest())
  ]);
  const data = yield race([
    all([
      take(FETCH_TICKETS_SUCCESS),
      take(FETCH_HALLS_SUCCESS),
      take(FETCH_GENRES_SUCCESS),
      take(FETCH_USERS_SUCCESS)
    ]),
    take(FETCH_USERS_ERROR),
    take(FETCH_TICKETS_ERROR),
    take(FETCH_HALLS_ERROR),
    take(FETCH_GENRES_ERROR)
  ]);
  if (!data.payload) yield put(fetchAdminPageSuccess());
  else yield put(fetchAdminPageError(data.payload.error));
}
