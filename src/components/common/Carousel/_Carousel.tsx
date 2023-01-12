import styled from "styled-components";

export const _Carousel = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .rightArrow,
  .leftArrow {
    position: sticky;
    cursor: pointer;
    z-index: 10;
    height: 2em;
    width: 2em;
  }
`;
