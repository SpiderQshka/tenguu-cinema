// Actions

export const FETCH_HALLS_REQUEST = "FETCH_HALLS_REQUEST";
export const FETCH_HALLS_PENDING = "FETCH_HALLS_PENDING";
export const FETCH_HALLS_SUCCESS = "FETCH_HALLS_SUCCESS";
export const FETCH_HALLS_ERROR = "FETCH_HALLS_ERROR";

// Action creators

export const fetchHallsRequest = () => {
  return {
    type: FETCH_HALLS_REQUEST
  };
};

export const fetchHallsPending = () => {
  return {
    type: FETCH_HALLS_PENDING
  };
};

export const fetchHallsSuccess = (halls: any) => {
  return {
    type: FETCH_HALLS_SUCCESS,
    payload: {
      data: halls
    }
  };
};

export const fetchHallsError = (error: Error) => {
  return {
    type: FETCH_HALLS_ERROR,
    payload: {
      error
    }
  };
};
