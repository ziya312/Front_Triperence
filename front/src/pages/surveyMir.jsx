import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import axios from 'axios';

const SurveyMir = () => {
  const [values, setValues] = useState({
    era : 'null'
  });
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());
  const [category1, setcategory1] = useState({ historyPlace: ['null'] });
  const navigate = useNavigate();
  const location = useLocation(); //가져올 때

  useEffect(() => {
    console.log('값이다....', ty.eat.join());
    // console.log('값이다....', ty.transportation);
  }, []);

  let ty = location.state;

  const eatResult = ty.eat.join();
  const allergieResult = ty.allergie.join();

  const historyPlaceResult= category1["historyPlace"].join();


  const handleApi = () => {
    axios
      .post('/survey/save', {
        // param1: values,
        // param2: category1,
        // param: location,

        "transportation": ty.transportation,
        "stay": ty.stay,
        "destination": ty.destination,
        "category": ty.category,
        "eat": eatResult,
        "allergie": allergieResult,
        "era": values.era,
        "historyPlace": historyPlaceResult,
      })

      .then((result) => {
        // console.log(result.data);
        alert('다음장');
        navigate('/showResult');
      })

      .catch((error) => {
        console.log(error);
        alert('service error');
      });
  };

  const formEra = [
    { id: 1, name: 'era', value: 'Three States', add: ' (Goguryeo, Baekje and Silla)' },
    { id: 2, name: 'era', value: 'Joseon Dynasty', add: '' },
    { id: 3, name: 'era', value: 'Modern and present', add: '(after independence)' },
  ];

  const formPlace = [
    {
      id: 1,
      name: 'historyPlace',
      value: 'Palaces / Gates',
      imageSrc: require('../images/palace.jpg'),
    },
    {
      id: 2,
      name: 'historyPlace',
      value: 'Museums',
      imageSrc: require('../images/museum.jpg'),
    },
    {
      id: 3,
      name: 'historyPlace',
      value: 'Fortresses',
      imageSrc: require('../images/fortresses.jpg'),
    },
    { id: 4, name: 'historyPlace', value: 'Temples', imageSrc: require('../images/temple.jpg') },
    {
      id: 5,
      name: 'historyPlace',
      value: 'Folk Villages',
      imageSrc: require('../images/folk.jpg'),
    },
    {
      id: 6,
      name: 'historyPlace',
      value: ' Security & Peace ',
      imageSrc: require('../images/security.jpg'),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler(target.name, target.value, target.checked);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const tempChange = (name, value, id) => {
    console.debug(id, '윤희메롱');
    setValues({ ...values, [name]: value });
  };

  const checkedItemHandler = (name, id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckeditems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckeditems(checkedItems);
    }
    setcategory1({ [name]: Array.from(checkedItems) });
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
                    onChange={() => tempChange(item.name, item.value, item.id)}
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
        
              <Button onClick={handleApi}>Finish</Button>
  
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyMir;
