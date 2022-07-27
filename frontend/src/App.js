import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/Header/header';
import React, { useEffect } from 'react';
import Home from 'pages/home';
import Login from 'pages/login';
import Signup from 'pages/signup';
import SurveyFirst from 'pages/surveyFirst';
import SurveySecond from 'pages/surveySecond';
import Search from 'pages/practice';
import Footer from 'components/Footer/footer';
import CheckLayout from 'components/CheckForm/CheckLayout';
import Detail from 'pages/detail';
import SurveyMir from 'pages/surveyMir';
import SurveyHimchan from 'pages/surveyHimchan';
import SurveyPureum from 'pages/surveyPureum';
import SurveySodam from 'pages/surveySodam';
import SurveyNori from 'pages/surveyNori';
import ShowChoa from 'pages/surveyChoa';
import ShowResult from 'pages/showResult'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/surveyFirst" element={<SurveyFirst />}></Route>
          <Route path="/surveySecond" element={<SurveySecond />}></Route>
          <Route path="/checkLayout" element={<CheckLayout />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
      
          <Route path="/surveyMir" element={<SurveyMir />}></Route>
          <Route path="/surveyHimchan" element={<SurveyHimchan />}></Route>
          <Route path="/surveyPureum" element={<SurveyPureum />}></Route>
          <Route path="/surveySodam" element={<SurveySodam />}></Route>
          <Route path="/surveyNori" element={<SurveyNori />}></Route>
          <Route path="/surveyChoa" element={<ShowChoa />}></Route>

          <Route path="/showResult" element={<ShowResult />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
