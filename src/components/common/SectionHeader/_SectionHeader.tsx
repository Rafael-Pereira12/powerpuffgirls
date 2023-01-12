import styled from "styled-components";

export const _SectionHeader = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  font-size: 35px;
  cursor: pointer;
  margin-bottom: 1rem;
  width: fit-content;

  .text {
    background-color: #010142;
    padding: 10px;
    border-radius: 25px;
    border: 2px solid #e8d487;
    box-shadow: 0px 0px 10px 0px #fc0;
  }

  .text:hover {
    background-color: #1f2f6d;
  }

  .text:active {
    background-color: #656598;
  }

  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
`;
