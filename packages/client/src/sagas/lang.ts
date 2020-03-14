import { put, call, takeEvery } from "redux-saga/effects";

import { getData } from "APIServices/CRUD";
import {
  fetchTranslationsError,
  fetchTranslationsSuccess,
  FETCH_TRANSLATIONS_REQUEST
} from "actions/lang";

export function* watchFetchTranslationsInfo() {
  yield takeEvery(FETCH_TRANSLATIONS_REQUEST, fetchTranslationsInfo);
}

export function* fetchTranslationsInfo() {
  const data = yield call(() => getData("api/translations"));
  if (data.error) yield put(fetchTranslationsError(data.error));
  else {
    const formattedResultRu = {} as any,
      formattedResultEn = {} as any;
    data.body.forEach((translation: any) => {
      formattedResultRu[translation.id] = translation.ru;
      formattedResultEn[translation.id] = translation.en;
    });
    yield put(
      fetchTranslationsSuccess({ ru: formattedResultRu, en: formattedResultEn })
    );
  }
}
