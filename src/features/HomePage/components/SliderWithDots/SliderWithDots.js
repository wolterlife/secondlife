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
            <img className="slider__img" src='/img/About/1.jpg' alt='slider-1'/>
          </div>
          <div>
            <img className="slider__img" src='/img/About/2.jpg' alt='slider-2'/>
          </div>
          <div>
            <img className="slider__img" src='/img/About/3.jpg' alt='slider-3'/>
          </div>
          <div>
            <img className="slider__img" src='/img/About/4.png' alt='slider-4'/>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SliderWithDots;
