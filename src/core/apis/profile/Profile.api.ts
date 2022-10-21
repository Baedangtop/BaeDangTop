import { customAxios } from "../../util/customAxios";

class Profile {
  public async getProfile() {
    const { data } = await customAxios.get("/auth");
    return data;
  }
  public async getFavorite() {
    const { data } = await customAxios.get("/users/favorites");
    return data;
  }
}

export default new Profile();
