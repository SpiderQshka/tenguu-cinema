// Actions
import { ILangPayload } from "interfaces/IState";
export const CHANGE_LANG = "CHANGE_LANG";

// Action creators

export const changeLang = (lang: string) => {
  return {
    type: CHANGE_LANG,
    payload: {
      currentLang: lang
    } as ILangPayload
  };
};
