import { put, takeEvery, take } from "redux-saga/effects";

import {
  CLOSE_LOGIN_MODAL_REQUEST,
  CLOSE_REG_MODAL_REQUEST,
  closeRegModal,
  closeLoginModal,
  closeBuyTicketModal,
  CLOSE_BUY_TICKET_MODAL_REQUEST
} from "actions/modals";
import { USER_REG, USER_LOGIN } from "actions/users";
import { BUY_TICKET } from "actions/tickets";

export function* watchCloseRegModalRequest() {
  yield takeEvery(CLOSE_REG_MODAL_REQUEST, closeRegModalSaga);
}

export function* watchCloseLoginModalRequest() {
  yield takeEvery(CLOSE_LOGIN_MODAL_REQUEST, closeLoginModalSaga);
}

export function* watchcloseBuyTicketModalRequest() {
  yield takeEvery(CLOSE_BUY_TICKET_MODAL_REQUEST, closeBuyTicketModalSaga);
}

export function* closeRegModalSaga() {
  const data = yield take(USER_REG);
  if (data) yield put(closeRegModal());
}

export function* closeLoginModalSaga() {
  const data = yield take(USER_LOGIN);
  if (data) yield put(closeLoginModal());
}

export function* closeBuyTicketModalSaga() {
  const data = yield take(BUY_TICKET);
  if (data) yield put(closeBuyTicketModal());
}
