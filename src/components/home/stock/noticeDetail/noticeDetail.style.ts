import styled from "styled-components";

const NoticeDetailStyle = styled.div`
  margin-top: 8px;
  padding-bottom: 24px;

  .comment {
    margin-bottom: 20px;
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
    margin-top: 16px;
    height: 48px;
    border: 1px solid #b4b4b4;
    border-radius: 15px;
    display: flex;
    align-items: center;
    overflow: hidden;

    input {
      width: 728px;
      height: 100%;
      border: none;
      outline: none;
    }
    span {
      width: 28px;
      height: 28px;
      border: 1px solid black;
    }
  }
`;

export default NoticeDetailStyle;
