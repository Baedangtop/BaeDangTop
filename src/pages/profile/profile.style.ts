import styled from "styled-components";

const ProfileStyle = styled.div`
  margin-top: 101px;
  .logo {
    margin-left: 324px;
    width: 279px;
  }
  .header {
    margin-top: 53px;
    width: 100%;
    height: 200px;
    background: black;

    display: flex;
    justify-content: center;
    align-items: center;

    .des {
      width: 792px;
      height: 136px;

      .title {
        color: white;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
      }
      .profile {
        margin-top: 28px;
        height: 80px;
        display: flex;
        align-items: center;

        .picture {
          width: 80px;
          height: 80px;
          margin-right: 80px;
          border: 1px solid white;
        }
        .name {
          color: white;

          .name__write {
            font-weight: 400;
            font-size: 24px;
            line-height: 35px;
            color: #ffffff;
          }
          .mail {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
            color: #ffffff;
          }
          .button {
            color: white;
            max-width: 224px;
            height: 40px;

            /* display: flex; */
            /* justify-content: space-between; */
            div {
              display: flex;
              justify-content: space-between;
            }
          }
        }
        .out {
          margin-left: 148px;
          color: white;
          width: 80px;
          height: 40px;
          border: 1px solid #b4b4b4;
          border-radius: 15px;
          background: none;
        }
        .modify {
          background: #ffffff;
          border-radius: 15px;
          width: 80px;
          height: 40px;
          margin-left: 24px;
          border: none;
        }
        .modify2 {
          background: #ffffff;
          border-radius: 15px;
          width: 185px;
          height: 40px;
          margin-left: 24px;
          border: none;
          position: relative;
          right: -125px;

          margin-bottom: 10px;
        }
      }
    }
  }
  .pf {
    width: 792px;
    margin: 0 auto;
    margin-top: 91px;
    position: relative;

    .title {
      display: flex;

      .one,
      .two {
        .name {
          font-weight: 500;
          font-size: 28px;
          line-height: 41px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .price {
          font-weight: 500;
          font-size: 38px;
          line-height: 55px;
          letter-spacing: -0.02em;
          color: #000000;

          span {
            font-size: 20px;
          }
        }
      }
      .one + .two {
        margin-left: 112px;
      }
    }
  }
`;

export default ProfileStyle;
