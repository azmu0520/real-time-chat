import styled from "styled-components";

const media = {
  mobile: `@media(max-width:480px)`,
  tablet: `@media(max-width:768px)`,
  laptop: `@media(max-width:1279px)`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 1440px;

  font-family: sans-serif;

  ${media.mobile} {
    max-width: 480px !important ;
  }

  ${media.tablet} {
    max-width: 768px;
  }
`;
