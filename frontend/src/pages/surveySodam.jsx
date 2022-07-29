import React, { Component, useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveySodam = () => {
  const [values, setValues] = useState({
    foodOne: '',
    foodTwo: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckeditems] = useState(new Set());
  const navigate = useNavigate();
  const location = useLocation(); //가져올 때              //{state}
  const state = '헤헤';        

  const handleApi = () => {
    console.log('value: ', values);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        param: values,
        param: location,
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
  
  useEffect(() => {
    console.log('값', location);
  }, []);// 

  const formFoodOne = [
    {
      id: 1,
      name: 'foodOne',
      value: 'More traditional',
      imageSrc: require('../images/bibimbap.jpg'),
    },
    {
      id: 2,
      name: 'foodOne',
      value: 'More casual',
      imageSrc: require('../images/bulgogi.jpg'),
    },
  ];

  const formFoodTwo = [
    {
      id: 1,
      name: 'foodTwo',
      value: 'Table with a lot of food',
      imageSrc: require('../images/hansang.jpg'),
    },
    {
      id: 2,
      name: 'foodTwo',
      value: 'Table with',
      imageSrc: require('../images/gandan.jpg'),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };



  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showData = () => {
    console.log('value:', values);
    console.log('checked Items: ', checkedItems);
  };

  return (
    <div>
      <SecondHeader />
      <div className="testSodam">
        <form onSubmit={handleSubmit}>
          <div className="new-gabox">
            <div>
              <label className="bd">What kind of food do you want to eat?</label>
              {formFoodOne.map((item) => (
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
              <label className="bd">Which kind of food do you prefer?</label>
              {formFoodTwo.map((item) => (
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
              <Button onClick={handleApi}>Finish</Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveySodam;
