import React, { Component, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SecondHeader from 'components/Header/secondHeader';
import 'components/Pages/surveyFirst.css';
import Button from 'components/common/Button';
import CustomButton from 'components/common/CustomButton';
import axios from 'axios';

const SurveyChoa = () => {
  const [values, setValues] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems1, setCheckeditems1] = useState(new Set());
  const [checkedItems2, setCheckeditems2] = useState(new Set());
  const [category1, setcategory1] = useState({ pop: [] });
  const [category2, setcategory2] = useState({ media: [] });
  const navigate = useNavigate();

  const handleApi = () => {
    console.debug(category1, '하하하ㅏ');
    console.debug(category2, '하하하ㅏ');

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        // nature: arr
        param1: category1, //백에서 param이라는 이름으로
        param2: category2,
      })

      .then((result) => {
        console.log(result.data);
        alert('success');
        navigate('/showResult');
      })

      .catch((error) => {
        console.log(error);
        alert('service error');
      });
  };

  const formPop = [
    { id: 1, name: 'k-pop', value: 'BTS', imageSrc: require('../images/bts1.jpeg') },
    { id: 2, name: 'k-pop', value: 'BLACKPINK', imageSrc: require('../images/blackpink1.jpg') },
    { id: 3, name: 'k-pop', value: 'PSY', imageSrc: require('../images/psy.jpg') },
    { id: 4, name: 'k-pop', value: 'EXO', imageSrc: require('../images/exo.jpg') },
    { id: 5, name: 'k-pop', value: 'NCT', imageSrc: require('../images/nct1.jpg') },
    { id: 6, name: 'k-pop', value: 'G.Idle', imageSrc: require('../images/gidle.jpg') },
    { id: 7, name: 'k-pop', value: 'REDVELVET', imageSrc: require('../images/redvelvet.jpg') },
    { id: 8, name: 'k-pop', value: 'SVT', imageSrc: require('../images/svt2.jpg') },
    { id: 9, name: 'k-pop', value: 'TWICE', imageSrc: require('../images/twice.jpg') },
  ];

  const formMedia = [
    {
      id: 1,
      name: 'K-MOVIE/DRAMA',
      value: 'PARASITE',
      imageSrc: require('../images/parasite2.jpg'),
    },
    {
      id: 2,
      name: 'k-MOVIE/DRAMA',
      value: 'TRAIN TO BUSAN',
      imageSrc: require('../images/traintobusan.jpg'),
    },
    {
      id: 3,
      name: 'k-MOVIE/DRAMA',
      value: 'HOTEL DEL LUNA',
      imageSrc: require('../images/hoteldelluna2.jpg'),
    },
    { id: 4, name: 'k-MOVIE/DRAMA', value: 'SQUID GAME', imageSrc: require('../images/squid.jpg') },
    {
      id: 5,
      name: 'k-MOVIE/DRAMA',
      value: 'VINCENZO',
      imageSrc: require('../images/vincenzo1.jpg'),
    },
    {
      id: 6,
      name: 'k-MOVIE/DRAMA',
      value: ' KINGDOM ',
      imageSrc: require('../images/kingdom.jpg'),
    },
    {
      id: 7,
      name: 'k-MOVIE/DRAMA',
      value: 'MR.SUNSHINE',
      imageSrc: require('../images/mrsunshine1.jpg'),
    },
    {
      id: 8,
      name: 'k-MOVIE/DRAMA',
      value: ' LANDING ON YOU',
      imageSrc: require('../images/crash.png'),
    },
    {
      id: 9,
      name: 'k-MOVIE/DRAMA',
      value: 'ALL OF US OUR DEAD',
      imageSrc: require('../images/all_of_Us.jpg'),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // try {
    //   const resp = await axios.post
    // }
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
  //   navigate('/showResult');
  //   console.log('value:', values);
  //   console.log('checked Items: ', checkedItems);
  // };

  return (
    <div>
      <SecondHeader />
      <div className="testChoa">
        <form onSubmit={handleSubmit}>
          <div className="new-gabox">
            <div>
              <label className="bd">K-POP</label>
              {formPop.map((item) => (
                <label key={item.id} className="new-map">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.value}
                    onChange={(e) => checkHandler1(e)}
                    // onFocus={this.blur()}
                  />
                  <div>
                    {<img src={item.imageSrc} />}
                    {item.value}
                  </div>
                </label>
              ))}
              <span className="boderSpan"></span>
            </div>
          </div>

          <div className="testChoa">
            <div className="new-gabox">
              <div>
                <label className="bd">K-MOVIE/DRAMA</label>
                {formMedia.map((item) => (
                  <label key={item.id} className="new-map">
                    <input
                      type="checkbox"
                      name={item.name}
                      value={item.value}
                      onChange={(e) => checkHandler2(e)}
                    />
                    <div>
                      {<img src={item.imageSrc} />}
                      {item.value}
                    </div>
                  </label>
                ))}
              </div>
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

export default SurveyChoa;
