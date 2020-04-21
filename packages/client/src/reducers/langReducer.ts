import { CHANGE_LANG, FETCH_TRANSLATIONS_SUCCESS } from "actions/lang";
import { ILangPayload, ILangs } from "interfaces/ILang";

const initialState: ILangPayload = {
  currentLang: (window.localStorage.getItem("lang") || "ru") as ILangs,
  translations: {} as any,
};

export const langReducer = (state = initialState, action: any) => {
  const payload = action.payload as ILangPayload;
  switch (action.type) {
    case CHANGE_LANG:
      window.localStorage.setItem("lang", payload.currentLang);
      return {
        ...state,
        currentLang: payload.currentLang,
      };
    case FETCH_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        translations: action.payload.data,
      };
    default:
      return state;
  }
};
