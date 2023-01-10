import styled from "styled-components";

export const _Collapsible = styled.section`
  display: flex;
  color: white;
  width: 30rem;

  .card {
    width: 30rem;
  }

  .seasonContainer {
    background-color: #9bbb88;
    margin-top: 2px;
    border-radius: 5px;
    border: solid 2px black;
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  .episodeContainer {
    background-color: gray;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: center;
    display: flex;
  }

  .seasonContainer,
  .episodeContainer {
    text-align: center;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: none;
    border: none;
  }

  button > svg {
    fill: white;
  }

  @media screen and (max-width: 540px) {
  }
`;
