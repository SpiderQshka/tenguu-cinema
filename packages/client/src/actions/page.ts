// Actions

export const FETCH_PAGE_PENDING = "FETCH_PAGE_PENDING";
export const FETCH_PAGE_SUCCESS = "FETCH_PAGE_SUCCESS";
export const FETCH_PAGE_ERROR = "FETCH_PAGE_ERROR";
export const FETCH_PAGE_REQUEST = "FETCH_PAGE_REQUEST";

// Action creators

export const fetchPagePending = () => {
  return {
    type: FETCH_PAGE_PENDING
  };
};

export const fetchPageSuccess = () => {
  return {
    type: FETCH_PAGE_SUCCESS
  };
};

export const fetchPageError = (error: Error) => {
  return {
    type: FETCH_PAGE_ERROR,
    payload: {
      error
    }
  };
};

export const fetchPageRequest = () => {
  return {
    type: FETCH_PAGE_REQUEST
  };
};
