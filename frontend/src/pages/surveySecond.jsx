import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SecondHeader from "../components/Header/secondHeader";
import "../components/Pages/surveySecond.css";
import Button from "../components/common/Button";


const SurveyTwo = () => {
    const [values, setValues] = useState({
        gender: "",
        age: "",
    });

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
        <div>
            <SecondHeader/>
            <div className="second-survey">
                <form onSubmit={handleSubmit}>
                    <div className="gabox">
                        <div>
                            <label className="bd">What kind of nature do you like?</label>


                                <input
                                    type="radio"
                                    name="nature"
                                    value="Forest"
                                    onChange={onChange}
                                />
                                <div>Forest</div>


                                <input
                                    onChange={onChange}
                                    type="radio"
                                    name="nature"
                                    value="Beach"
                                />
                                <div>Beach</div>


                                <input
                                    onChange={onChange}
                                    type="radio"
                                    name="nature"
                                    value="Mountain"
                                ></input>
                                <div>Mountain</div>

                        </div>

                        <span className="boderSpan"></span>
                    </div>
                    <div className="fsbtn">
                        <Link to="/surveyThird">
                        <Button onClick={showData}>Next -></Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SurveyTwo;