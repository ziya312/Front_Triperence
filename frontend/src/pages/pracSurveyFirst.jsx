import { Component, useState } from "react";
import "../components/Pages/signup.css";
import FormInput from "../components/FormInput/FormInput";
import logo from "../icons/logo.svg";
import {Link} from "react-router-dom";

const pracSurveyFirst = () => {
    const [isChecked, setIsChecked] = useState(false); //체크여부
    const [checkedItems, setCheckeditems] = useState(new Set()); //체크된 요소들
    const [values, setValues] = useState({
        name : ""
    });

    const formData = [
        { id: 1, name: "bts" },
        { id: 2, name: "blackpink" },
        { id: 3, name: "psy" },
        { id: 4, name: "seventeen" },
        { id: 5, name: "exo" },
        { id: 6, name: "twice" },
        { id: 7, name: "nct" },
        { id: 8, name: "red velvet" },
        { id: 9, name: "g-idle" },
    ];

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };

    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckeditems(checkedItems);
            box.style.backgroundColor = "#F6Cb44";

        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckeditems(checkedItems);
            box.style.backgroundColor = "#fff";
        }
        return checkedItems;

    };



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
                    {formData.map((item) => (
                        <label key={item.id} className="innerBox1">
                            <input
                                type="checkbox"
                                value={item.name}
                                onChange={(e) => checkHandler(e)}
                            />
                            <div>{item.name}</div>
                        </label>
                    ))}
                    <button onClick={showData}>Login</button>
            </form>
        </div>
    );
};

export default pracSurveyFirst;
