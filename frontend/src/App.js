import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "components/Header/header"
import React, {useEffect} from "react"
import Home from "pages/home"
import Login from "pages/login"
import Signup from "pages/signup"
import SurveyFirst from "pages/surveyFirst"
import SurveyTwo from "pages/surveyTwo";
import Footer from "components/Footer/footer";
import CheckLayout from "components/CheckForm/CheckLayout";
import SurveyThird from "./pages/surveyThird";
import Detail from "pages/detail";
// import {useTranslation} from 'react-i18next'
import Place from "pages/practice";
import MapSearch from "./pages/MapPage";
import MapPage from "./pages/MapPage";
import Tag from "components/common/tag";
import MyPage from "pages/myPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/surveyFirst" element={<SurveyFirst/>}></Route>
                    <Route path="/surveyTwo" element={<SurveyTwo/>}></Route>
                    <Route path="/surveyThird" element={<SurveyThird/>}></Route>
                    <Route path="/checkLayout" element={<CheckLayout/>}></Route>
                    <Route path="/detail" element={<Detail/>}></Route>
                    <Route path="/search" element={<MapPage/>}></Route>
                    <Route path="/place" element={<Place/>}></Route>
                    <Route path="/t" element={<Tag/>}></Route>
                    <Route path="/w" element={<MyPage/>}></Route>
                    
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
