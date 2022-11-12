import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import LoginInput from "./LoginInput";
import Auth from "../../core/apis/auth/Auth.api";
import { LOGIN } from "../../reducers/login/loginAction";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

// 비제어 컴포넌트 방식
const LoginForm = () => {
  const dispatch = useDispatch();

  const idRef = useRef<HTMLFormElement>();
  const pwRef = useRef<HTMLFormElement>();

  const SendLoginRequest = useCallback(async (e: any) => {
    e.preventDefault();
    const bool = await Auth.login({
      email: idRef.current.value,
      password: pwRef.current.value,
    });
    if (bool) {
      alert(bool);
      return;
    }

    dispatch({
      type: LOGIN,
      data: bool.name,
    });
  }, []);

  const googleLogin = async (credential) => {
    console.log(credential);
    const response = await Auth.googleLogin(credential.credential);

    if (response) {
      alert("로그인에 실패하였습니다.");
      return;
    }

    dispatch({
      type: LOGIN,
      data: response,
    });
  };

  return (
    <>
      <form>
        <LoginInput type="text" title="아이디" refs={idRef} />
        <LoginInput type="password" title="비밀번호" refs={pwRef} />
        <button onClick={SendLoginRequest}>로그인</button>
      </form>
      <GoogleLogin
        onSuccess={(res) => googleLogin(res)}
        onError={() => console.log("실패")}
      ></GoogleLogin>
      <p className="p__navigation--register">
        아직 회원이 아니신가요?{" "}
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          회원가입
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
