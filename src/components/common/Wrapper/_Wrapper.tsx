import styled from "styled-components";

export const _Wrapper = styled.section`
  display: grid;
  grid-template-areas:
    "image title title type type rating rating"
    "image description description description description description description";
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

  @media screen and (max-width: 540px) {
  }
`;
