import { Component, useState, useRef  } from 'react';
import 'components/Pages/signup.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import FormInput from 'components/FormInput/FormInput';
import logo from 'icons/logo.svg';
import { isEmail } from "validator";
import "components/Pages/login.css";
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

import AuthService from '../services/auth.service';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vnickname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vfamilyname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vgivenname = value => {
  if (value.length < 3 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};



const Sign = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [givenname, setGivenname] = useState("");
  const [familyname, setFamilyname] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeNickname = e => {
    const nickname = e.target.value;
    setNickname(nickname);
  };

  const onChangeGivenname = e => {
    const givenname = e.target.value;
    setGivenname(givenname);
  };

  const onChangeFamilyname = e => {
    const familyname = e.target.value;
    setFamilyname(familyname);
  };

  const onChangeAge = e => {
    const age = e.target.value;
    setAge(age);
  };

  const onChangeNationality = e => {
    const nationality = e.target.value;
    setNationality(nationality);
  };

  const onChangeGender = e => {
    const gender = e.target.value;
    setGender(gender);
  };

  const handleRegister = e => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      
      AuthService.register(
        email,
        password,
        nickname,
        givenname,
        familyname,
        age,
        nationality,
        gender
      ).then(
        response => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
 
  return (
    <div className="app">
      <div className="form-container">
        <img src={logo}
        />
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="nickname"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={onChangeNickname}
                  validations={[required, vnickname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="givenname">Givenname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="givenname"
                  placeholder="Givename"
                  value={givenname}
                  onChange={onChangeGivenname}
                  validations={[required, vgivenname]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="familyname">Familyname</label>
                <Input
                  type="text"
                  className="form-control"
                  name="familyname"
                  placeholder="Familyname"
                  value={familyname}
                  onChange={onChangeFamilyname}
                  validations={[required, vfamilyname]}
                />
              </div>

              <div className="form-group"> 
                <label htmlFor="age">Age</label>
                <Input
                  type="text"
                  className="form-control"
                  name="age"
                  value={age}
                  
                  onChange={onChangeAge}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nationality">Nationality</label>
                <Input
                  type="text"
                  className="form-control"
                  name="nationality"
                  value={nationality}
                  onChange={onChangeNationality}
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <Input
                  type="text"
                  className="form-control"
                  name="gender"
                  value={gender}
                  onChange={onChangeGender}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   nickname: '',
  //   nationdefault: '',
  //   givenname: '',
  //   familyname: '',
  //   gender: '',
  //   age: '',
  // });

  // let navigate = useNavigate();

  // const inputs = [
  //   {
  //     id: 1,
  //     name: 'email',
  //     type: 'email',
  //     placeholder: 'Email',
  //     errorMessage: 'It should be a valid email address!',
  //     label: 'ID(Email)',
  //     required: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'password',
  //     type: 'password',
  //     placeholder: 'Password',
  //     errorMessage:
  //       'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
  //     label: 'Password',
  //     pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //     required: true,
  //   },
  //   {
  //     id: 3,
  //     name: 'confirmPassword',
  //     type: 'password',
  //     placeholder: 'Confirm Password',
  //     errorMessage: "Passwords don't match!",
  //     pattern: values.password,
  //     required: true,
  //   },
  //   {
  //     id: 4,
  //     name: 'givenname',
  //     type: 'text',
  //     placeholder: 'Given Name',
  //     label: 'Name',
  //     required: true,
  //   },
  //   {
  //     id: 5,
  //     name: 'familyname',
  //     type: 'text',
  //     placeholder: 'Family Name',
  //     required: true,
  //   },
  //   {
  //     id: 6,
  //     name: 'nickname',
  //     type: 'text',
  //     placeholder: 'Nickname',
  //     label: 'NickName',
  //     required: true,
  //   },
  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleApi = () => {
  //   console.log('value: ', values);
  //   // axios
  //   //   .post('https://jsonplaceholder.typicode.com/posts', {
  //   //     email: values.email,
  //   //     password: values.password,
  //   //     confirmPassword: values.confirmPassword,
  //   //     nickname: values.nickname,
  //   //     nationdefault: values.nationdefault,
  //   //     givenname: values.givenname,
  //   //     familyname: values.familyname,
  //   //     gender: values.gender,
  //   //     age: values.age,
  //   //   })

  //   //   .then((result) => {
  //   //     console.log(result.data);
  //   //     alert('success');
  //   //   })

  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //     alert('service error');
  //   //   });

  //   AuthService.register(
  //     values.email,
  //     values.password,
  //     values.nickname,
  //     values.nationdefault,
  //     values.givenname,
  //     values.familyname,
  //     values.gender,
  //     values.age,
  //   ).then(
  //     () => {
  //       alert('success');
  //       navigate('/login');
  //       // window.location.reload();
  //     },
  //     (error) => {
  //       const resMessage =
  //         (error.response && error.response.data && error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       // setLoading(false);
  //       // setMessage(resMessage);
  //     },
  //   );
  // };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const showData = () => {
  //   console.log('value:', values);
  // };
  // return (
  //   <div className="app">
  //     <form onSubmit={handleSubmit}>
  //       <h1>
  //         <Link to="/">
  //           {' '}
  //           <img src={logo}></img>
  //         </Link>
  //       </h1>
  //       {inputs.map((input) => (
  //         <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
  //       ))}

  //       <div className="gabox">
  //         <div>
  //           <label className="bigL"> Gender</label>

  //           <div className="totalgen">
  //             <label className="gen1">
  //               <input
  //                 type="radio"
  //                 name="gender"
  //                 value="Male"
  //                 onChange={onChange}
  //                 checked={values.gender === 'Male'}
  //               />
  //               <div>Male</div>
  //             </label>

  //             <label className="gen2">
  //               <input
  //                 type="radio"
  //                 name="gender"
  //                 value="Female"
  //                 onChange={onChange}
  //                 checked={values.gender === 'Female'}
  //               ></input>
  //               <div>Female</div>
  //             </label>
  //             <label className="gen3">
  //               <input
  //                 onChange={onChange}
  //                 type="radio"
  //                 name="gender"
  //                 value="Other"
  //                 checked={values.gender === 'Other'}
  //               ></input>
  //               <div>Other</div>
  //             </label>
  //           </div>
  //         </div>
  //         <div>
  //           <label className="bigL"> Age</label>
  //           <label className="age1">
  //             <input
  //               onChange={onChange}
  //               type="radio"
  //               name="age"
  //               value="~20's"
  //               checked={values.age === "~20's"}
  //             ></input>
  //             <div>~20s</div>
  //           </label>
  //           <label className="age2">
  //             <input onChange={onChange} type="radio" name="age" value="30s"></input>
  //             <div>30s</div>
  //           </label>
  //           <label className="age3">
  //             <input onChange={onChange} type="radio" name="age" value="40's"></input>
  //             <div>40s</div>
  //           </label>
  //           <label className="age4">
  //             <input onChange={onChange} type="radio" name="age" value="50's~"></input>
  //             <div>50s~</div>
  //           </label>
  //         </div>
  //       </div>

  //       <div className="nationdefault">
  //         <div>
  //           <label> Nationlity</label>
  //           <select onChange={onChange} value={values.nationdefault} name="nationdefault">
  //             <option value="nation">Nationlity</option>
  //             <option value="usa">USA</option>
  //             <option value="uk">UK</option>
  //             <option value="japan">JAPAN</option>
  //           </select>
  //         </div>
  //       </div>
  //       <div className="ps">
  //         <button onClick={handleApi}>Sign up</button>
  //       </div>
  //     </form>
  //   </div>
  // );
};

export default Sign;
