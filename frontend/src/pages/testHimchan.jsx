import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';

const TestHimchan = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());

  const formPrefer = [
    { id: 1, name: 'subject', value: 'Photo' },
    { id: 2, name: 'subject', value: 'Video' },
  ];

  const formSubject = [
    { id: 1, name: 'subject', value: 'Selfie' },
    { id: 2, name: 'subject', value: 'Persons' },
    { id: 3, name: 'subject', value: 'Animals' },
    { id: 4, name: 'subject', value: 'Building' },
    { id: 5, name: 'subject', value: 'Scenery' },
    { id: 6, name: 'subject', value: 'Foods' },
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
      <div className="testList">
        <form onSubmit={handleSubmit}>
          <div className="li-box">
            <div>
              <label className="bd">What do you prefer to shoot?</label>
              {formPrefer.map((item) => (
                <label key={item.id} className="mc-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>
          <div className="li-box">
            <div>
              <label className="bd">Which do you take of?</label>
              {formSubject.map((item) => (
                <label key={item.id} className="mcs-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>
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

export default TestHimchan;
