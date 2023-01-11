import styled from "styled-components";

export const _TVShowSeasons = styled.section`
  display: flex;
  justify-content: center;

  .slide {
    opacity: 0;
    transition: 1s ease;
  }

  .slideActive {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1);
  }
`;
