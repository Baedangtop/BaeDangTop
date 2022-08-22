import axios from "axios";

export const customAxios = axios.create({
  baseURL: `http://10.80.162.216:8080`,
  headers: {
    // access_token: localStorage.get("access_token"),
  },
});
