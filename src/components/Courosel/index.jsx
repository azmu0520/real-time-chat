import React, { useRef } from "react";
import { CarouselWrapper, Icon, Img, MainCarousel } from "./style";
import slider1 from "../../assets/images/slide.PNG";
import slider2 from "../../assets/images/slide2.PNG";
import slider3 from "../../assets/images/slide3.PNG";
import slider4 from "../../assets/images/slide4.PNG";
import slider5 from "../../assets/images/info.PNG";

export const Carousel = () => {
  const slider = useRef();

  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <MainCarousel ref={slider} dots>
        <Img src={slider1} alt="img" />
        <Img src={slider2} alt="img" />
        <Img src={slider3} alt="img" />
        <Img src={slider4} alt="img" />
        <Img src={slider5} alt="img" />
      </MainCarousel>
    </CarouselWrapper>
  );
};
