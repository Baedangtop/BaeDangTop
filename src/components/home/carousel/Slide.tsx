import React from "react";
import styled from "styled-components";

const Slide = ({ img }) => {
  return <IMG src={img} alt="image" />;
};

const IMG = styled.img`
  min-width: 792px;
  height: 200px;
`;

export default Slide;
