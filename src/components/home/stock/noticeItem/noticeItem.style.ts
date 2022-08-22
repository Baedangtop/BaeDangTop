import styled from "styled-components";

const NoticeItemStyle = styled.div`
  width: 376px;
  height: 376px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 24px;
  font-weight: 400;

  .date {
    margin-top: 24px;
    font-size: 18px;
    line-height: 21px;
    color: #b4b4b4;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      width: 40px;
      height: 40px;
      border: none;
    }
  }
  .notice--image {
    margin-top: 12px;
    width: 100%;
    height: 156px;
    background-color: #b4b4b4;
    overflow-y: scroll;

    img {
      width: 100%;
    }
  }
  .item__title {
    margin-top: 24px;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #000000;
    word-break: break-all;
  }
  .description {
    margin-top: 8px;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #b4b4b4;
    word-break: break-all;
  }
`;

export default NoticeItemStyle;
