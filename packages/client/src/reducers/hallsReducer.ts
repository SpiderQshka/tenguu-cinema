import {
  FETCH_HALLS_ERROR,
  FETCH_HALLS_PENDING,
  FETCH_HALLS_SUCCESS
} from "../actions/halls";

const initialState = {
  pending: false,
  halls: [],
  error: null
};

export const hallsReducer = (
  state = initialState,
  action: { type: string; halls?: any; error?: Error }
) => {
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
        halls: action.halls
      };
    case FETCH_HALLS_ERROR:
      console.log("Error");
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export const getHalls = (state: any) => state.halls;
export const getHallsPending = (state: any) => state.halls;
export const getHallsError = (state: any) => state.halls;
