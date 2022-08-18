import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/style.css";
import axios from 'axios';

const Login = ({ setLoginUser }) => {

  const history=useNavigate();

  const [user,setUser]=useState({
    name:"",
    password:""
  })

  const handleChange=e=>{
    const { name, value }=e.target;
        console.log(name,value);
        setUser({
            ...user,
            [name]:value
        })
  }

  const login=()=>{
    axios.post('http://localhost:9000/login',user)
        .then(res=>{
            alert(res.data.message);
            setLoginUser(res.data.user);
            history('/');
        });
  }

  return (
    <>
      <div className="container">
        <section id="content">
            <h1>Login Form</h1>
            <div>
              <input
                value={user.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Username"
                required=""
                id="username"
              />
            </div>
            <div>
              <input
                type="password"
                value={user.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                required=""
                id="password"
              />
            </div>
            <div>
              <button id="login" onClick={login}>Login</button>
              <button id="signin" onClick={()=>history("/signin")}>Signin</button>
            </div>
        </section>
      </div>
    </>
  );
};

export default Login;
