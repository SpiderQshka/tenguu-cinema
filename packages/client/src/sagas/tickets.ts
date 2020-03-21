import { put, call, takeEvery } from "redux-saga/effects";

import { getData, postData, deleteData } from "APIServices/CRUD";
import {
  FETCH_TICKETS_REQUEST,
  fetchTicketsPending,
  fetchTicketsError,
  fetchTicketsSuccess,
  BUY_TICKET_REQUEST,
  buyTicketError,
  buyTicket,
  DELETE_TICKET_REQUEST,
  deleteTicket
} from "actions/tickets";

export function* watchFetchTicketsInfo() {
  yield takeEvery(FETCH_TICKETS_REQUEST, fetchTicketsInfo);
}

export function* watchBuyTicketRequest() {
  yield takeEvery(BUY_TICKET_REQUEST, buyTicketSaga);
}

export function* watchDeleteTicketRequest() {
  yield takeEvery(DELETE_TICKET_REQUEST, deleteTicketSaga);
}

export function* fetchTicketsInfo() {
  yield put(fetchTicketsPending());
  const data = yield call(() => getData("api/tickets/parced"));
  if (data.error) yield put(fetchTicketsError(data.error));
  else yield put(fetchTicketsSuccess(data.body));
}

export function* buyTicketSaga({ payload }: any) {
  const data = yield call(() => postData("api/tickets", payload.data));
  if (data.error) yield put(buyTicketError(data.error));
  else {
    for (let i = 0; i < data.body.length; i++) {
      yield put(buyTicket(data.body[i]));
    }
  }
}

export function* deleteTicketSaga({ payload }: any) {
  const data = yield call(() => deleteData("api/tickets", payload.id));
  if (!data.error) yield put(deleteTicket(payload.id));
  else yield put(buyTicketError(data.error));
}
