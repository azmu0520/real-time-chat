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
    padding: 30px 0px;
    gap: 20px;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 60px;

  ${media.mobile} {
    font-size: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
  text-align: center;

  ${media.mobile} {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;
export const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid white;
  width: 250px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 30px;
  gap: 20px;

  background-color: white;
  border-radius: 30px;

  span {
    color: green;
  }

  ${media.mobile} {
    width: 230px;
  }
`;
export const Text = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  text-align: center;
  font-weight: 600;
`;
export const Div = styled.div``;
