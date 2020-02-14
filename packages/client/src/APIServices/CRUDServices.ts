export const getData = async (url: string, headers = {}): Promise<void> => {
  const response: Response = await fetch(url, { headers });
  return response.json();
};

export const postData = async (
  url: string,
  formData: any,
  headers = {}
): Promise<any> => {
  const response: Response = await fetch(url, {
    method: "POST",
    body: new URLSearchParams([...formData]),
    headers
  });
  if (response.status !== 200) return response.text();
  return response.json();
};
