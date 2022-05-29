export async function doRequest(
  url: string,
  method = 'GET',
  body: any = null,
  token: string = ''
): Promise<any> {
  const options: any = {
    method: method,
    headers: {
      // 'Content-Type': 'application/json;charset=utf-8'
    },
  };
  if (body !== null) {
    options.body = body;
  }
  if (token !== '') {
    options.headers.Authorization = 'Bearer ' + token;
  }
  const result = await fetch(url, options);
  if (result.ok) {
    return await result.json();
  }
  else {
    alert('Request error - ' + url);
    return null;
  }
}
