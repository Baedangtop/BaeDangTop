import axios, { AxiosError } from "axios";
import config from "../config/config";

export const customAxios = axios.create({
  baseURL: config.config,
});

customAxios.interceptors.request.use(
  async (config: any) => {
    const accessToken = localStorage.getItem("Authorization");
    accessToken &&
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
      });
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);
