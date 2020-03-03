import {
  FETCH_HALLS_ERROR,
  FETCH_HALLS_PENDING,
  FETCH_HALLS_SUCCESS
} from "../actions/halls";

import { IHall, IHallAction } from "interfaces/IHall";

const initialState = {
  pending: false,
  data: [] as IHall[],
  error: null
};

export const hallsReducer = (state = initialState, action: IHallAction) => {
  switch (action.type) {
    case FETCH_HALLS_PENDING:
      console.log("Pending");
      return {
        ...state,
        pending: true
      };
    case FETCH_HALLS_SUCCESS:
      console.log("Success");
      return {
        ...state,
        data: action.payload.data,
        pending: false
      };
    case FETCH_HALLS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.payload.error,
        pending: false
      };
    default:
      return state;
  }
};
