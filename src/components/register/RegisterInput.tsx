import React, { memo } from "react";

const RegisterInput = memo(({ type, title, refs }: any) => {
  return (
    <p className="p__register--input-text">
      <label htmlFor={type + title}>{title}</label>
      <input type={type} id={type + title} ref={refs} />
    </p>
  );
});

export default RegisterInput;
