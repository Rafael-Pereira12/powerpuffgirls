import styled from "styled-components";

export const _EpisodeDetails = styled.section`
  .grid {
    display: grid;
    grid-template-areas:
      " image image image image  image image"
      "title title title title title title"
      "episode episode season season runtime runtime "
      " type type type airdate airdate airdate"
      " description description description description description  description";
    gap: 5px;
    justify-content: center;
    align-content: center;
    text-decoration: none;
    text-align: center;
    margin-bottom: 2rem;
    width: 100%;
  }

  .back {
    margin-left: 15rem;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: underline;
  }

  .image {
    grid-area: image;
  }

  .image > img {
    height: 20rem;
  }

  .title {
    grid-area: title;
  }

  .description {
    grid-area: description;
  }

  .type {
    grid-area: type;
  }
  .rating {
    grid-area: rating;
  }
  .season {
    grid-area: season;
  }

  .episode {
    grid-area: episode;
  }

  .airdate {
    grid-area: airdate;
  }
  .runtime {
    grid-area: runtime;
  }

  img {
    border: solid 2px #e8d487;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px #fc0;
  }

  @media screen and (max-width: 414px) {
    .image > img {
      height: 10rem;
    }

    .description {
      margin: 0px 15px 0px 15px;
    }

    .description > h4 {
      font-size: 15px;
    }

    .back {
      margin-left: 2rem;
    }
  }
`;
