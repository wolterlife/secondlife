import React from "react";
import Slider from "react-slick";
import './SliderWithDots.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWithDots = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    centerPadding: '100px',
    slidesToShow: 3,
    slidesToScroll: 1,
    touchThreshold: 100,
  };
  return (
    <div className="SliderWithDots">
      <div className="slider">
        <Slider {...settings}>
          <div>
            <img className="slider__img" src='/img/Header/1.webp' alt='slider-1'/>
          </div>
          <div>
            <img className="slider__img" src='/img/Header/2.webp' alt='slider-2'/>
          </div>
          <div>
            <img className="slider__img" src='/img/Header/3.webp' alt='slider-3'/>
          </div>
          <div>
            <img className="slider__img" src='/img/Header/4.webp' alt='slider-4'/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SliderWithDots;
