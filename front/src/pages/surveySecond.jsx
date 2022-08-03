import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyTwo.css';
import Button from 'components/common/Button';
import axios from 'axios';
import { data } from 'browserslist';
import ShowResult from './showResult';
import Img from 'components/test/Img';

const SurveyTwo = () => {
  const [values, setValues] = useState({
    category: '',
  });

  const [show, setShow] = useState('/showResult');
  const [type, setType] = useState(0);
  const navigate = useNavigate(); //넘길 때
  const location = useLocation(); //가져올 때              //{state}
  const state = '하하'; //

  // const {state} = useLocation(); //가져올 때              //{state}

  useEffect(() => {
    console.log('값', location.state);
  }, []);

  // console.log('어dkdlrn닌', param2);
  // console.log('어라라라닌', param3);

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

  // const handleApi = () => {
  //   console.log('value: ', values);
  //   axios
  //     .post('http://localhost:8080/survey/save', {
  //       state,
  //     })

  //     .then((result) => {
  //       console.log(result.data);
  //       alert('success');
  //       navigate(show);
  //     })

  //     .catch((error) => {
  //       console.log(error);
  //       alert('service error');
  //     });
  // };

  const handleClickOne = () => {
    
    ////////얘가 넘겨주는 아이
    let teee = location.state;
    teee["transportation"] = teee["param1"]["transportation"]  
    teee["stay"]  = teee["param1"]["stay"]  
    teee["destination"]  = teee["param1"]["destination"] 
    teee["allergie"] = teee["param2"]["allergie"]
    teee["eat"] = teee["param3"]["eat"]
    teee["category"] = values["category"]
    

    console.log(teee.allergie)
    
    // teee['param4'] = values;
    navigate(show, { 
      state: teee , //백에서 param이라는 이름으로
    });
    console.log('야야야', teee)
  };

  const hahahah = () => {
    console.debug(state);
  };

  const handle = (e) => {
    const newdata = { ...values };
    newdata[e.target.name] = e.target.value;
    setValues(newdata);
    console.log(newdata);
  };

  const onChange = (e) => {
    console.debug(e.target.test, '윤희메롱');
    setValues({ ...values, [e.target.name]: e.target.value });
    setType(type + 1);
  };
  const tempChange = (name, value, id) => {
    setValues({ ...values, [name]: value });
    setType(id);
    if (id == 1) {
      console.debug('111111');
      setShow('/surveyChoa');
    } else if (id == 2) {
      console.debug('222222');
      setShow('/surveyMir');
    } else if (id == 3) {
      console.debug('33333');
      setShow('/surveyPureum');
    } else if (id == 4) {
      console.debug('444444');
      setShow('/surveySodam');
    } else if (id == 5) {
      console.debug('55555');
      setShow('/surveyNori');
    } else if (id == 6) {
      console.debug('66666');
      setShow('/surveyHimchan');
    }
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
                What do you think most important thing when you visit Korea?
              </label>
              {/* <p>{param}</p> */}
              {category.map((item) => (
                <label key={item.id} className="se-map">
                  <input
                    type="radio"
                    name={item.name}
                    value={item.value}
                    test={item.id}
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
          <div className="fsbtn">
            <Button type="button" onClick={handleClickOne}>
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SurveyTwo;
