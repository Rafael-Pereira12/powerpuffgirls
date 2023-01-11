import styled from "styled-components";

export const _Carousel = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .rightArrow {
    position: absolute;
    top: 50%;
    right: 32px;
  }

  .leftArrow {
    position: absolute;
    top: 50%;
    left: 32px;
  }

  .rightArrow,
  .leftArrow {
    cursor: pointer;
    z-index: 10;
  }
`;
