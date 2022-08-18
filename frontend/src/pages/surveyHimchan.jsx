import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/character.css';
import Button from 'components/common/Button';
import AuthService from '../components/Header/services/auth.service';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';
import Swal from 'sweetalert2'

const SurveyHimchan = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems1, setCheckeditems1] = useState(new Set());
  const [checkedItems2, setCheckeditems2] = useState(new Set());
  const [category1, setcategory1] = useState({ shoot: ['null'] });
  const [category2, setcategory2] = useState({ subject: ['null'] });
  const navigate = useNavigate();
  const location = useLocation(); //가져올 때              //{state}
  const state = '헤헤'; //

  useEffect(() => {
    console.log('값', location.state);
  }, []);

  let ty = location.state;

  const eatResult = ty.eat.join();
  const allergieResult = ty.allergie.join();
  const shootResult = category1['shoot'].join();
  const subjectResult = category2['subject'].join();

  const currentUser = AuthService.getCurrentUser();
  console.log(currentUser.email, currentUser.id);

  const handleApi = () => {
    console.debug(category2, '가가가');

    axios
      .post('/survey/save', {
        transportation: ty.transportation,
        stay: ty.stay,
        destination: ty.destination,
        category: ty.category,
        eat: eatResult,
        allergie: allergieResult,
        shoot: shootResult,
        subject: subjectResult,
        user_id: currentUser.id,
        user_email: currentUser.email,
      })

      .then(function (response) {
        Swal.fire({
          title: 'Complete',
          text: 'Click OK to show your "travel preferences!"',
          confirmButtonText: 'OK'
        }).then(function(){navigate('/showResult');})
        // navigate('/showResult');
        // console.log(response.data);
      })

      .catch((error) => {
        console.log(error);
        alert('service error');
      });
  };

  const formPrefer = [
    { id: 1, name: 'shoot', value: 'Photo' },
    { id: 2, name: 'shoot', value: 'Video' },
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
                    onChange={(e) => checkHandler1(e)}
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
                    onChange={(e) => checkHandler2(e)}
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

export default SurveyHimchan;
