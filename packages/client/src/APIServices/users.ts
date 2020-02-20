import { getData, postData, IPostData, IGetData } from "./CRUD";
import { IUser } from "interfaces/IUser";

export interface IPostUser extends IPostData {
  body?: IUser;
  authToken: string | null;
}

export const registerUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postData("api/auth/register", formData);
  return {
    ...data,
    authToken: data.headers.get("auth-token")
  };
};

export const loginUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postData("api/auth/login", formData);
  return {
    ...data,
    authToken: data.headers.get("auth-token")
  };
};

export const getUserInfo = async (): Promise<IGetData> => {
  const userId = window.localStorage.getItem("userId") || "";
  const data = await getData(`api/users/${userId}`);
  return data;
};
