import React from "react";

const LoginInput = ({ type, title }: any) => {
  return (
    <p className="p__login--input-text">
      <label htmlFor={type + title}>{title}</label>
      <input type={type} id={type + title} />
    </p>
  );
};

export default LoginInput;
