import React, { Component, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  const [category1, setcategory1] = useState({ k_pop: ['null'] }); //{pop: []} { allergie: ['null'] }
  const [category2, setcategory2] = useState({ k_movie_drama: ['null'] });
  const navigate = useNavigate();
  const location = useLocation(); //가져올 때
  const state = '';
  // const {state}=useLocation();
  const [submitValues, setSubmitValues] = useState({ param: [] });

  useEffect(() => {
    console.log('값', location.state);
  }, []);

  const aaa = location;

  let ty = location.state;
  // ty['transportation'] = ty['transportation'];
  // ty['stay'] = ty['stay'];
  // ty['destination'] = tyde['stination'];
  // ty['allergie'] = ty['allergie'];
  // ty['eat'] = ty['eat'];
  // ty['category'] = ty['category'];
  // ty["k_pop"] = ty["k_pop"]
  // ty["k_movie_drama"] = ty["k_movie_drama"]

  const eatResult = ty.eat.join();
  const allergieResult = ty.allergie.join();


  const k_popResult = category1["k_pop"].join();
  const k_movieResult = category2["k_movie_drama"].join();

  console.log('한번 볼거야ㅑ', k_popResult);
  // console.log('두번 볼거야ㅑ', category2["k_movie_drama"]);

  const handleApi = () => {
    // console.debug(category1, '하하하ㅏ');
    // console.debug(category2, '하하하ㅏ');
    // console.log('dddd', category2);
    // console.log('이게 aaa', aaa.state);
    // console.log('이게 ty', k_popResult)

    // axios({
    //   method: 'post',
    //   url: '/survey/save',
    //   data: {

    //   "transportation": aaa.state.transportation,
    //   "destination": aaa.state.destination,
    //   "category": aaa.state.category,
    //   }

    //   // baseURL: 'http://localhost:8080'
    // })
    // .then(function (response) {
    //       alert('다음장');
    //       console.log(response.data);
    //       navigate('/showResult');
    // })
    //-----------------------------------------
    axios
      .post('/survey/save', {
        // nature: arr
        // param1: category1, //백에서 param이라는 이름으로
        // param2: category2,
        // param: location(state),

        //이 아래도 되는것
        // "transportation": aaa.state.transportation,
        // "stay": aaa.state.stay,
        // "eat": aaa.state.eat,
        // "allergie": aaa.state.allergie,
        // "destination": aaa.state.destination,
        // "category": aaa.state.category,
        // "k_pop": category1["k_pop"],
        // "k_movie_drama": category2["k_movie_drama"]

        "transportation": ty.transportation,
        "stay": ty.stay,
        "destination": ty.destination,
        "category": ty.category,
        "eat": eatResult,
        "allergie": allergieResult,
        "k_pop": k_popResult,
        "k_movie_drama": k_movieResult,

        // paramk: submitValues,
        // 함수 하나 만들어서 변수에 배열을 저장해주면 됨
      })
      .then(function (response) {
        alert('다음장');
        navigate('/showResult');
        // console.log(response.data);
      })

      // .then(response => {
      //   const data = response.json()
      //   console.log(data)
      //   alert('다음장');
      //   navigate('/showResult');
      // })

      .catch((error) => {
        console.log(error);
        alert('service error');
        console.log(error.data);
      });
    // .then((response) => setData(JSON.stringify(response.data)));
    // console.log(data);
  };

  const real = (location) => {
    setSubmitValues({ ...submitValues, [location.key]: location.value });
  };

  // useEffect(() => {
  //   console.log('봐봐라', aaa.transportation);
  // }, [aaa]);

  const formPop = [
    { id: 1, name: 'k_pop', value: 'BTS', imageSrc: require('../images/bts1.jpeg') },
    { id: 2, name: 'k_pop', value: 'BLACKPINK', imageSrc: require('../images/blackpink1.jpg') },
    { id: 3, name: 'k_pop', value: 'PSY', imageSrc: require('../images/psy.jpg') },
    { id: 4, name: 'k_pop', value: 'EXO', imageSrc: require('../images/exo.jpg') },
    { id: 5, name: 'k_pop', value: 'NCT', imageSrc: require('../images/nct1.jpg') },
    { id: 6, name: 'k_pop', value: 'G.Idle', imageSrc: require('../images/gidle.jpg') },
    { id: 7, name: 'k_pop', value: 'REDVELVET', imageSrc: require('../images/redvelvet.jpg') },
    { id: 8, name: 'k_pop', value: 'SVT', imageSrc: require('../images/svt2.jpg') },
    { id: 9, name: 'k_pop', value: 'TWICE', imageSrc: require('../images/twice.jpg') },
  ];

  const formMedia = [
    {
      id: 1,
      name: 'k_movie_drama',
      value: 'PARASITE',
      imageSrc: require('../images/parasite2.jpg'),
    },
    {
      id: 2,
      name: 'k_movie_drama',
      value: 'TRAIN TO BUSAN',
      imageSrc: require('../images/traintobusan.jpg'),
    },
    {
      id: 3,
      name: 'k_movie_drama',
      value: 'HOTEL DEL LUNA',
      imageSrc: require('../images/hoteldelluna2.jpg'),
    },
    { id: 4, name: 'k_movie_drama', value: 'SQUID GAME', imageSrc: require('../images/squid.jpg') },
    {
      id: 5,
      name: 'k_movie_drama',
      value: 'VINCENZO',
      imageSrc: require('../images/vincenzo1.jpg'),
    },
    {
      id: 6,
      name: 'k_movie_drama',
      value: ' KINGDOM ',
      imageSrc: require('../images/kingdom.jpg'),
    },
    {
      id: 7,
      name: 'k_movie_drama',
      value: 'MR.SUNSHINE',
      imageSrc: require('../images/mrsunshine1.jpg'),
    },
    {
      id: 8,
      name: 'k_movie_drama',
      value: ' LANDING ON YOU',
      imageSrc: require('../images/crash.png'),
    },
    {
      id: 9,
      name: 'k_movie_drama',
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
      <code>{JSON.stringify({ data: aaa.state.transportation })}</code>
    </div>
  );
};

export default SurveyChoa;
