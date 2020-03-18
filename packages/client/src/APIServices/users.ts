import { getData, IPostData, postData } from "./CRUD";
import { IUser } from "interfaces/IUser";

export interface IPostUser extends IPostData {
  body?: IUser;
}

export interface IGetUser extends IPostData {
  body?: IUser;
}

export const registerUser = async (json: JSON): Promise<IPostUser> => {
  const data = await postData("api/auth/register", json);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const loginUser = async (json: JSON): Promise<IPostUser> => {
  const data = await postData("api/auth/login", json);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const getUserInfo = async (): Promise<IGetUser> => {
  const userId = window.localStorage.getItem("userId") || "";
  const data = await getData(`api/users/${userId}`, [401]);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};
