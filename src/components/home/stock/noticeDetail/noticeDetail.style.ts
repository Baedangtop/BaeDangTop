import styled from "styled-components";

const NoticeDetailStyle = styled.div`
  position: absolute;
  left: calc(50% - 212px);
  width: 424px;
  height: 423px;

  z-index: 30;

  background: #ffffff;
  box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  padding-top: 24px;

  .c {
    height: 214px;
    overflow: scroll;
  }

  .comment {
    width: 338px;
    height: 48px;
    margin: 0 auto;

    margin-bottom: 32px;
    height: 56px;
    display: flex;
    align-items: center;

    .picture {
      margin-right: 18px;
      width: 48px;
      height: 48px;
      border: 1px solid black;
      flex-shrink: 0;
    }
    .write {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #b4b4b4;
    }
  }

  .comment__input {
    padding-top: 10px;
    padding-left: 18px;
    margin: 0 auto;
    margin-top: 16px;
    height: 79px;
    width: 376px;

    border: 1px solid #dbdbdb;
    border-radius: 15px;
    display: flex;
    align-items: center;

    outline: none;
    resize: none;
  }
  .button__container {
    margin: 0 auto;
    margin-top: 18px;
    width: 376px;
    height: 40px;
    display: flex;
    justify-content: space-between;

    .x {
      width: 178px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #000000;
      border-radius: 15px;
    }
    .o {
      width: 180px;
      height: 40px;
      background: #000000;
      border-radius: 15px;
      color: white;
    }
  }
`;

export default NoticeDetailStyle;
