// Actions
import { ILangPayload } from "interfaces/IState";
export const CHANGE_LANG = "CHANGE_LANG";
export const FETCH_TRANSLATIONS_REQUEST = "FETCH_TRANSLATIONS_REQUEST";
export const FETCH_TRANSLATIONS_SUCCESS = "FETCH_TRANSLATIONS_SUCCESS";
export const FETCH_TRANSLATIONS_ERROR = "FETCH_TRANSLATIONS_ERROR";

// Action creators

export const changeLang = (lang: string) => {
  return {
    type: CHANGE_LANG,
    payload: {
      currentLang: lang
    } as ILangPayload
  };
};

export const fetchTranslationsRequest = () => {
  return {
    type: FETCH_TRANSLATIONS_REQUEST
  };
};

export const fetchTranslationsSuccess = (translations: any) => {
  return {
    type: FETCH_TRANSLATIONS_SUCCESS,
    payload: {
      data: translations
    }
  };
};

export const fetchTranslationsError = (error: Error) => {
  return {
    type: FETCH_TRANSLATIONS_ERROR,
    payload: {
      error
    }
  };
};
