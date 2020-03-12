import { CHANGE_LANG } from "actions/lang";
import { ILangPayload } from "interfaces/IState";

const initialState = {
  currentLang: "ru"
};

export const langReducer = (state = initialState, action: any) => {
  const payload = action.payload as ILangPayload;
  switch (action.type) {
    case CHANGE_LANG:
      return {
        ...state,
        currentLang: payload.currentLang
      };
    default:
      return state;
  }
};
