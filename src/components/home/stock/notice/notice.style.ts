import styled from "styled-components";

const NoticeStyle = styled.div`
  width: 792px;
  margin: 0 auto;
  position: relative;

  .notice--container {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    gap: 40px;
  }

  .title {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    .title__name {
      font-weight: 500;
      font-size: 28px;
      line-height: 41px;
      letter-spacing: -0.02em;
      color: #000000;
    }
    .title__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 296px;
      height: 40px;

      .title__info--modify {
        width: 40px;
        height: 40px;
        border: 1px solid black;
      }
      .title__info--notice {
        width: 80px;
        height: 40px;
        border: 1px solid #b4b4b4;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #b4b4b4;
      }
      .title__info--free {
        width: 140px;
        height: 40px;
        background: #000000;
        border-radius: 15px;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #ffffff;
      }
    }
  }
`;

export default NoticeStyle;
