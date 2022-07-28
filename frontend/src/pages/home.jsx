import React from 'react';
import "../components/Pages/home.css"
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className={{overflow:'hidden'}}>
        <div class="lb-wrap">
            <div class="lb-text">
                <h1>Let me know your travel preferences!</h1>
                <h1>We'll recommend a perfect travel destination for you!</h1>

                <Link to="./surveyFirst">
                <button className="lets">
                    <div className='oo'>
                    LET’S TEST
                    <img className="go" src={require("icons/next.svg").default} alt=""/>
                    </div>   
                </button>
                </Link>
            </div>
            <div class="lb-image">
                <img style={{}} src={require("images/main_test.jpg")}></img>
            </div>
        </div>
</div>
    );
}

export default Home;
