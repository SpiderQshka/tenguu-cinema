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

const tokenFetch = async (
  url: string,
  options: any = {}
): Promise<Response> => {
  const token = window.localStorage.getItem("auth-token") || "";
  return await fetch(url, {
    ...options,
    headers: options.headers
      ? options.headers.append("auth-token", token)
      : { "auth-token": token }
  });
};

export const getData = async (url: string): Promise<IGetData> => {
  const response: Response = await tokenFetch(url);
  return response.status === 200
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
  headers?: Headers
): Promise<IPostData> => {
  const response: Response = await tokenFetch(url, {
    method: "POST",
    body: new URLSearchParams([...formData]),
    headers
  });
  if (response.status !== 200) {
    const message = await response.text();
    return {
      error: { code: response.status, message },
      headers: response.headers
    };
  }

  const body = await response.json();

  return { body, headers: response.headers };
};
