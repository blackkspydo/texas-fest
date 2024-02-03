import axios from "axios";
import { getToken } from "./utils";

const backendClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL!
});

backendClient.interceptors.request.use(async function (config) {
  try {
    const token = getToken();
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    } as any;
  } catch (error) {
    console.error("Error obtaining auth token in interceptor, ", error);
  }
  return config;
});

backendClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  async (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      localStorage.clear();
      window.location.href = `/login?expired=true`;
    } else {
      return Promise.resolve(error.response);
    }
  }
);

export { backendClient };
