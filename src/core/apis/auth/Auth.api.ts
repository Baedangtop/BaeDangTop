import { LoginParam, RegisterParam } from "./auth.param";

class Auth {
  public async login(param: LoginParam): Promise<any> {
    // login 통신, 세션 정보 저장
    return param;
  }

  public async register(param: RegisterParam): Promise<any> {
    // register 통신
    return param;
  }
}

export default new Auth();
