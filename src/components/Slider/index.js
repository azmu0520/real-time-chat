import React from "react";
import Slider from "react-slick";
import { Container, Image } from "./style";

import slider1 from "../../assets/images/slide.PNG";
import slider2 from "../../assets/images/slide2.PNG";
import slider3 from "../../assets/images/slide3.PNG";
import slider4 from "../../assets/images/slide4.PNG";
import slider5 from "../../assets/images/ava-3.jpg";

export const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    className: "slider variable-width",
    centerMode: true,
    variableWidth: true,
  };
  return (
    <Container>
      <Slider {...settings}>
        <div></div>
        <div></div>
      </Slider>
    </Container>
  );
};
