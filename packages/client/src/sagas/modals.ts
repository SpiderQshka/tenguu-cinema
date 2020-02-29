import { put, call, takeEvery, take, all } from "redux-saga/effects";

import {
  CLOSE_LOGIN_MODAL_REQUEST,
  CLOSE_REG_MODAL_REQUEST,
  closeRegModal,
  closeLoginModal
} from "actions/modals";
import { USER_REG, USER_LOGIN } from "actions/users";

export function* watchCloseRegModalRequest() {
  yield takeEvery(CLOSE_REG_MODAL_REQUEST, closeRegModalSaga);
}

export function* watchCloseLoginModalRequest() {
  yield takeEvery(CLOSE_LOGIN_MODAL_REQUEST, closeLoginModalSaga);
}

export function* closeRegModalSaga() {
  const data = yield take(USER_REG);
  const result = data.every((el: any) => !!el)[0];
  if (result) yield put(closeRegModal());
}

export function* closeLoginModalSaga() {
  const data = yield take(USER_LOGIN);
  if (data) yield put(closeLoginModal());
}
