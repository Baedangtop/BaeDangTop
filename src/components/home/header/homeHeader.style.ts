import styled from "styled-components";

const HomeHeaderStyle = styled.div`
  width: 792px;
  height: 284px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 100px;

  .flex {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      text-decoration: underline;

      img {
        width: 48px;
        height: 100%;
        margin: 0;
        margin-left: 18px;
      }
    }
  }
  img {
    width: 279px;
    margin-bottom: 59px;
  }
`;

export default HomeHeaderStyle;
