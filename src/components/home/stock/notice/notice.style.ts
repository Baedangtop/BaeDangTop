import styled from "styled-components";

const NoticeStyle = styled.div`
  width: 792px;
  margin: 0 auto;

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

  .modal {
    padding: 24px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 424px;
    height: 423px;

    background: #ffffff;
    box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    .picture {
      position: relative;
      width: 376px;
      height: 156px;
      background: #bcbcbc;
      border-radius: 15px;
      margin: 0 auto;

      .preview {
        height: 100%;
        overflow-y: scroll;
        img {
          width: 100%;
        }
      }

      .choose {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(20%, 20%);

        width: 48px;
        height: 48px;
        background: black;
        border-radius: 50%;
        cursor: pointer;

        input[type="file"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 400px;
          height: 40px;
          padding: 0;
          overflow: hidden;
          border: 0;
          opacity: 0;
        }
      }
    }

    input {
      word-break: break-all;
    }
    .title {
      margin: 0;
      padding-left: 18px;
      outline: none;
      margin-top: 26px;
      width: 376px;
      height: 46px;
      border: 1px solid #dbdbdb;
      border-radius: 15px;
    }
    .description {
      padding-left: 18px;
      padding-top: 10px;
      outline: none;
      margin-top: 18px;

      width: 376px;
      height: 71px;

      border: 1px solid #dbdbdb;
      border-radius: 15px;
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
  }
`;

export default NoticeStyle;
