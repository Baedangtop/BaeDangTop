import React, { useState, useRef, useEffect } from "react";

import img1 from "../../../assets/images/Component1.png";
import img2 from "../../../assets/images/Component2.png";
import img3 from "../../../assets/images/logo.png";

import Slide from "./Slide";
import { Container, SliderContainer } from "./slider.style";

const TOTAL_SLIDES = 2;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (currentSlide >= TOTAL_SLIDES) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 3000);
  }, [currentSlide]);

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
      </SliderContainer>
    </Container>
  );
};

export default Slider;
