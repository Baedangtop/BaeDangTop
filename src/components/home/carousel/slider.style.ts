import styled from "styled-components";

export const Container = styled.div`
  width: 792px;
  height: 200px;
  margin: 0 auto;
  overflow: hidden;
  background: #f7eaf2;
  border-radius: 15px;
`;
export const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: burlywood;
  border-radius: 10px;
  border: 1px solid burlywood;
  &:hover {
    background-color: burlywood;
    color: #fff;
  }
`;
export const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex;
  flex-shrink: 0;
`;
export const Center = styled.div`
  text-align: center;
`;
