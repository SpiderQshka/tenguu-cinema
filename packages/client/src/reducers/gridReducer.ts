import { SET_LINE_ACTIVE } from "actions/grid";

const initialState = {
  activeLineIndex: null
};

export const gridReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LINE_ACTIVE:
      return {
        ...state,
        activeLineIndex: action.payload.index
      };
    default:
      return state;
  }
};
