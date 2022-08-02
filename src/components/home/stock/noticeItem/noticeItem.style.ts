import styled from "styled-components";

const NoticeItemStyle = styled.div`
  width: 792px;
  height: 264px;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 24px;
  font-weight: 400;
  position: relative;
  .date {
    margin-top: 24px;
    font-size: 18px;
    line-height: 21px;
    color: #b4b4b4;
  }
  .item__title {
    margin-top: 8px;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.02em;
    color: #000000;
  }
  .description {
    margin-top: 8px;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #b4b4b4;
  }
  .toggle_container {
    height: 40px;
    text-align: right;
    margin-top: 24px;

    .toggle {
      width: 40px;
      height: 40px;
      border: none;
    }
  }
`;

export default NoticeItemStyle;
