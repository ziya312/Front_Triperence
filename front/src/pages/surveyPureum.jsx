import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation,} from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveyPureum = () => {
  const [values, setValues] = useState({
  });
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());
  const [category1, setcategory1] = useState({ naturePlace: ['null'] });
  const navigate = useNavigate();
  const location = useLocation();    //가져올 때
  const result= location.state;

  

 console.log('뭐야야야야야야야s', result.destination)
 console.log('뭐야야야야야야야s', location.state)
 

 let ty = location.state;

 const eatResult = ty.eat.join();
 const allergieResult = ty.allergie.join();

 const naturePlaceResult = category1["naturePlace"].join();
 
  
  // const eatResult = ty.eat.join();
  // const allergieResult = ty.allergie.join();

  console.log('뭐야'  , ty.destination)


  const handleApi = () => {
    axios
      .post('/survey/save', {

        "transportation": ty.transportation,
        "stay": ty.stay,
        "destination": ty.destination,
        "category": ty.category,
        "eat": eatResult,
        "allergie" : allergieResult,
        "naturePlace" : naturePlaceResult,

      })

      .then((result) => {
        console.log(result.data);
        alert('다음장');
        navigate('/showResult');
      })

      .catch((error) => {
        console.log(error);
        alert('service error');
      });
  };

  const formplace = [
    { id: 1, name: 'naturePlace', value: 'Beaches' },
    { id: 2, name: 'naturePlace', value: 'Mountains' },
    { id: 3, name: 'naturePlace', value: 'Forest' },
    { id: 4, name: 'naturePlace', value: 'Valleys' },
    { id: 5, name: 'naturePlace', value: 'River & Lake' },
    { id: 6, name: 'naturePlace', value: 'Cave' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const checkHandler = ({ target }) => {
    console.debug(target, !isChecked);
    setIsChecked(!isChecked);
    checkedItemHandler(target.name, target.value, target.checked);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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
    console.debug(category1, '하하하ㅏ');
  };

  return (
    <div>
      <SecondHeader />
      <div className="testList">
        <form onSubmit={handleSubmit}>
          <div className="li-box">
            <div>
              <label className="bd">Which nature do you want to enjoy?</label>
              {formplace.map((item) => (
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
 
              <Button onClick={handleApi}>Finish</Button>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyPureum;
