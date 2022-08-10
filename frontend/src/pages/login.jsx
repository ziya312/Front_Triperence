import { useState, useRef } from 'react';
import 'components/Pages/login.css';
// import 'components/Pages/nologin.css';
import FormInput from 'components/FormInput/FormInput';
import logo from 'icons/logo.svg';
import glogo from 'icons/googleLogo.svg';
import flogo from 'icons/faceLogo.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from "validator";

import AuthService from '../services/auth.service';

const required = (value) => {
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

const Login = () => {

const currentUser = AuthService.getCurrentUser();

  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password, ).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="form-container">
        <Form onSubmit={handleLogin} ref={form}>
          <h1>
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </h1>
          <div className="form-group">
            {/* <label htmlFor="email">Email</label> */}
            <Input
              type="text"
              className="form-control"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="password">Password</label> */}
            <Input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Login</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <p className="loginp">Don't have an account yet?</p>
        <Link className="llogin" to="/signup">
          sign up
        </Link>
        <div className="spanDiv">
          <span className="boderSpan"></span>
          <span>Or continue with</span>
          <span className="boderSpan"></span>
        </div>
        <div className="formicons">
          <Link to="#">
            <img src={glogo}></img>
          </Link>
          <Link to="#">
            <img src={flogo}></img>
          </Link>
        </div>
      </div>
    </div>
  );
  //   const [values, setValues] = useState({
  //     email: '',
  //     password: '',
  //   });

  //   let navigate = useNavigate();
  //   const inputs = [
  //     {
  //       id: 1,
  //       name: 'email',
  //       type: 'email',
  //       placeholder: 'Email',
  //       errorMessage: 'It should be a valid email address!',
  //       // label: "Email",
  //       required: true,
  //     },
  //     {
  //       id: 2,
  //       name: 'password',
  //       type: 'password',
  //       placeholder: 'Password',
  //       errorMessage:
  //         'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
  //       // label: "Password",
  //       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
  //       required: true,
  //     },
  //   ];
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  //   const handleApi = () => {
  //     console.log('value: ', values);
  //     // axios
  //     //   .post('https://jsonplaceholder.typicode.com/posts', {
  //     //     email: values.email,
  //     //     password: values.password,
  //     //   })
  //     //   .then((result) => {
  //     //     console.log(result.data);
  //     //     alert('success');
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error);
  //     //     alert('service error');
  //     //   });
  //     AuthService.login(values.email, values.password).then(
  //       () => {
  //         navigate('/');
  //         window.location.reload();
  //       },
  //       (error) => {
  //         // const resMessage =
  //         //   (error.response && error.response.data && error.response.data.message) ||
  //         //   error.message ||
  //         //   error.toString();

  //         // setLoading(false);
  //         // setMessage(resMessage);
  //       },
  //     );
  //   };
  //   const onChange = (e) => {
  //     setValues({ ...values, [e.target.name]: e.target.value });
  //   };
  //   const showData = () => {
  //     console.log('value:', values);
  //   };
  //   return (
  //     <div className="app">
  //       <form onSubmit={handleSubmit}>
  //         <h1>
  //           <Link to="/">
  //             <img src={logo}></img>
  //           </Link>
  //         </h1>
  //         {inputs.map((input) => (
  //           <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
  //         ))}
  //         <div className="ps">
  //           <button onClick={handleApi}>Login</button>
  //         </div>
  //         <p className="loginp">Don't have an account yet?</p>
  //         <Link className="logina" to="/signup">
  //           sign up
  //         </Link>
  //         <div className="spanDiv">
  //           <span className="boderSpan"></span>
  //           <span>Or continue with</span>
  //           <span className="boderSpan"></span>
  //         </div>
  //         <div className="formicons">
  //           <Link to="#">
  //             <img src={glogo}></img>
  //           </Link>
  //           <Link to="#">
  //             <img src={flogo}></img>
  //           </Link>
  //         </div>
  //       </form>
  //     </div>
  //   );
  // };
};

export default Login;
