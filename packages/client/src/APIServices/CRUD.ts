export interface IGetData {
  error?: { code: number; message: string };
  body?: any;
  headers: Headers;
}

export interface IPostData {
  error?: { code: number; message: null | string };
  body?: any;
  headers: Headers;
}

export const tokenFetch = async (
  url: string,
  options: any = {}
): Promise<Response> => {
  const token = window.localStorage.getItem("auth-token") || "";
  let headers = options.headers;
  if (headers) console.log(!headers.has("auth-token"));
  if (headers && !headers.has("auth-token"))
    headers.append("auth-token", token);
  else headers = { "auth-token": token };
  return await fetch(url, {
    ...options,
    headers
  });
};

export const getData = async (url: string): Promise<IGetData> => {
  const response: Response = await tokenFetch(url);
  return response.status < 400
    ? response.json()
    : {
        error: {
          code: response.status,
          message: response.statusText
        },
        headers: response.headers
      };
};

export const postData = async (
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
    ? response.json()
    : {
        error: {
          code: response.status,
          message: response.statusText
        },
        headers: response.headers
      };
};
