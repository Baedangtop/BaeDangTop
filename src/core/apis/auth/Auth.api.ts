import { LoginParam, RegisterParam } from "./auth.param";
import axios from "axios";
import config from "../../config/config";

class Auth {
  public async login(param: LoginParam): Promise<any> {
    // login 통신, 세션 정보 저장
    const { email, password } = param;
    const data = await axios.post(`${config.config}/auth/login`, {
      email,
      password,
    });

    await localStorage.setItem("Authorization", data.data.token);
    return data.data;
  }

  public async register(param: RegisterParam): Promise<any> {
    // register 통신
    const { email, name, password } = param;
    const data = await axios.post(`${config.config}/auth/signup`, {
      name,
      email,
      password,
    });
    console.log(data);

    return data ? true : false;
  }
}

export default new Auth();
