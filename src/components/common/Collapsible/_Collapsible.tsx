import styled from "styled-components";

export const _Collapsible = styled.section`
  display: flex;
  color: white;
  width: 50rem;
  justify-content: center;

  h5 {
    margin: 0;
  }

  .card {
    width: 60rem;
  }

  .seasonContainer {
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: center;
    align-items: center;
    height: 15rem;
    margin-top: 2px;
    font-size: 70px;
    border-radius: 5px;
    border: solid 2px black;
  }

  .episodeContainer {
    background: linear-gradient(180deg, #e7e7e7, #fdccd4);
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: center;
    display: flex;
    font-size: 20px;
  }

  .seasonContainer,
  .episodeContainer {
    text-align: center;
  }

  .seasonImage {
    position: absolute;
    z-index: -10;
    left: 0%;
    top: 0%;
    height: 15rem;
    width: 50rem;
    transform: translate(0px, 5px);
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button > svg {
    fill: white;
    height: 2rem;
    width: 2rem;
  }

  @media screen and (max-width: 540px) {
    width: 20rem;

    .seasonContainer {
      height: 5rem;
      font-size: 40px;
    }

    .seasonImage {
      height: 5rem;
      width: 20rem;
    }

    .episodeContainer {
      width: 20rem;
    }
  }
`;
