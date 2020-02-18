import { put, takeEvery, all } from "redux-saga/effects";

import { fetchUserInfo } from "./users";

function* helloSaga() {
  console.log("Saga");
}

export function* rootSaga() {
  yield all([helloSaga(), fetchUserInfo()]);
}
