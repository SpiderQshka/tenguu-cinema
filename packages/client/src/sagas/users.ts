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
  userLoginError,
  FETCH_USERS_REQUEST,
  fetchUsersError,
  fetchUsersSuccess,
  fetchUsersPending
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
  else yield put(fetchCurrentUserSuccess(data.body));
}

export function* userLogoutSaga() {
  window.localStorage.clear();
  yield put(userLogout());
}

export function* userLoginSaga({ payload }: any) {
  const userData = yield call(() => loginUser(payload));

  if (userData.error) yield put(userLoginError(userData.error));
  else {
    window.localStorage.setItem("userId", userData.body.id);
    window.localStorage.setItem("auth-token", userData.body.authToken);

    yield put(userLogin(userData.body.authToken, userData.body.id));
    yield put(fetchCurrentUserRequest());
  }
}

export function* userRegisterSaga({ payload }: any) {
  const userData = yield call(() => registerUser(payload));

  if (userData.error) yield put(userRegisterError(userData.error));
  else {
    window.localStorage.setItem("userId", userData.body.id);
    window.localStorage.setItem("auth-token", userData.body.authToken);

    yield put(userRegister(userData.body.authToken, userData.body.id));
    yield put(fetchCurrentUserRequest());
  }
}
