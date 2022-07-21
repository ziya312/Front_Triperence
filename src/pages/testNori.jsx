import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';

const TestSodam = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());

  const formPlaceOne = [
    {
      id: 1,
      name: 'placeOne',
      value: 'Sight',
      imageSrc: require('../images/exhibition.jpg'),
    },
    { id: 2, name: 'placeOne', value: 'Hearing', imageSrc: require('../images/musical.webp') },
  ];

  const formPlaceTwo = [
    {
      id: 1,
      name: 'placeTwo',
      value: 'Dynamic',
      imageSrc: require('../images/festival.jpg'),
    },
    {
      id: 2,
      name: 'placeTwo',
      value: 'Static',
      imageSrc: require('../images/theater.jpg'),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.parentNode, target.value, target.checked);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckeditems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckeditems(checkedItems);
    }
    return checkedItems;
  };

  const showData = () => {
    console.log('value:', values);
    console.log('checked Items: ', checkedItems);
  };

  return (
    <div>
      <SecondHeader />
      <div className="testChoa">
        <form onSubmit={handleSubmit}>
          <div className="new-gabox">
            <div>
              <label className="bd">Which sense do you prefer when you experience?</label>
              {formPlaceOne.map((item) => (
                <label key={item.id} className="nori-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>
                    {<img src={item.imageSrc} />}
                    {item.value}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>

          <div className="new-gabox">
            <div>
              <label className="bd">Which type do you prefer when you spend free time?</label>
              {formPlaceTwo.map((item) => (
                <label key={item.id} className="nori-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>
                    {<img src={item.imageSrc} />}
                    {item.value}
                  </div>
                </label>
              ))}
            </div>
          </div>
          <span className="boderSpan"></span>
          <div className="fsbtn">
            <Link to="#">
              <Button onClick={showData}>Finish</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestSodam;
