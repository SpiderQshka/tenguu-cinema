import { getData, IPostData, IGetData, tokenFetch } from "./CRUD";
import { IUser } from "interfaces/IUser";

export interface IPostUser extends IPostData {
  body?: IUser;
  authToken: string | null;
}

export interface IGetUser extends IPostData {
  body?: IUser;
  authToken: string | null;
}

export const postUserData = async (
  url: string,
  formData: any,
  headers = new Headers()
): Promise<IPostData> => {
  const response: Response = await tokenFetch(url, {
    method: "POST",
    body: new URLSearchParams([...formData]),
    headers
  });
  return response.status < 400
    ? {
        body: await response.json(),
        headers: response.headers
      }
    : {
        error: {
          code: response.status,
          message: response.statusText
        },
        headers: response.headers
      };
};

export const registerUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postUserData("api/auth/register", formData);
  return {
    ...data,
    authToken: data.headers.get("auth-token")
  };
};

export const loginUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postUserData("api/auth/login", formData);
  return {
    ...data,
    authToken: data.headers.get("auth-token")
  };
};

export const getUserInfo = async (): Promise<IGetUser> => {
  const userId = window.localStorage.getItem("userId") || "";
  try {
    const data = await getData(`api/users/${userId}`, [401]);
    return {
      ...data,
      authToken: window.localStorage.getItem("auth-token")
    };
  } catch (e) {
    throw new Error(e);
  }
};
