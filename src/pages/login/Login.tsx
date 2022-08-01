import React from "react";
import LoginForm from "../../components/login/LoginForm";
import LoginStyle from "./login.style";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <LoginStyle>
      <img src={logo} alt="logo_image" />
      <LoginForm />
    </LoginStyle>
  );
};

export default Login;
