import styled from "styled-components";

const RegisterStyle = styled.div`
  height: 100vh;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 279px;
    margin-bottom: 59px;
  }
  .p__navigation--login {
    margin-top: 40px;
    color: #b4b4b4;
  }
  form {
    width: 430px;
    margin: 0 auto;
    .p__register--input-text {
      height: 102px;

      display: flex;
      flex-direction: column;

      margin-bottom: 24px;

      label {
        color: #b4b4b4;
      }

      input {
        height: 68px;
        border: 1px solid #b4b4b4;
        border-radius: 20px;

        outline: none;
      }
    }

    button {
      width: 430px;
      height: 68px;
      background: #000000;
      border-radius: 20px;

      font-size: 24px;
      color: #ffffff;

      margin-top: 51px;
    }
  }
`;

export default RegisterStyle;
