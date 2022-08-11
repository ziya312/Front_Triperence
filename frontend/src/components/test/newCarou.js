import React, { Component, useState } from 'react';
import Slider from 'react-slick';
import HeartButton from "components/common/HeartButton"
import 'components/Pages/newCarou.css';
import './carousel.css';
import SecondPlace from 'pages/secondPlace';
import styled from 'styled-components';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from 'https://cdn.skypack.dev/react-icons/ti';


const CarouB = styled.button`
  border: 1px solid #77aefc;
  color: #77aefc;
  border-radius: 30px;
  width: 20px;
  background: none;
  text-align: center;
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1200px) {
    .MyB {
      font-size: 10px;
    }
  }
`;

const CardImage = styled.img`
  width: 384px;
  height: 384px;
  position: relative;
  border-radius: 20px;
  z-index: -1;
  background: red;
`;

const Cardtitle = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: 80px;
  margin-top: 12px;
  width: 80px;
  height: 26px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  text-align: center;
  line-height: 25px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  color: #161616;
`;

const Cardbox = styled.div`
  float: left;
  border-radius: 20px;
  width: 384px;
  height: 384 px;
  border-radius: 20px;
  margin-bottom: 4px;
  background-color: green;
  border: 1px solid #77aefc;
  margin-left: 10px;

  //transparent 투명
`;





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
      {/* <h2>{title}</h2> */}
      <p>

      <Cardbox>
        <Cardtitle>ssssssssss</Cardtitle>
        {content}
        <CardImage
        // img
        // // src={firstimage}
        // alt="http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=F1LcZ87c0l9gGNr9E%2BajujQ00xwYZ59b%2FQx5pgzcWJQIrKyyiAII7gOSAJsz99GhLsCTGLUQ2xpdoqxEC3FY7g%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
        ></CardImage>
        {/* <HeartButton />  */}
      </Cardbox> 




      
   
        {/* <Cardtitle>ssssssssss</Cardtitle>
        <CardImage
        // img
        // // src={firstimage}
        // alt="http://api.visitkorea.or.kr/openapi/service/rest/EngService/areaBasedList?ServiceKey=F1LcZ87c0l9gGNr9E%2BajujQ00xwYZ59b%2FQx5pgzcWJQIrKyyiAII7gOSAJsz99GhLsCTGLUQ2xpdoqxEC3FY7g%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json"
        
        >
        </CardImage>
        <HeartButton /> */}
     
      
      
     {/* {content} */}
     </p>
    </div>
  );
  const haddha = [
    {  content: '킹' },
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
      <div className='carousel-a'>
        
        {active > 0 && <button className='nav left slid-btn' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right slid-btn' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
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
      { <Carousel>
        {haddha.map((_, i) => (
          <Card title={_.title + (i + 1)} content={_.content} key={i} />
        ))}
      </Carousel> }
      {/* { <Slider {...settings} dotsClass="test-css">
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? 'slider activeSlide' : 'slide'}>
            <SecondPlace>
              <img src={img} alt={img} />
              <Heart />
            </SecondPlace>
          </div>
        ))}
      </Slider> } */}
     </div>
   );
}
export default NewCarou;
