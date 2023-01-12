import styled from "styled-components";

export const _Footer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  bottom: 0;
  margin-top: 30px;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, #010142 100%);
  width: 100%;
  position: relative;

  @media screen and (max-width: 414px) {
    height: 3rem;
    font-size: 12px;
  }
`;
