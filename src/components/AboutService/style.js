import styled from "styled-components";

const media = {
  mobile: `@media(max-width:480px)`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: green;
  padding: 70px 50px;
  border-top: 1px solid white;

  ${media.mobile} {
    padding: 20px 20px;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 60px;

  ${media.mobile} {
    font-size: 40px;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;

  ${media.mobile} {
    width: 100%;
  }
`;
export const Div = styled.div``;
