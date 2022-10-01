import { LoginParam, RegisterParam } from "./auth.param";
import axios from "axios";
import config from "../../config/config";

class Auth {
  public async login(param: LoginParam): Promise<any> {
    // login 통신, 세션 정보 저장
    try {
      const { email, password } = param;
      const data = await axios.post(`${config.config}/auth/login`, {
        email,
        password,
      });
      await localStorage.setItem("Authorization", data.data.token);

      return false;
    } catch (e) {
      switch (e.response.status) {
        case 400:
          return "비밀번호가 잘못 되었습니다";
        case 404:
          return "존재하지 않는 유저입니다";
        case 500:
          return "서버 오류입니다";
      }
    }
  }

  public async register(param: RegisterParam): Promise<any> {
    // register 통신
    try {
      const { email, name, password } = param;
      const data = await axios.post(`${config.config}/auth/signup`, {
        name,
        email,
        password,
      });

      return "성공적으로 회원가입되었습니다, 로그인으로 돌아가 주세요";
    } catch (e) {
      switch (e.response.status) {
        case 400:
          return "아이디를 이메일 형식으로 해주세요";
        case 409:
          return "이미 존재하는 아이디입니다";
        case 500:
          return "서버 오류입니다";
      }
    }
  }
}

export default new Auth();
