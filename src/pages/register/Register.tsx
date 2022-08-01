import React from "react";
import RegisterStyle from "./register.style";
import logo from "../../assets/images/logo.png";
import RegisterForm from "../../components/register/RegisterForm";

const Register = () => {
  return (
    <RegisterStyle>
      <img src={logo} alt="logo_image" />
      <RegisterForm />
    </RegisterStyle>
  );
};

export default Register;
