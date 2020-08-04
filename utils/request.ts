import axios from "axios";

type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

const request = async (
  baseUrl: string,
  endpoind: string,
  method: Method = "GET",
  options: Record<string, any> = {}
) => {
  const { headers, data, params } = options;
  try {
    console.log(
      "AXIOS REQUEST: ",
      method,
      `${baseUrl}${endpoind}`,
      data,
      params
    );
    const response = await axios({
      method,
      url: `${baseUrl}${endpoind}`,
      headers,
      data,
      params,
    });

    console.log(
      "AXIOS RESPONSE: ",
      method,
      `${baseUrl}${endpoind}`,
      data,
      params,
      response.data
    );

    return response.data;
  } catch (error) {
    console.log({ error });
  }
};

export default request;
