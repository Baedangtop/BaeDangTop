import React, { useCallback, useRef } from "react";
import RegisterInput from "./RegisterInput";
import Auth from "../../core/apis/auth/Auth.api";
import { Link } from "react-router-dom";

// 비제어 컴포넌트 방식
const RegisterForm = () => {
  const nameRef = useRef<HTMLFormElement>();
  const idRef = useRef<HTMLFormElement>();
  const pwRef = useRef<HTMLFormElement>();
  const pwCheckRef = useRef<HTMLFormElement>();

  const SendRegisterRequest = useCallback((e: any) => {
    e.preventDefault();
    const bool = Auth.register({
      name: nameRef.current.value,
      email: idRef.current.value,
      password: pwRef.current.value,
    });
    console.log(bool);
  }, []);

  return (
    <>
      <form>
        <RegisterInput type="text" title="이름" refs={nameRef} />
        <RegisterInput type="text" title="아이디" refs={idRef} />
        <RegisterInput type="password" title="비밀번호" refs={pwRef} />
        <RegisterInput
          type="password"
          title="비밀번호 확인"
          refs={pwCheckRef}
        />
        <button onClick={SendRegisterRequest}>회원가입</button>
      </form>
      <p className="p__navigation--login">
        이미 회원이신가요?
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          로그인
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
