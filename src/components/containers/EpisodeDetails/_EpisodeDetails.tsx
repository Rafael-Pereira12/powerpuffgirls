import styled from "styled-components";

export const _EpisodeDetails = styled.section`
  display: grid;
  grid-template-areas:
    "image image image image image image"
    "season season episode episode runtime runtime"
    "title title type type airdate airdate"
    "description description description description description description";
  gap: 10px;
  justify-content: center;
  align-content: center;
  text-decoration: none;
  text-align: center;
  margin-bottom: 2rem;

  .image {
    grid-area: image;
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
    border: solid 2px white;
    border-radius: 15px;
    box-shadow: 0px 0px 25px -4px white;
  }
`;
