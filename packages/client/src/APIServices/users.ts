import { getData, IPostData, tokenFetch } from "./CRUD";
import { IUser } from "interfaces/IUser";

export interface IPostUser extends IPostData {
  body?: IUser;
}

export interface IGetUser extends IPostData {
  body?: IUser;
}

export interface IGetUsers extends IPostData {
  body?: IUser[];
}

export const postUserData = async (
  url: string,
  formData: any,
  headers = new Headers(),
  ignoreCodes: number[] = []
): Promise<IPostData> => {
  const response: Response = await tokenFetch(url, {
    method: "POST",
    body: formData,
    headers
  });

  if (!(response.status < 400 || ignoreCodes.includes(response.status))) {
    try {
      return {
        body: {},
        error: {
          message: await response.json(),
          code: response.status
        },
        headers: response.headers
      };
    } catch (e) {
      return {
        body: {},
        error: {
          message: response.statusText,
          code: response.status
        },
        headers: response.headers
      };
    }
  }
  try {
    return {
      body: await response.json(),
      headers: response.headers
    };
  } catch (e) {
    return {
      body: response,
      headers: response.headers
    };
  }
};

export const registerUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postUserData("api/auth/register", formData);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const loginUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postUserData("api/auth/login", formData);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const getUserInfo = async (): Promise<IGetUser> => {
  const userId = window.localStorage.getItem("userId");
  const data = await getData(`api/users/${userId}`, [401]);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const getUsers = async (): Promise<IGetUser> => {
  const data = await getData(`api/users/`);
  return {
    ...data
  };
};
