import axios, { AxiosError } from "axios";
import config from "../config/config";

export const customAxios = axios.create({
  baseURL: config.config,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
  },
});

// customAxios.interceptors.request.use(
//   function (config) {
//     const accessToken = localStorage.getItem("Authorization");
//     if (accessToken) {
//       config.headers = {
//         Authorization: `Bearer ${accessToken}`,
//       };
//     }
//     return config;
//   },
//   function (error: AxiosError) {
//     return Promise.reject(error);
//   }
// );
