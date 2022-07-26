import React from 'react';
import "components/Pages/home.css"
import {Link} from "react-router-dom";
import ModalPerformance from 'components/common/ModalPerformance';

function Home() {
    return (
        <div class="lb-wrap">
            <div class="lb-text">
                <h1>Let me know your travel preferences!</h1>
                <h1>We'll recommend a perfect travel destination for you!</h1>
<ModalPerformance />
                <Link to="./surveyFirst">
                <button> Let's Test
                    <img src={require("../icons/next.svg")}></img>
                </button>
                </Link>
            </div>
            <div class="lb-image">
                <img src={require("../images/main_test.jpg")}></img>
            </div>
        </div>
    );
}

export default Home;
