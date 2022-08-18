import './App.css';
import {Home,Login,Signin} from './components'
import React from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {useState} from "react";

function App() {
  const [user,setLoginUser]=useState({});
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={user&&user._id ? <Home setLoginUser={setLoginUser} userpassed={user}/> : <Login setLoginUser={setLoginUser}/>} /> 
        <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>} ></Route>
        <Route exact path='/signin' element={<Signin/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
