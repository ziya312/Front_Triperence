import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';



const TestMir = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());

  const formEra = [
    { id: 1, name: 'era', value: 'Three States', add: ' (Goguryeo, Baekje and Silla)' },
    { id: 2, name: 'era', value: 'Joseon Dynasty', add: '' },
    { id: 3, name: 'era', value: 'Modern and present', add: '(after independence)' },
  ];

  const formPlace = [
    {
      id: 1,
      name: 'place',
      value: 'Palaces / Gates',
      imageSrc: require('../images/palace.jpg'),
    },
    {
      id: 2,
      name: 'place',
      value: 'Museums',
      imageSrc: require('../images/museum.jpg'),
    },
    {
      id: 3,
      name: 'place',
      value: 'Fortresses',
      imageSrc: require('../images/fortresses.jpg'),
    },
    { id: 4, name: 'place', value: 'Temples', imageSrc: require('../images/temple.jpg') },
    {
      id: 5,
      name: 'place',
      value: 'Folk Villages',
      imageSrc: require('../images/folk.jpg'),
    },
    {
      id: 6,
      name: 'place',
      value: ' Security & Peace ',
      imageSrc: require('../images/security.jpg'),
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
      <div className="testList">
        <form onSubmit={handleSubmit}>
          <div className="li-box">
            <div>
              <label className="bd">Which era are you curious?</label>
              {formEra.map((item) => (
                <label key={item.id} className="li-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
                  <div>
                    {item.value}
                    {item.add}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>

          <div className="new-gabox">
            <div>
              <label className="bd">Which place do you want to visit?</label>
              {formPlace.map((item) => (
                <label key={item.id} className="new-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler(e)}
                  />
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

export default TestMir;
