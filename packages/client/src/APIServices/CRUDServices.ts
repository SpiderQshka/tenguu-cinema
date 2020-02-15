export interface IGetData {
  error?: { code: number; message: null | string };
  body?: any;
  headers: Headers;
}

export interface IPostData {
  error?: { code: number; message: null | string };
  body?: any;
  headers: Headers;
}

export const getData = async (
  url: string,
  token: string | null
): Promise<IGetData> => {
  const response: Response = await fetch(url, {
    headers: { "auth-token": token ? token : "" }
  });
  return response.json();
};

export const postData = async (
  url: string,
  formData: any,
  headers?: Headers
): Promise<IPostData> => {
  const response: Response = await fetch(url, {
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
