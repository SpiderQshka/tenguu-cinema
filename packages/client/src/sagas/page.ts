import { put, all, call } from "redux-saga/effects";
import {
  fetchPageError,
  fetchPageSuccess,
  fetchPagePending
} from "actions/page";
import { fetchCurrentUserRequest } from "actions/users";
import { fetchFilmsRequest } from "actions/films";
import { fetchSessionsRequest } from "actions/sessions";

export function* fetchPageInfo() {
  try {
    yield put(fetchPagePending());
    yield all([
      call(fetchCurrentUserRequest),
      call(fetchFilmsRequest),
      call(fetchSessionsRequest)
    ]);
    yield put(fetchPageSuccess());
  } catch (e) {
    yield put(fetchPageError(e));
  }
}
