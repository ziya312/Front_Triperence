import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

import AuthService from "./services/auth.service";

import EventBus from "./common/EventBus";

function Header() {
    const [search, setsearch] = useState("out");
    const [COURSE, setCOURSE] = useState("out");
    const [MEET, setMEET] = useState("out");
    const [searchbox, setsearchbox] = useState("none");
    const [login, setlogin] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }

        EventBus.on("logout", () => {
            logOut();
        });

        return () => {
            EventBus.remove("logout");
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setCurrentUser(undefined);
    };


    return (
        <div>
            <div className="a">
                <Link to="/">
                    <div className="logo">
                        <img className="w" src={require("../../icons/Vector.svg").default} alt=""/>
                    </div>
                    <div className="logot">
                        <img src={require("../../icons/Triperence.svg").default} alt=""/>
                    </div>
                </Link>
                <div className='dlatll'>
                    <Link className="menu" to="/search"
                          style={{marginRight: '24px'}}
                          onMouseOver={() => setsearch("on")}
                          onMouseOut={() => setsearch("out")}>
                        {search === "out" ? (<div>SEARCH</div>)
                            : (<div style={{color:"#77AEFC"}}>SEARCH</div>)}
                    </Link>

                    <Link className="menu" to="/place"
                          style={{marginRight: '24px', marginLeft: '0px'}}
                          onMouseOver={() => setCOURSE("on")}
                          onMouseOut={() => setCOURSE("out")}>

                        {COURSE === "out" ? (<div>PLACE</div>)
                            : (<div style={{color:"#77AEFC"}}>PLACE</div>)}
                    </Link>

                    <Link className="menu" to="/meet"
                          style={{marginLeft: '0px'}}
                          onMouseOver={() => setMEET("on")}
                          onMouseOut={() => setMEET("out")}>

                        {MEET === "out" ? (<div>MEET</div>)
                            : (<div style={{color:"#77AEFC"}}>MEET</div>)}
                    </Link>
                </div>

                {currentUser ?
                    <Link to="w">
                        <div className='login'>{currentUser.nickname} ▼</div>
                        <img className="logi"
                             src={require("icons/sns1.svg").default}
                             onerror="this.src='images/default.png'"
                        />

                    </Link>
                    :
                        <Link to="/login"> <div className="loginbox">
                        Login/Sign up
                    </div></Link>
                        }

                <div className="searchimg">
                    <input className='searchbox'/>

                        <button className='searchbutton' href='/'>
                            <img className='sl' src={require("../../icons/Icon.svg").default} alt=""/>
                        </button>


                </div>
                <div className='wow'/>
                <div className='wow1' onClick={() => setsearchbox("vis")}/>

            </div>

        </div>
    );
}

export default Header;