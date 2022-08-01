import React, { memo } from "react";

const LoginInput = memo(({ type, title, refs }: any) => {
  return (
    <p className="p__login--input-text">
      <label htmlFor={type + title}>{title}</label>
      <input type={type} id={type + title} ref={refs} />
    </p>
  );
});

export default LoginInput;
