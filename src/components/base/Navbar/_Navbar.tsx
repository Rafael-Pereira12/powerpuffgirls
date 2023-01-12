import styled from "styled-components";

export const _Navbar = styled.section`
  display: flex;
  align-items: center;
  height: 5rem;
  top: 0;
  margin-top: 0;
  margin-bottom: 10px;
  position: sticky;
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, #010142 100%);
  width: 100%;
  box-shadow: 2px 2px 10px #010142;
  font-size: 15px;

  a:link,
  a:visited {
    color: #fc0;
  }

  @media screen and (max-width: 414px) {
    height: 3rem;
    font-size: 12px;
  }
`;
