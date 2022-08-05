import React, { Component, useState } from 'react';
import Slider from 'react-slick';
// import 'components/Pages/newCarou.css';
import './carousel.css';
import SecondPlace from 'pages/secondPlace';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import HeartImg from 'icons/Heart.svg';
import EmptyHeartImg from "icons/EmptyHeart.svg";
// import Heart from 'components/common/heart';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from 'https://cdn.skypack.dev/react-icons/ti';

const images = [
  { id: 1, imageSrc: require('images/character/himchan.jpg') },
  { id: 2, imageSrc: require('images/character/nori.jpg') },
  { id: 3, imageSrc: require('images/character/choa.jpg') },
  { id: 4, imageSrc: require('images/character/himchan.jpg') },
  { id: 5, imageSrc: require('images/character/choa.jpg') },
];

function NewCarou() {
  const CARDS = 10;
  const MAX_VISIBILITY = 3;

  const Card = ({ title, content }) => (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
  const haddha = [
    { title: '윤희', content: '킹' },
    { title: '지지ㅣ', content: 'ㄲ?ㅜㄹ꿀' },
    { title: '윤희', content: '킹' },
    { title: '지지ㅣ', content: 'ㄲ?ㅜㄹ꿀' },
    { title: '윤희', content: '킹' },
    { title: '지지ㅣ', content: 'ㄲ?ㅜㄹ꿀' },
    { title: '윤희', content: '킹' },
    { title: '지지ㅣ', content: 'ㄲ?ㅜㄹ꿀' },
  ];
  const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);

    return (
      <div className="carousel">
        {active > 0 && (
          <button className="nav left" onClick={() => setActive((i) => i - 1)}>
            <TiChevronLeftOutline />
          </button>
        )}
        {React.Children.map(children, (child, i) => (
          <div
            className="card-container"
            style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
            key={i}
          >
            {child}
          </div>
        ))}
        {active < count - 1 && (
          <button className="nav right" onClick={() => setActive((i) => i + 1)}>
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    );
  };

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
      <Carousel>
        {haddha.map((_, i) => (
          <Card title={_.title + (i + 1)} content={_.content} key={i} />
        ))}
      </Carousel>
      {/* <Slider {...settings} dotsClass="test-css">
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? 'slider activeSlide' : 'slide'}>
            <SecondPlace>
              <img src={img} alt={img} />
              <Heart />
            </SecondPlace>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}
export default NewCarou;
