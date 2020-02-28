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
  headers = new Headers(),
  ignoreCodes: number[] = []
): Promise<IPostData> => {
  const response: Response = await tokenFetch(url, {
    method: "POST",
    body: new URLSearchParams([...formData]),
    headers
  });

  if (!(response.status < 400 || ignoreCodes.includes(response.status)))
    throw await response.json();
  return {
    body: response.status < 400 ? await response.json() : {},
    headers: response.headers
  };
};

export const registerUser = async (formData: FormData): Promise<IPostUser> => {
  try {
    const data = await postUserData("api/auth/register", formData);
    return {
      ...data,
      authToken: data.headers.get("auth-token")
    };
  } catch (e) {
    throw e;
  }
};

export const loginUser = async (formData: FormData): Promise<IPostUser> => {
  try {
    const data = await postUserData("api/auth/login", formData);
    return {
      ...data,
      authToken: data.headers.get("auth-token")
    };
  } catch (e) {
    throw e;
  }
};

export const getUserInfo = async (): Promise<IGetUser> => {
  try {
    const userId = window.localStorage.getItem("userId") || "";
    const data = await getData(`api/users/${userId}`, [401]);

    return {
      ...data,
      authToken: window.localStorage.getItem("auth-token")
    };
  } catch (e) {
    throw e;
  }
};
