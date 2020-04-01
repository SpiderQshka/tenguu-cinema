import { CHANGE_LANG, FETCH_TRANSLATIONS_SUCCESS } from "actions/lang";
import { ILangPayload } from "interfaces/ILang";

const initialState = {
  currentLang: window.localStorage.getItem("lang") || "ru",
  translations: {} as any
};

export const langReducer = (state = initialState, action: any) => {
  const payload = action.payload as ILangPayload;
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        currentLang: payload.currentLang
      };
    case FETCH_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        translations: action.payload.data
      };
    default:
      return state;
  }
};
