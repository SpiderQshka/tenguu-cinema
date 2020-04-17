import {
  FETCH_HALLS_ERROR,
  FETCH_HALLS_PENDING,
  FETCH_HALLS_SUCCESS,
} from "../actions/halls";

import { IHall, IHallAction } from "interfaces/IHall";

const initialState = {
  pending: true,
  data: [] as IHall[],
  error: null,
};

export const hallsReducer = (state = initialState, action: IHallAction) => {
  switch (action.type) {
    case FETCH_HALLS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_HALLS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pending: false,
      };
    case FETCH_HALLS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        pending: false,
      };
    default:
      return state;
  }
};
