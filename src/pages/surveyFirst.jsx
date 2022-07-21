import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';

const SurveyFirst = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());

  const formtrans = [
    { id: 1, name: 'transportation', value: 'Public transport' },
    { id: 2, name: 'transportation', value: 'Taxi' },
    { id: 3, name: 'transportation', value: 'Rental Cars' },
  ];

  const formstay = [
    { id: 1, name: 'stay', value: 'Hotel' },
    { id: 2, name: 'stay', value: 'Guest House' },
    { id: 3, name: 'stay', value: 'Hanouk' },
  ];

  const formAllergy = [
    { id: 1, name: 'allergie', value: 'Dairy Products' },
    { id: 2, name: 'allergie', value: 'Nuts' },
    { id: 3, name: 'allergie', value: 'Crustacean' },
    { id: 4, name: 'allergie', value: 'Egg' },
    { id: 5, name: 'allergie', value: 'Beans' },
    { id: 6, name: 'allergie', value: 'Wheat' },
    { id: 7, name: 'allergie', value: 'Peanut' },
    { id: 8, name: 'allergie', value: 'Fish' },
    { id: 9, name: 'allergie', value: 'Peach' },
  ];

  const formEat = [
    { id: 1, name: 'eat', value: 'Vegan' },
    { id: 2, name: 'eat', value: 'Halal' },
    { id: 3, name: 'eat', value: 'No Pork' },
    { id: 4, name: 'eat', value: 'No Beef' },
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
      <div className="first-survey">
        <form onSubmit={handleSubmit}>
          <div className="fi-gabox">
            <div>
              <label className="bd">What kind of transportation do you prefer?</label>
              {formtrans.map((item) => (
                <label key={item.id} className="fi-map">
                  <input type="radio" name={item.name} value={item.value} />
                  <div>{item.value}</div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
            <div>
              <label className="bd-s"> Where do you like to stay?</label>
              <label className="bd-m">*Hanouk: Traditional korean styled house</label>
              {formstay.map((item) => (
                <label key={item.id} className="fi-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
                    onChange={onChange}
                  ></input>
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd"> Are you allergic to food?</label>
              {formAllergy.map((item) => (
                <label key={item.id} className="fi-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd">What do you eat?</label>
              {formEat.map((item) => (
                <label key={item.id} className="fi-s">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd">What is you preferred destination?</label>
              <label className="des1">
                <input onChange={onChange} type="radio" name="destination" value="city"></input>
                <div>City</div>
              </label>
              <label className="des2">
                <input onChange={onChange} type="radio" name="destination" value="nature"></input>
                <div>Nature</div>
              </label>
            </div>
          </div>
          <span className="boderSpan"></span>
          <div className="fsbtn">
            <Link to="/surveySecond">
              <Button onClick={showData}>Next -></Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyFirst;
