import React, { useCallback, useRef } from "react";
import LoginInput from "./LoginInput";
import Auth from "../../core/apis/auth/Auth.api";

// 비제어 컴포넌트 방식
const LoginForm = () => {
  const idRef = useRef<HTMLFormElement>();
  const pwRef = useRef<HTMLFormElement>();

  const SendLoginRequest = useCallback((e: any) => {
    e.preventDefault();
    Auth.login({ id: idRef.current.value, pw: idRef.current.value });
  }, []);

  return (
    <>
      <form>
        <LoginInput type="text" title="아이디" refs={idRef} />
        <LoginInput type="password" title="비밀번호" refs={pwRef} />
        <button onClick={SendLoginRequest}>로그인</button>
      </form>
      <p className="p__navigation--register">
        아직 회원이 아니신가요? 회원가입
      </p>
    </>
  );
};

export default LoginForm;
