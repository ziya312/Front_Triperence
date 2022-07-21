import React from 'react';
import 'components/Pages/test.css';
import Img from 'components/test/Img';
import Place from 'components/test/place';
import NewCarou from 'components/test/newCarou';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: iflex;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  padding: 1rem;
  align-items: center;
  text-align: center;

  height: 3rem;
  width: 24rem;
  font-size: 1rem;
`;

const H = styled.div`
  display: iflex;
  margin-bottom: 20px;
`;

const character = [
  {
    id: 1,
    name: 'CHOA',
    value: 'Choa who loves Korean culture!',
    type: 'K-Culture',
    imageSrc: require('images/character/choa.jpg'),
  },
  {
    id: 2,
    name: 'MIR',
    value: 'Mir who loves Korea history!',
    type: 'K-History',
    imageSrc: require('images/character/mir.jpg'),
  },
  {
    id: 3,
    name: 'HIMCHAN',
    value: 'Himchan who loves taking phothos!',
    type: 'Photo/Film',
    imageSrc: require('images/character/himchan.jpg'),
  },
  {
    id: 4,
    name: 'PUREUM',
    value: 'Pureum who loves Korean Nature!',
    type: 'K-Nature',
    imageSrc: require('images/character/pureum.jpg'),
  },
  {
    id: 5,
    name: 'SODAM',
    value: 'Sodam who loves Korean culture',
    type: 'K-Food',
    imageSrc: require('images/character/sodam.jpg'),
  },
  {
    id: 6,
    name: 'NORI',
    value: 'Nori who loves Korean entertainments!',
    type: 'K-entertain',
    imageSrc: require('images/character/nori.jpg'),
  },
];

function ChoaShow() {
  return (
    <div>
      <div className="app-container">
        {character.map((item) => {
          return (
            <Img name={item.name} value={item.value} imageSrc={item.imageSrc} type={item.type} />
          );
        })}
      </div>

      <div className="wrap-t">
        <div className="carousel">
          <h2>K-POP PLACE</h2>
          {/* <Carousel /> */}
          <NewCarou />
          <H>
            <h2>K-DRAMA PLACE</h2>
          </H>
          <Place />
          <div className="wrap-b">
            <Link to="/">
              <StyledButton>Recommended Trip Place</StyledButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChoaShow;
