// Actions

export const FETCH_ADMIN_PAGE_PENDING = "FETCH_ADMIN_PAGE_PENDING";
export const FETCH_ADMIN_PAGE_SUCCESS = "FETCH_ADMIN_PAGE_SUCCESS";
export const FETCH_ADMIN_PAGE_ERROR = "FETCH_ADMIN_PAGE_ERROR";
export const FETCH_ADMIN_PAGE_REQUEST = "FETCH_ADMIN_PAGE_REQUEST";

// Action creators

export const fetchAdminPagePending = () => {
  return {
    type: FETCH_ADMIN_PAGE_PENDING
  };
};

export const fetchAdminPageSuccess = () => {
  return {
    type: FETCH_ADMIN_PAGE_SUCCESS
  };
};

export const fetchAdminPageError = (error: Error) => {
  return {
    type: FETCH_ADMIN_PAGE_ERROR,
    payload: {
      error
    }
  };
};

export const fetchAdminPageRequest = () => {
  return {
    type: FETCH_ADMIN_PAGE_REQUEST
  };
};
