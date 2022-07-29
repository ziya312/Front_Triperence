import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import 'components/Pages/newCarou.css';
import SecondPlace from 'pages/secondPlace';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Heart from 'components/common/heart';

const images = [
  { id: 1, imageSrc: require('images/character/himchan.jpg')},
  { id: 2, imageSrc: require('images/character/nori.jpg')},
  { id: 3, imageSrc: require('images/character/choa.jpg')},
  { id: 4, imageSrc: require('images/character/himchan.jpg')},
  { id: 5, imageSrc: require('images/character/choa.jpg')},
];

function NewCarou() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    Response: true,
  };

  return (
    <div className="slider">
      <Slider {...settings} dotsClass="test-css">
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? 'slider activeSlide' : 'slide'}>
            <SecondPlace>
              <img src={img} alt={img} />
              <Heart /> 
            
            </SecondPlace>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default NewCarou;
