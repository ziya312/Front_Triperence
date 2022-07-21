import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyTwo.css';
import Button from 'components/common/Button';


const SurveyTwo = () => {
  const [values, setValues] = useState({});

  const category = [
    { id: 1, name: 'category', value: 'Entertainment', add: 'K-POP, K-DRAMA, K-MOVIE' },
    { id: 2, name: 'category', value: 'History', add: '' },
    { id: 3, name: 'category', value: 'Natures', add: '' },
    { id: 4, name: 'category', value: 'Food', add: '' },
    { id: 5, name: 'category', value: 'Like Festival', add: 'Pub, Club, Shopping' },
    { id: 6, name: 'category', value: 'Photo Spot', add: '' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showData = () => {
    console.log('value:', values);
  };

  return (
    <div>
      <SecondHeader />
      <div className="second-survey">
        <form onSubmit={handleSubmit}>
          <div className="gabox">
            <div>
              <label className="s-label">
                What do you thonk most important thing when you visit Korea?
              </label>
              {category.map((item) => (
                <label key={item.id} className="se-map">
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
                  <div>
                    {item.value}
                    {item.add}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>
          <div className="fsbtn">
            <Link to="/testChoa">
              <Button onClick={showData}>Next -></Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyTwo;
