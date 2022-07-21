import { Component, useState } from 'react';
import 'components/Pages/signup.css';
import FormInput from 'components/FormInput/FormInput';
import logo from 'icons/logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sign = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    nationdefault: '',
    givenname: '',
    familyname: '',
    gender: '',
    age: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'ID(Email)',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: 'givenname',
      type: 'text',
      placeholder: 'Given Name',
      label: 'Name',
      required: true,
    },
    {
      id: 5,
      name: 'familyname',
      type: 'text',
      placeholder: 'Family Name',
      required: true,
    },
    {
      id: 6,
      name: 'nickname',
      type: 'text',
      placeholder: 'Nickname',
      label: 'NickName',
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleApi = () => {
    console.log('value: ', values);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        nickname: values.nickname,
        nationdefault: values.nationdefault,
        givenname: values.givenname,
        familyname: values.familyname,
        gender: values.gender,
        age: values.age,
      })

      .then((result) => {
        console.log(result.data);
        alert('success');
      })

      .catch((error) => {
        console.log(error);
        alert('service error');
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const showData = () => {
    console.log('value:', values);
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>
          <Link to="/">
            {' '}
            <img src={logo}></img>
          </Link>
        </h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        <div className="gabox">
          <div>
            <label className="bigL"> Gender</label>

            <div className="totalgen">
              <label className="gen1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={onChange}
                  checked={values.gender === 'Male'}
                />
                <div>Male</div>
              </label>

              <label className="gen2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={onChange}
                  checked={values.gender === 'Female'}
                ></input>
                <div>Female</div>
              </label>
              <label className="gen3">
                <input
                  onChange={onChange}
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={values.gender === 'Other'}
                ></input>
                <div>Other</div>
              </label>
            </div>
          </div>
          <div>
            <label className="bigL"> Age</label>
            <label className="age1">
              <input
                onChange={onChange}
                type="radio"
                name="age"
                value="~20's"
                checked={values.age === "~20's"}
              ></input>
              <div>~20s</div>
            </label>
            <label className="age2">
              <input onChange={onChange} type="radio" name="age" value="30s"></input>
              <div>30s</div>
            </label>
            <label className="age3">
              <input onChange={onChange} type="radio" name="age" value="40's"></input>
              <div>40s</div>
            </label>
            <label className="age4">
              <input onChange={onChange} type="radio" name="age" value="50's~"></input>
              <div>50s~</div>
            </label>
          </div>
        </div>

        <div className="nationdefault">
          <div>
            <label> Nationlity</label>
            <select onChange={onChange} value={values.nationdefault} name="nationdefault">
              <option value="nation">Nationlity</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="japan">JAPAN</option>
            </select>
          </div>
        </div>
        <div className="ps">
          <button onClick={handleApi}>Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
