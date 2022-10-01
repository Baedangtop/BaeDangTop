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

  const SendRegisterRequest = useCallback(async (e: any) => {
    e.preventDefault();
    if (pwRef.current.value !== pwCheckRef.current.value) {
      alert("비밀번호와 비밀번호 확인이 다릅니다");
      return;
    }
    const bool = await Auth.register({
      name: nameRef.current.value,
      email: idRef.current.value,
      password: pwRef.current.value,
    });
    console.log(bool);
    if (bool) {
      alert(bool);
    }
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
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          로그인
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
