import { useState } from "react";
import "../components/Pages/login.css";
import FormInput from "../components/FormInput/FormInput";
import logo from "../icons/logo.svg";
import glogo from "../icons/googleLogo.svg";
import flogo from "../icons/faceLogo.svg";
import {Link} from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            // label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            // label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const showData = () => {
        console.log("value:", values);
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>
                    <Link to="/">
                        <img src={logo}></img>
                    </Link>
                </h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <div className="ps">
                <button onClick={showData}>Login</button>
                </div>
                <p className="loginp">Don't have an account yet?</p>
                <Link className="logina" to="/signup">
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
            </form>
        </div>
    );
};

export default Login;