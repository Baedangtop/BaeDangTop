import React from "react";
import LoginInput from "./LoginInput";

const LoginForm = () => {
  return (
    <>
      <form>
        <LoginInput type="text" title="아이디" />
        <LoginInput type="password" title="비밀번호" />
        <button>로그인</button>
      </form>
      <p className="p__navigation--register">
        아직 회원이 아니신가요? 회원가입
      </p>
    </>
  );
};

export default LoginForm;
