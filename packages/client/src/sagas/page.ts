import { put, all, race, take, takeEvery } from "redux-saga/effects";
import {
  fetchPageError,
  fetchPageSuccess,
  fetchPagePending,
  FETCH_PAGE_REQUEST
} from "actions/page";
import {
  fetchFilmsRequest,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_ERROR
} from "actions/films";
import {
  fetchSessionsRequest,
  FETCH_SESSIONS_SUCCESS,
  FETCH_SESSIONS_ERROR
} from "actions/sessions";

export function* watchFetchPageInfo() {
  yield takeEvery(FETCH_PAGE_REQUEST, fetchPageInfo);
}

export function* fetchPageInfo() {
  yield put(fetchPagePending());
  yield all([put(fetchSessionsRequest()), put(fetchFilmsRequest())]);
  const data = yield race([
    all([take(FETCH_FILMS_SUCCESS), take(FETCH_SESSIONS_SUCCESS)]),
    take(FETCH_FILMS_ERROR),
    take(FETCH_SESSIONS_ERROR)
  ]);
  const responses = data.filter((element: any) => element !== undefined);

  if (responses[0]) yield put(fetchPageSuccess());
  else yield put(fetchPageError(responses[1] || responses[2]));
}
