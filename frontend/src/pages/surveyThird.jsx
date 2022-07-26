import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import SecondHeader from "../components/Header/secondHeader";
import "../components/Pages/surveyThird.css";
import Button from "../components/common/Button";

const SurveyThird = () =>  {
    const [values, setValues] = useState({});
    const [isChecked, setIsChecked] = useState(false);
    const [checkedItems, setCheckeditems] = useState(new Set());

    const formData1 = [
        { id: 1, name: "K-POP", value: "BTS"  },
        { id: 2, name: "K-POP", value: "BLACKPINK" },
        { id: 3, name: "K-POP", value: "PSY" },
        { id: 4, name: "K-POP", value: "SEVENTEEN" },
        { id: 5, name: "K-POP", value: "EXO" },
        { id: 6, name: "K-POP", value: "TWICE" },
        { id: 7, name: "K-POP" , value: "NCT"},
        { id: 8, name: "K-POP" , value: "RED VELVET"},
        { id: 9, name: "K-POP", value: "G-IDLE" },
    ];

    const formData2 = [
        { id: 1, name: "K-MOVIE", value: "Parasite"  },
        { id: 2, name: "K-DRAMA",value: "Squid Game" },
        { id: 3, name: "K-DRAMA",value: "Mr.Sunshine" },
        { id: 4, name: "K-DRAMA",value: "Hotel del Luna" },
        { id: 5, name: "K-DRAMA",value: "Vincenzo" },
        { id: 6, name: "K-DRAMA",value: "Sweet Home" },
        { id: 7, name: "K-DRAMA",value: "Crash landing on you" },
        { id: 8, name: "K-DRAMA",value: "The Penthouse" },
        { id: 9, name: "K-DRAMA",value: "All of us are dead"}
    ];
    const formData3 = [
        { id: 1, name: "K-FOOD", value: "HBAF" },
        { id: 2, name: "K-FOOD", value: "Bulgogi" },
        { id: 3, name: "K-FOOD", value: "Chicken" },
        { id: 4, name: "K-FOOD", value: "Bibimbap" },
        { id: 5, name: "K-FOOD", value: "Kimchi" },
        { id: 6, name: "K-FOOD", value: "Tteokbokki" },
        { id: 7, name: "K-FOOD", value: "Budae-jjigae" },
        { id: 8, name: "K-FOOD", value: "Kimbap" },
        { id: 9, name: "K-FOOD", value: "Japchae" },
];
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckeditems(checkedItems);
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckeditems(checkedItems);
        }
        return checkedItems;
    };

    const showData = () => {
        console.log("value:", values);
        console.log("checked Items: ", checkedItems);
    };

    return (
        <div className="contStyle">
            <SecondHeader/>
            <div className="third-survey">
                <form onSubmit={handleSubmit}>
                    <div className="th-gabox">
                        <div>
                        <label className="bd">K-POP</label>
                            {formData1.map((item) => (
                <label key={item.id} className="th-map">
                    <input
                        type="checkbox"
                        name={item.name}
                        value={item.value}
                        onChange={(e) => checkHandler(e)}
                    />
                    <div>{item.value}</div>
                </label>
            ))}

           <span className="boderSpan"></span>
                            <label className="bd">
                                K-MOVIE/K-DRAMA
                            </label>
                            {formData2.map((item) => (
                                <label key={item.id} className="th-map">
                                    <input
                                        type="checkbox"
                                        name={item.name}
                                        value={item.value}
                                        onChange={(e) => checkHandler(e)}
                                    />
                                    <div>{item.value}</div>
                                </label>
                            ))}
                            <span className="boderSpan"></span>
                            <label className="bd-s">
                                K-FOOD
                            </label>
                            <label className="bd-m">*HBAF : Korean almond snack</label>
                            {formData3.map((item) => (
                                <label key={item.id} className="th-map">
                                    <input
                                        type="checkbox"
                                        name={item.name}
                                        value={item.value}
                                        onChange={(e) => checkHandler(e)}
                                    />
                                    <div>{item.value}</div>
                                </label>
                            ))}

             <div className="fsbtn">
                <Link to="#">
                    <Button onClick={showData}>finish</Button>
                 </Link>
             </div>

        </div>
        </div>
        </form>
        </div>
        </div>
    );
};

export default SurveyThird;