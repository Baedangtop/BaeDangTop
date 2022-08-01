import React, { useCallback, useRef } from "react";
import RegisterInput from "./RegisterInput";
import Auth from "../../core/apis/auth/Auth.api";

// 비제어 컴포넌트 방식
const RegisterForm = () => {
  const nameRef = useRef<HTMLFormElement>();
  const idRef = useRef<HTMLFormElement>();
  const pwRef = useRef<HTMLFormElement>();
  const pwCheckRef = useRef<HTMLFormElement>();

  const SendRegisterRequest = useCallback((e: any) => {
    e.preventDefault();
    Auth.login({ id: idRef.current.value, pw: idRef.current.value });
  }, []);

  return (
    <>
      <form>
        <RegisterInput type="password" title="비밀번호" refs={nameRef} />
        <RegisterInput type="text" title="아이디" refs={idRef} />
        <RegisterInput type="password" title="비밀번호" refs={pwRef} />
        <RegisterInput
          type="password"
          title="비밀번호 확인"
          refs={pwCheckRef}
        />
        <button onClick={SendRegisterRequest}>로그인</button>
      </form>
      <p className="p__navigation--login">이미 회원이신가요? 로그인</p>
    </>
  );
};

export default RegisterForm;
