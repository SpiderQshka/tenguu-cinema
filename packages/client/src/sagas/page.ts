import { put, all, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_PAGE_REQUEST,
  fetchPageRequest,
  fetchPageError,
  fetchPageSuccess,
  fetchPagePending
} from "actions/page";
import { getData, IGetData } from "APIServices/CRUD";
import { getUserInfo } from "APIServices/users";

export function* watchFetchPageInfo() {
  yield takeEvery(FETCH_PAGE_REQUEST, fetchPageRequest);
}

export function* fetchPageInfo() {
  try {
    yield put(fetchPagePending());
    yield all([
      call(() => getData("api/sessions")),
      call(() => getUserInfo()),
      call(() => getData("api/films"))
    ]);
    yield put(fetchPageSuccess());
  } catch (e) {
    yield put(fetchPageError(e));
  }
}
