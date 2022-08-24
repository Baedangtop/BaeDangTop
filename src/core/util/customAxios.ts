import axios, { AxiosError } from "axios";

export const customAxios = axios.create({
  baseURL: `http://10.80.161.153:8080`,
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
