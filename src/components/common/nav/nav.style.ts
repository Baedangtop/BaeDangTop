import styled from "styled-components";

const NavStyle = styled.div`
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);

  .bar {
    width: 185px;
    margin: 0 auto;
    height: 25px;

    position: relative;
    top: 11px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .loc {
      position: absolute;
      top: 30px;
      width: 31px;
      height: 3px;
      background: rgba(221, 128, 159, 1);
    }

    img {
      width: 25px;
    }
  }
`;

export default NavStyle;
