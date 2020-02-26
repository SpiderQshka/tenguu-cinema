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
  try {
    yield put(fetchCurrentUserPending());
    const data = yield call(getUserInfo);
    yield put(fetchCurrentUserSuccess(data));
  } catch (e) {
    yield put(fetchCurrentUserError(e));
  }
}

export function* userLogoutSaga() {
  window.localStorage.clear();
  yield put(userLogout());
}

export function* userLoginSaga({ payload }: any) {
  try {
    const userData = yield call(() => loginUser(payload));

    window.localStorage.setItem("userId", userData.body._id);
    window.localStorage.setItem("auth-token", userData.authToken);

    yield put(userLogin(userData.authToken, userData.body._id));
    yield put(fetchCurrentUserRequest());
  } catch (e) {
    yield put(userLoginError(e));
  }
}

export function* userRegisterSaga({ payload }: any) {
  try {
    const userData = yield call(() => registerUser(payload));

    window.localStorage.setItem("userId", userData.body._id);
    window.localStorage.setItem("auth-token", userData.authToken);

    yield put(userRegister(userData.authToken, userData.body._id));
    yield put(fetchCurrentUserRequest());
  } catch (e) {
    yield put(userRegisterError(e));
  }
}
