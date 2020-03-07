import { getData, IPostData, postData, putData } from "./CRUD";
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

export const registerUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postData("api/auth/register", formData);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};

export const loginUser = async (formData: FormData): Promise<IPostUser> => {
  const data = await postData("api/auth/login", formData);
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

export const editUser = async (
  formData: FormData,
  id: string
): Promise<IPostUser> => {
  const data = await putData(`api/users/${id}`, formData);
  return {
    ...data,
    body: {
      ...data.body,
      authToken: data.headers.get("auth-token")
    }
  };
};
