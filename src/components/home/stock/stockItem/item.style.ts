import styled from "styled-components";

const ItemStyle = styled.div`
  border-bottom: 1px solid #dbdbdb;

  .basic {
    height: 80px;

    display: flex;
    align-items: center;

    .logo {
      margin-left: 40px;
      width: 48px;
      height: 48px;
      border: 1px solid black;
    }

    .name {
      margin-left: 40px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #000000;
    }

    .graph {
      margin-left: 68px;
      height: 48px;
      width: 240px;

      svg {
        width: 100%;
        height: 100%;

        polyline {
          fill: none;
          stroke: blue;
          stroke-width: 2px;
        }
      }
    }

    .price {
      margin-left: 81px;
      text-align: right;

      .price__current {
        font-size: 24px;
        line-height: 28px;
        text-align: right;
        color: #000000;
      }

      .price__yield {
        font-size: 18px;
        line-height: 21px;
        text-align: right;
        color: #66bbf3;
      }
    }

    .toggle {
      margin-left: 40px;

      width: 40px;
      height: 40px;
      background: none;
    }
  }
`;

export default ItemStyle;
