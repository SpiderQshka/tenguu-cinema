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
  if (headers && !headers.has("auth-token"))
    headers.append("auth-token", token);
  else headers = { "auth-token": token };
  return await fetch(url, {
    ...options,
    headers
  });
};

export const getData = async (
  url: string,
  ignoreCodes: number[] = []
): Promise<IGetData> => {
  const response: Response = await tokenFetch(url);
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

export const postData = async (
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
