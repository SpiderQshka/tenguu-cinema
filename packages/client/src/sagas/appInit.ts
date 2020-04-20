import { put, all } from "redux-saga/effects";

import { fetchCurrentUserRequest } from "actions/users";
import { fetchPageRequest } from "actions/page";

export function* fetchAppInfo() {
  yield all([put(fetchPageRequest()), put(fetchCurrentUserRequest())]);
}
