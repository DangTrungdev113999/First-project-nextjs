import axios from "axios";

const request = async (url: string, options: Record<string, any> = {}) => {
  const { headers, data, params, method = "GET" } = options;
  try {
    console.log("AXIOS REQUEST: ", {
      method,
      url,
      data,
      params,
    });
    const response = await axios({
      method,
      url,
      headers,
      data,
      params,
    });

    console.log("AXIOS RESPONSE: ", {
      method,
      url,
      data,
      params,
      dataResponse: response.data,
    });

    return response.data;
  } catch (e) {
    console.log("AXIOS ERROR", e.message);
  }
};

export default request;
