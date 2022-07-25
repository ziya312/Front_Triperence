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
import TestChoa from 'pages/testChoa';
import TestMir from 'pages/testMir';
import TestHimchan from 'pages/testHimchan';
import TestPureum from 'pages/testPureum';
import TestSodam from 'pages/testsodam';
import TestNori from 'pages/testNori';
import ChoaShow from 'pages/choaShow';
<<<<<<< Updated upstream
import MyPage from 'pages/myPage';
=======
import PlaceList from 'components/map/PlaceList';
>>>>>>> Stashed changes

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
          <Route path="/search" element={<PlaceList />}></Route>
          <Route path="/testChoa" element={<TestChoa />}></Route>
          <Route path="/testMir" element={<TestMir />}></Route>
          <Route path="/testHimchan" element={<TestHimchan />}></Route>
          <Route path="/testPureum" element={<TestPureum />}></Route>
          <Route path="/testSodam" element={<TestSodam />}></Route>
          <Route path="/testNori" element={<TestNori />}></Route>
          <Route path="/choaShow" element={<ChoaShow />}></Route>
          <Route path='/m' element={<MyPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
