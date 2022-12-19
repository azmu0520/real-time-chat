import styled from "styled-components";
import mainImg from "../../assets/images/main.JPEG";
import mobileImg from "../../assets/images/mobileMain.jpg";

const media = {
  mobile: `@media(max-width:480px)`,
  tablet: `@media(max-width:768px)`,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 1400px; */

  ${media.mobile} {
    position: relative;
  }
`;

export const MainInfo = styled.div`
  width: 100%;
  height: 89vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-image: url(${mainImg});
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 89vh;

  ${media.mobile} {
    background-image: url(${mobileImg});
  }

  ${media.tablet} {
    background-size: 100% 90vh;
  }
`;

// export const Wrapper = styled.div``;

export const Title = styled.div`
  color: white;
  font-size: 100px;
  ${media.mobile} {
    font-size: 50px;
    margin-top: 20px;
  }

  ${media.tablet} {
    text-align: center;
  }
`;

export const MainButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 25px;
  margin-top: 40px;
  border-radius: 50px;
  border: none;
  background-color: white;
  transition: 0.5s ease;
  font-weight: 500;
  cursor: pointer;
  font-weight: 550;

  :hover {
    transform: scale(1.05);
    background: transparent;
    border: 1px solid white;
  }

  ${media.mobile} {
    width: 200px;
    height: 50px;
    font-size: 18px;
    /* margin-top: 90px; */
  }
`;

export const Div = styled.div``;
