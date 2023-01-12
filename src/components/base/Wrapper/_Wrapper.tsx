import styled from "styled-components";

export const _Wrapper = styled.section`
  height: 100vh;
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;

  @media screen and (max-width: 414px) {
    height: 100vh;
  }
`;
