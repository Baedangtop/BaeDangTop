import { LoginParam, RegisterParam } from "./auth.param";
import axios from "axios";

class Auth {
  public async login(param: LoginParam): Promise<any> {
    // login 통신, 세션 정보 저장
    const { email, password } = param;
    const data = await axios.post("http://192.168.1.175:8080/auth/login", {
      email,
      password,
    });

    console.log(data);

    return true;
  }

  public async register(param: RegisterParam): Promise<any> {
    // register 통신
    const { email, name, password } = param;
    const data = await axios.post("http://192.168.1.175:8080/auth/signup", {
      name,
      email,
      password,
    });
    console.log(data);

    return data ? true : false;
  }
}

export default new Auth();
