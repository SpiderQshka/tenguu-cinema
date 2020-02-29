import { put, call, takeEvery } from "redux-saga/effects";

import { getUserInfo, registerUser, loginUser } from "APIServices/users";
import {
  fetchCurrentUserError,
  fetchCurrentUserPending,
  fetchCurrentUserSuccess,
  FETCH_USER_REQUEST,
  userLogout,
  USER_LOGOUT_REQUEST,
  USER_LOGIN_REQUEST,
  userLogin,
  fetchCurrentUserRequest,
  USER_REG_REQUEST,
  userRegister,
  userRegisterError,
  userLoginError
} from "actions/users";

export function* watchFetchUserInfo() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUserInfo);
}

export function* watchLogoutUser() {
  yield takeEvery(USER_LOGOUT_REQUEST, userLogoutSaga);
}

export function* watchLoginUser() {
  yield takeEvery(USER_LOGIN_REQUEST, userLoginSaga);
}

export function* watchRegisterUser() {
  yield takeEvery(USER_REG_REQUEST, userRegisterSaga);
}

export function* fetchUserInfo() {
  yield put(fetchCurrentUserPending());
  const data = yield call(getUserInfo);

  if (data.error) yield put(fetchCurrentUserError(data.error));
  else yield put(fetchCurrentUserSuccess(data));
}

export function* userLogoutSaga() {
  window.localStorage.clear();
  yield put(userLogout());
}

export function* userLoginSaga({ payload }: any) {
  const userData = yield call(() => loginUser(payload));

  if (userData.error) yield put(userLoginError(userData.error));
  else {
    window.localStorage.setItem("userId", userData.body._id);
    window.localStorage.setItem("auth-token", userData.authToken);

    yield put(userLogin(userData.authToken, userData.body._id));
    yield put(fetchCurrentUserRequest());
  }
}

export function* userRegisterSaga({ payload }: any) {
  const userData = yield call(() => registerUser(payload));

  if (userData.error) yield put(userLoginError(userData.error));
  else {
    window.localStorage.setItem("userId", userData.body._id);
    window.localStorage.setItem("auth-token", userData.authToken);

    yield put(userRegister(userData.authToken, userData.body._id));
    yield put(fetchCurrentUserRequest());
  }
}
