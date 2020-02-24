import { put, call, takeEvery } from "redux-saga/effects";

import { getUserInfo } from "APIServices/users";
import {
  fetchCurrentUserError,
  fetchCurrentUserPending,
  fetchCurrentUserSuccess,
  FETCH_USER_REQUEST
} from "actions/users";

export function* watchFetchUserInfo() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserInfo);
}

export function* fetchUserInfo() {
  try {
    yield put(fetchCurrentUserPending());
    const data = yield call(getUserInfo);
    if (data.error) yield put(fetchCurrentUserError(data.error));
    else yield put(fetchCurrentUserSuccess(data));
  } catch (e) {
    yield put(fetchCurrentUserError(e));
  }
}
