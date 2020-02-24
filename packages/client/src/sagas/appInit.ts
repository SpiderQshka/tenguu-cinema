// Users, page..
import { put, all, call, race, takeEvery } from "redux-saga/effects";

import { fetchUserInfo } from "./users";
import { fetchPageInfo } from "./page";
import { fetchCurrentUserRequest, FETCH_USER_REQUEST } from "actions/users";
import { fetchPageRequest } from "actions/page";

export function* fetchAppInfo() {
  yield call(fetchCurrentUserRequest);
}
