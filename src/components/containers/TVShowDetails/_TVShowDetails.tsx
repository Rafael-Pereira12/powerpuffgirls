import styled from "styled-components";

export const _TVShowDetails = styled.section`
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

  img {
    border: solid 2px #e8d487;
    border-radius: 15px;
    box-shadow: 0px 0px 10px 0px #fc0;
  }

  @media screen and (max-width: 414px) {
    grid-template-areas:
      "title title title title"
      "image  type type type"
      "image rating rating rating"
      "description description description description ";
    gap: 2px;

    .image > img {
      height: 10rem;
    }

    .description > h4 {
      font-size: 15px;
    }
  }
`;
