import { put, call, takeEvery } from "redux-saga/effects";

import { getData, postData } from "APIServices/CRUD";
import {
  FETCH_TICKETS_REQUEST,
  fetchTicketsPending,
  fetchTicketsError,
  fetchTicketsSuccess,
  BUY_TICKET_REQUEST,
  buyTicketError,
  buyTicket
} from "actions/tickets";
import { addTicketToUser } from "actions/users";

export function* watchFetchTicketsInfo() {
  yield takeEvery(FETCH_TICKETS_REQUEST, fetchTicketsInfo);
}

export function* watchBuyTicketRequest() {
  yield takeEvery(BUY_TICKET_REQUEST, buyTicketSaga);
}

export function* fetchTicketsInfo() {
  yield put(fetchTicketsPending());
  const data = yield call(() => getData("api/tickets"));
  if (data.error) yield put(fetchTicketsError(data.error));
  else yield put(fetchTicketsSuccess(data.body));
}

export function* buyTicketSaga({ payload }: any) {
  const data = yield call(() => postData("api/tickets", payload.data));
  console.log(data.body);
  if (data.error) yield put(buyTicketError(data.error));
  else {
    yield put(addTicketToUser(data.body));
    yield put(buyTicket(data.body));
  }
}
