import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";


const BASE_URL = import.meta.env.VITE_BASE_URL;
const JWT_TOKEN = import.meta.env.VITE_JWT_TOKEN;

export const conduitApi = axios.create();

conduitApi.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem(JWT_TOKEN); // token stored under JWT_TOKEN key
  request.baseURL = BASE_URL;

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return request as InternalAxiosRequestConfig;
});

conduitApi.interceptors.response.use(
  (res) => res,
  (error) => {
    const data = error.response?.data;
    const normalizedErrors = data?.errors ?? {
      general: [data?.message || "Unknown error"],
    };

    return Promise.reject({
      ...error,
      errors: normalizedErrors,
    });
  }
);
