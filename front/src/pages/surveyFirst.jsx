import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import axios from 'axios';

const SurveyFirst = () => {
  const [values, setValues] = useState([
    {
      transportation: '',
      stay: '',
      destination: '',
    },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems1, setCheckeditems1] = useState(new Set());
  const [checkedItems2, setCheckeditems2] = useState(new Set());
  const [category1, setcategory1] = useState({ allergie: ['null'] });
  const [category2, setcategory2] = useState({ eat: ['null'] });     //eat : ['null']
  const navigate = useNavigate();

  // const handleApi = () => {
    // console.log('transportation: ', values.transportation);
    // console.log('value: ', values.transportation);
    // console.log('value: ', values.transportation);
    // axios
    //   .post('http://localhost:8080/survey/save', {
    //     //값 전송
    //     data: {
    //       // transportation: values.transportation,
    //       // stay: values.stay,
    //       // destination: values.destination,
    //       allergie: category1,
    //     },
    //   })

      // .then((result) => {
      //   alert('success');
      //   console.log(result.data);
      //   navigate('/surveySecond',);
      // })

  //     .catch((error) => {
  //       console.log(error);
  //       alert('service error');
  //     });
  // };

  // const handleClickOne = () => {
  //   ////////얘가 넘겨주는 아이
  //   let teee = values;
  //   // teee["transportation"] = teee["values"]["transportation"]  
  //   teee["stay"]  = teee["values"]["stay"]  
  //   teee["destination"]  = teee["values"]["destination"] 
  //   teee["allergy"] = teee["values"]["allergie"]
  //   teee["eat"] = teee["values"]["eat"]
    
  //   teee['param4'] = values;
  //   navigate(show, { state: teee , //백에서 param이라는 이름으로
  //        category,});
  //   console.log(state)

  //   console.log(teee)
  // };

  // let teee = location.state;
  // teee["transportation"] = teee["param1"]["transportation"]
  // teee["stay"]  = teee["param1"]["stay"]
  // teee["destination"]  = teee["param1"]["destination"]
  // teee["allergie"] = teee["allergie"][]
  // teee["eat"] = teee["param3"]["eat"]

 

  const handleClick = () => {
    console.debug('퍼스트에서');
    navigate('/surveySecond', {
      state: {
        param1: values, 
        param2: category1, //백에서 param이라는 이름으로
        param3: category2,
        // papa: [values.transportation, category1, category2]

        // data: {
        //   transportation: values.transportation,
        //   stay: values.stay,
        //   destination: values.destination,
        //   allergy: category1,
        // },
        // test: values.transportation,
      },
    });
  };

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

  const checkHandler1 = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler1(target.name, target.value, target.checked);
  };

  const checkHandler2 = ({ target }) => {
    setIsChecked(!isChecked);
    checkedItemHandler2(target.name, target.value, target.checked);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const checkedItemHandler1 = (name, id, isChecked) => {
    if (isChecked) {
      checkedItems1.add(id);
      setCheckeditems1(checkedItems1);
    } else if (!isChecked && checkedItems1.has(id)) {
      checkedItems1.delete(id);
      setCheckeditems1(checkedItems1);
    }
    setcategory1({ [name]: Array.from(checkedItems1) });
    return checkedItems1;
  };

  const checkedItemHandler2 = (name, id, isChecked) => {
    if (isChecked) {
      checkedItems2.add(id);
      setCheckeditems2(checkedItems2);
    } else if (!isChecked && checkedItems2.has(id)) {
      checkedItems2.delete(id);
      setCheckeditems2(checkedItems2);
    }
    setcategory2({ [name]: Array.from(checkedItems2) });
    return checkedItems2;
  };

  // const showData = () => {
  //   console.log('value:', values);
  //   console.log('checked Items: ', checkedItems);
  // };

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
                  <input type="radio" name={item.name} value={item.value} onChange={onChange} />
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
              <label className="bd-s"> Are you allergic to food?</label>
              <label className="bd-m">
                *If you do not have an item, you do not need to select it.
              </label>
              {formAllergy.map((item) => (
                <label key={item.id} className="fi-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler1(e)}
                  />
                  <div>{item.value}</div>
                </label>
              ))}
            </div>
            <span className="boderSpan"></span>
            <div>
              <label className="bd-s">What do you eat?</label>
              <label className="bd-m">
                *If you do not have an item, you do not need to select it.
              </label>
              {formEat.map((item) => (
                <label key={item.id} className="fi-s">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler2(e)}
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
            <Button type="button" onClick={handleClick}>Next </Button>
            {/* <Button type="button" onClick={}>
              Next{' '}
            </Button> */}
          </div>
        </form>
      </div>
      <code>{JSON.stringify({ allergie: category1,  category2,   })}</code>
    </div>
  );
};

export default SurveyFirst;
