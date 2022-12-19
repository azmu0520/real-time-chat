import styled from "styled-components";
import { Carousel } from "antd";

import { ReactComponent as Arrow } from "../../assets/icons/left-arrow.svg";
// import { ReactComponent as RightArrow } from '../../../assets/icons/right-arrow.svg'
const media = {
  mobile: `@media(max-width:480px)`,
  tablet: `@media(max-width:678px)`,
  laptop: `@media(max-width:992px)`,
};

export const CarouselWrapper = styled("div")`
  position: relative;
  width: 600px;

  ${media.mobile} {
    width: 280px !important ;
  }

  ${media.tablet} {
    width: 500px;
  }
`;

export const MainCarousel = styled(Carousel)`
  height: fit-content;
  width: 100%;
  /* height: 570px; */
`;

export const Img = styled.img`
  background: black;
  border-radius: 13px;

  ${media.mobile} {
    border-radius: 10px;
  }
`;

export const Icon = styled.div``;

Icon.Left = styled(Arrow)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  & path {
    fill: #0d263b;
  }

  ${media.mobile} {
    top: 70%;
    left: -11%;
  }
`;

Icon.Right = styled(Arrow)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60%;
  right: 0px;
  transform: translate(-100%, -50%) rotate(180deg);
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.8;
  }

  & path {
    fill: #0d263b;
  }

  ${media.mobile} {
    top: 70%;
    right: -11%;
  }
`;
