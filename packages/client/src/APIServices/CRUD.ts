import { fetchUtils, HttpError } from "react-admin";
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

const fetchJson = async (url: string, options: any) => {
  if (options.body) {
    var formData = new FormData();
    options.body = JSON.parse(options.body);
    for (let key in options.body) {
      console.log(key, options.body[key]);
      if (key === "id" || key === "_id") continue;
      else formData.append(key, options.body[key]);
    }
    options.body = formData;
  }

  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: "application/json"
    });
  if (
    !requestHeaders.has("Content-Type") &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(url, {
    ...options,
    headers: requestHeaders
  });

  const text = await response.text();
  const o = {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text
  };
  let status = o.status,
    statusText = o.statusText,
    headers = o.headers,
    body = o.body;
  let json;
  try {
    json = JSON.parse(body);
  } catch (e) {
    json = response.json();
  }
  if (status < 200 || status >= 300) {
    return Promise.reject(new HttpError(json || statusText, status, json));
  }
  return Promise.resolve({
    status,
    headers,
    body,
    json
  });
};

export const adminPageTokenFetch = async (
  url: string,
  options: any = {}
): Promise<any> => {
  const token = window.localStorage.getItem("auth-token") || "";
  if (!options.headers) {
    options.headers = new Headers({ "auth-token": token });
  }
  return await fetchJson(url, options);
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

export const putData = async (
  url: string,
  formData: any,
  headers = new Headers(),
  ignoreCodes: number[] = []
): Promise<IPostData> => {
  const response: Response = await tokenFetch(url, {
    method: "PUT",
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
