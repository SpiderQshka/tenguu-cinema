import { IUser, IUserPayload } from "interfaces/IUser";

// Actions

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_PENDING = "FETCH_USERS_PENDING";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USER_PENDING = "FETCH_USER_PENDING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const USER_REG_REQUEST = "USER_REG_REQUEST";
export const USER_REG = "USER_REG";
export const USER_REG_ERROR = "USER_REG_ERROR";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_LOGOUT = "USER_LOGOUT";

export const USER_EDIT_REQUEST = "USER_EDIT_REQUEST";
export const USER_EDIT = "USER_EDIT";
export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE = "USER_DELETE";

// Action creators

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

export const fetchUsersPending = () => {
  return {
    type: FETCH_USERS_PENDING
  };
};

export const fetchUsersError = (error: any) => {
  return {
    type: FETCH_USERS_ERROR,
    payload: {
      error
    }
  };
};

export const fetchUsersSuccess = (users: IUser[]) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      data: users
    }
  };
};

export const fetchCurrentUserPending = () => {
  return {
    type: FETCH_USER_PENDING
  };
};

export const fetchCurrentUserSuccess = (currentUser: IUser) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      currentUser
    } as IUserPayload
  };
};

export const fetchCurrentUserError = (error: any) => {
  return {
    type: FETCH_USER_ERROR,
    payload: {
      error
    } as IUserPayload
  };
};

export const fetchCurrentUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const userLoginRequest = (formData: FormData) => {
  return {
    type: USER_LOGIN_REQUEST,
    payload: formData
  };
};

export const userRegisterRequest = (formData: FormData) => {
  return {
    type: USER_REG_REQUEST,
    payload: formData
  };
};

export const userRegister = (authToken: string, _id: string) => {
  return {
    type: USER_REG,
    payload: {
      currentUser: {
        authToken,
        _id
      }
    }
  };
};

export const userRegisterError = (error: any) => {
  return {
    type: USER_REG_ERROR,
    payload: {
      error
    } as IUserPayload
  };
};

export const userLogin = (authToken: string, _id: string) => {
  return {
    type: USER_LOGIN,
    payload: {
      currentUser: {
        authToken,
        _id
      }
    }
  };
};

export const userLoginError = (error: any) => {
  return {
    type: USER_LOGIN_ERROR,
    payload: {
      error
    } as IUserPayload
  };
};

export const userLogoutRequest = () => {
  return {
    type: USER_LOGOUT_REQUEST
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const userEdit = () => {
  return {
    type: USER_EDIT
  };
};

export const userEditRequest = (id: string) => {
  return {
    type: USER_EDIT_REQUEST,
    payload: {
      id
    }
  };
};

export const userDelete = () => {
  return {
    type: USER_DELETE
  };
};

export const userDeleteRequest = (id: string) => {
  return {
    type: USER_DELETE_REQUEST,
    payload: {
      id
    }
  };
};
