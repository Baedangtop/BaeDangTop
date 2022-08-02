import axios from "axios";

export const customAxios = axios.create({
  baseURL: `http://192.168.1.175:8080`,
  headers: {
    // access_token: localStorage.get("access_token"),
  },
});
